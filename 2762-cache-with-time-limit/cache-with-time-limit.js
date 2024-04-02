var TimeLimitedCache = function() {
     this.data = {}
     
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let exists  = key in this.data;
    if(exists){
        clearTimeout(this.data[key].timer);
    }
    this.data[key] = {
        value : value,
        timer : setTimeout(()=>{
                delete this.data[key]
        },duration)

    }
    return exists ?? false;
};


TimeLimitedCache.prototype.get = function(key) {
     let exists  = key in this.data;
    if(exists){
        return this.data[key].value
    }else{
        return -1
    }
};

TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.data).length;
    
};
