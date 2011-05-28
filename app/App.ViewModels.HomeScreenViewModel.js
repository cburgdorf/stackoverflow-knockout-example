(function(App){
  App.ViewModels.HomeScreenViewModel = function(service){
    var self = {}, disposableServicePoller = Rx.Disposable.Empty;

    self.toursTotal = ko.observable(0);
    self.toursRunning = ko.observable(0);
    self.toursCompleted = ko.observable(0);
    self.toursAvailable = ko.dependentObservable(function(){ return this.toursTotal() > 0; }, self);
    self.showTourList = function(){ $.mobile.changePage('#tourlist', 'pop', false, true); };        
    self.startServicePolling = function(){  
        disposableServicePoller = Rx.Observable
            .Interval(10000)
            .Select(service.getStatistics)
            .Switch()
            .Subscribe(function(statistics){
                self.toursTotal(statistics.ToursTotal);
                self.toursRunning(statistics.ToursRunning); 
                self.toursCompleted(statistics.ToursCompleted); 
            });
    };
    self.stopServicePolling = disposableServicePoller.Dispose;      

    return self; 
  };
})(App)