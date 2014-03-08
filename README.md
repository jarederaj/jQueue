jQueue
======

A small jQuery extension that handles queuing callbacks to the existence of a varibale, object, or key. You can assign any number of callbacks to any number of datapoinsts that might be effected by processes running in the background. jQueuery listens and waits for these data you specify to come into existence and then fires off the correct callback with its arguments.

This solves several problems in a simple way but most notably handles issues caused by Internet Explorer's sloppy implementation of setTimeout. It can also be used to assign callbacks to asynchronously fetched data that you've already requested but haven't yet received, which is a use case that seems to be left out of jQuery's ajax implementation.

Example
-------

    var exFunc = function(args) {
        console.log(args);
    }
    dataObj = {};
    $.fn.jQueuery.init(
        dataObj, 'key', exFunc, ['arg1', 'arg2']);
    dataObj['key'] = 'foo';
