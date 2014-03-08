jQueue
======

A small jQuery extension that handles queuing callbacks to the existence of a variable, object, or key. You can assign any number of callbacks to any number of data points that might be affected by processes running in the background. jQueue listens and waits for these data to be created, firing off the correct callback and argument (use assoctiative arrays for complex sets of arguments).

This solves several problems in a simple way but most notably handles issues caused by Internet Explorer's sloppy implementation of setTimeout. It can also be used to assign callbacks to asynchronously fetched data that you've already requested but haven't yet received, which is a use case that seems to be left out of jQuery's ajax implementation.

Modern browsers can instead use defineProperty() and achieve a much greater range of functionality.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

Example
-------

    var exFunc = function(args) {
        console.log(args);
    }
    dataObj = {};
    $.fn.jQueue.listen(
        dataObj, 'key', exFunc, ['arg1', 'arg2']);
    dataObj['key'] = 'foo';
