const parent   = document.getElementById('parent');
const children = parent.children;

// * children is array-like 
// * actually it is an object but lookslike an array 
// * so that you can't use Array.Prototype Functions like forEach

// ? Convert Object - Array-Like - To array 
let realArray = Array.from(children);
console.log(realArray);

realArray = [...children]
console.log(realArray);

realArray = Object.values(children);
console.log(realArray);

// ? IN ES5

realArray = Array.prototype.slice.call(children);
// OR
realArray = [].slice.call(children);
console.log(realArray);



