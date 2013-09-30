
JavaScript is a prototypal language, but it has a new operator that tries to make it look sort of like a classical language. That tends to confuse programmers, leading to some problematic programming patterns.

You never need to use new Object() in JavaScript. Use the object literal {} instead. Similarly, don’t use new Array(), use the array literal [] instead. Arrays in JavaScript work nothing like the arrays in Java, and use of the Java-like syntax will confuse you.

Do not use new Number, new String, or new Boolean. These forms produce unnecessary object wrappers. Just use simple literals instead.

Do not use new Function to create function values. Use function expressions instead. For example,

frames[0].onfocus = new Function("document.bgColor='antiquewhite'")

is better written as

frames[0].onfocus = function () {document.bgColor = 'antiquewhite';};

The second form allows the compiler to see the function body sooner, so any errors in it will be detected sooner. Sometimes new Function is used by people who do not understand how inner functions work.

selObj.onchange = new Function("dynamicOptionListObjects["+
        dol.index+"].change(this)"); 

If we keep function bodies in strings, the compiler can’t see them. If we keep function bodies as string expressions, we can’t see them either. It is better to not program in ignorance. By making a function that returns a function, we can explicitly pass in the values we want to bind. This allows us to initialize a set of selObj in a loop.

selObj.onchange = function (i) {
    return function () {
        dynamicOptionListObjects[i].change(this);

    };
}(dol.index);

It is never a good idea to put new directly in front of function. For example, new function provides no advantage in constructing new objects.

myObj = new function () {
    this.type = 'core';
};

It is better to use an object literal. It is smaller, faster.

myObj = {
    type: 'core'
};

If we are making an object containing methods that are bound to private variables and functions, it is still better to leave off the new prefix.

var foo = new function() {
    function processMessages(message) {
        alert("Message: " + message.content);
    }    
    this.init = function() {
        subscribe("/mytopic", this, processMessages);
    }
}

By using new to invoke the function, the object holds onto a worthless prototype object. That wastes memory with no offsetting advantage. If we do not use the new, we don’t keep the wasted prototype object in the chain. So instead we will invoke the factory function the right way, using ().

var foo = function () {
    function processMessages(message) {
        alert("Message: " + message.content);
    }    
    return { 
        init: function () { 
            subscribe("/mytopic", this, processMessages); 
        } 
    };
}();

So the rule is simple: The only time we should use the new operator is to invoke a pseudoclassical Constructor function. When calling a Constructor function, the use of new is mandatory.

There is a time to new, and a time to not. 


