// Here's a custom Knockout binding that makes elements shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
ko.bindingHandlers.jqmButtonFadeVisible = {
    init: function (element, valueAccessor) {
        // Initially set the element to be instantly visible/hidden depending on the value
        var value = valueAccessor();
        $(element).parent('div.ui.btn').toggle(ko.utils.unwrapObservable(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
    },
    update: function (element, valueAccessor) {
        // Whenever the value subsequently changes, slowly fade the element in or out
        var value = valueAccessor();
        ko.utils.unwrapObservable(value) ? $(element).parent('div.ui-btn').fadeIn() : $(element).parent('div.ui-btn').fadeOut();
    }
};

// Here's a custom Knockout binding that enables/disables a jquery-mobile button
ko.bindingHandlers.jqmButtonEnabled = {
    init: function (element, valueAccessor) {
        // Initially set the element to be instantly enabled/disabled depending on the value
        var value = valueAccessor();
        $(element).button().button(ko.utils.unwrapObservable(value) ? 'enable' : 'disable');;
    },
    update: function (element, valueAccessor) {
        // Whenever the value subsequently changes, enable or disable the button
        var value = valueAccessor();
        $(element).button(ko.utils.unwrapObservable(value) ? 'enable' : 'disable');
    }
};