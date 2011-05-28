(function(App){
    App.MockedStatisticService = function(){
        var self = {},
        defaultStatistic = {
            ToursTotal: 505,
            ToursRunning: 110,
            ToursCompleted: 115 
        },
		currentStatistic = $.extend({}, defaultStatistic);;

        self.mockStatistic = function(statistics){
            currentStatistic = $.extend({}, defaultStatistic, statistics);
        };

        self.getStatistics = function(){        
			var asyncSubject = new Rx.AsyncSubject();
			asyncSubject.OnNext(currentStatistic);
			asyncSubject.OnCompleted();
			return asyncSubject.AsObservable();
        };

        return self;
    };
})(App)