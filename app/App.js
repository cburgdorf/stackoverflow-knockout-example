var App = window.App = {};
App.ViewModels = {};

$(document).bind('mobileinit', function(){
    // while app is running use App.Service.mockStatistic({ToursCompleted: 45}); to fake backend data from the console
    var service = App.Service = new App.MockedStatisticService();    

  $('#home').live('pagecreate', function(event, ui){
        var viewModel = new App.ViewModels.HomeScreenViewModel(service);
        ko.applyBindings(viewModel, this);
        viewModel.startServicePolling();
  });
});