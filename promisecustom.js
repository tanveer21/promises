function Treasure(action) {

    this.status = 'pending';
    this.value = undefined;

    this.thenCallbacks = [];
    this.onCatch = undefined;
    this.onFinally = undefined;

    //takes a callback to be invoked on resolve.
    this.then = function(callback) {
        this.thenCallbacks.push(callback);
        return this;
    };


    //takes a callback to be invoked on reject
    this.catch = function(callback) {
        this.onCatch = callback;
        return this;
    };

    this.finally = function(callback) {
        this.onFinally = callback;
        return this;
    }


    //all logic goes here
    action(resolver.bind(this), rejector.bind(this));
    //function(resolveCallback, rejectCallback)


    //private
    function resolver(value) {
        this.status = 'resolved';
        this.value = value;

        this.thenCallbacks.forEach(function(func) {
            func(this.value);
        }, this);

        if (typeof this.finallyCallback === 'function') {

            this.finallyCallback(this.value);
        }
    }


    function rejector(value) {
        this.status = 'rejected';
        this.value = value;

        if (typeof this.catchCallback === 'function') {
            this.catchCallback(this.value);
        }

        if (typeof this.finallyCallback === 'function') {
            this.finallyCallback(this.value);
        }

    }




}


module.exports = Treasure;