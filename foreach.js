var array = [1,2,3,4,5];
delete array[1];
array.forEach(function (val,index,arr) {
    console.log(val,index,arr);
});

Array.prototype.myForEach = function (callback,thisArg) {

        if (typeof callback !== 'function'){
            throw new TypeError(typeof callback + ' is not a function');
        }
        for(var i = 0;i < this.length;i++){
            if(Object.hasOwnProperty.call(this,i)){
                callback(this[i],i,this);
            }
        }
    }

// array.myForEach(function (value,index,arr) {
//
//     console.log(value,index,arr);
// })