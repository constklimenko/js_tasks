module.exports = {

    name: 'emitter',

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        //console.log(`starts method 'on' for ${this.name}'`)
        //console.log(`event = '${event}' subscriber = '${subscriber.name}' handler = '${handler}'`)
        if(!this[event]){
            this[event] = [];
        }
        //console.log(`before adding event.length = '${this[event].length}'`)
        this[event].push({"object": subscriber, "func": handler});
        //console.log(`event.length = '${this[event].length}'`)
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        //console.log(`starts method 'off' for ${this.name}'`)
        //console.log(`event = '${event}' subscriber = '${subscriber.name}'`)
        for (let i = 0 ; i < this[event].length; i++){
            if (this[event][i].object == subscriber){
                //console.log(`before deletion event.length = '${this[event].length}'`)
                this[event].splice(i, 1);
                //console.log(`'${subscriber.name}' deleted from  '${this.name}'`);
                i--;
                //console.log(`event.length = '${this[event].length}'`)
            }
        }

        return this;

    },

    /**
     * @param {String} event
     */
    emit: function (event) {

        //console.log(`starts method 'emit' for ${this.name}'`)
        //console.log(`event = '${event}'`)
        //console.log(`event.length = '${this[event].length}'`)
        for( let j = 0; j < this[event].length; j++){
            this[event][j].func.call(this[event][j].object);
            //console.log(`'${event}' emitted for '${this[event][j].object.name}' with ${this[event][j].func}`);

        }
        return this;
    }
};
