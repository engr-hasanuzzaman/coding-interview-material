const obj = Object.create(null);
Object.defineProperty(obj, 'name', {
    get: function() {
        return obj['_name'];
    },
    set: function(val) {
        obj['_name'] = val;
    }
});

obj.name = 'This is name';
console.log(obj.name);