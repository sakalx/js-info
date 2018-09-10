const example = () => (
  `
  var myarray;
  
    (function () {
      var astr = "[object Array]",
          toString = Object.prototype.toString;
          
      function isArray(a) {
        return toString.call(a) === astr;
      }
      
      function indexOf(haystack, needle) {
        var i = 0,
            max = haystack.length;
            
        for (; i < max; i += 1) {
          if (haystack[i] === needle) {
            return i;
          }
        }
        
        return -1;
      }
      
      myarray = {
        isArray:isArray,
        indexOf:indexOf,
        inArray:indexOf
      };
    }());
    
    console.log(myarray.isArray([1, 2])); // true
    console.log(myarray.isArray({0:1})); // false
    console.log(myarray.indexOf(["a", "b", "z"], "z")); // 2
    console.log(myarray.inArray(["a", "b", "z"], "z")); // 2
    
    myarray.indexOf = null;
    console.log(myarray.inArray(["a", "b", "z"], "z")); // 2
  `
);

export {
  example,
}