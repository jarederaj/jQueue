(function($){
    $.fn.jQueue = {

        ids: {},

        objects: {},

        keys: {},

        callbacks: {},

        args: {},

        waiting: false,

        wait: function() {
            $.fn.jQueue.waiting = false;
            $.each($.fn.jQueue.ids, function(index, id){
                $.fn.jQueue.check(
                    $.fn.jQueue.objects[id], $.fn.jQueue.keys[id],
                    $.fn.jQueue.callbacks[id], $.fn.jQueue.args[id],
                    $.fn.jQueue.ids[id]);
                $.fn.jQueue.waiting = true;
            });
            if($.fn.jQueue.waiting === true)
                window.setTimeout($.fn.jQueue.wait, 250);
        },

        guid: function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        },

        listen: function(object, key, callback, args) {
            var id = this.guid();
            this.ids[id] = id;
            this.objects[id] = object;
            this.keys[id] = key;
            this.callbacks[id] = callback;
            this.args[id] = args;
            if(!this.check(object, key, callback, args, id))
                this.wait();
        },

        check: function(object, key, callback, args, id) {
            if(typeof(object[key]) !== "undefined") {
                callback(args);
                delete this.objects[id];
                delete this.ids[id];
                delete this.callbacks[id];
                delete this.keys[id];
                delete this.args[id];
                return true;
            }
            return false;
        }

    };
})(jQuery);
