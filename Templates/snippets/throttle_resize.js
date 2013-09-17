function SomeObject() {
     var self = this;
     this.lastExecThrottle = 500; // limit to one call every "n" msec
     this.lastExec = new Date();
     this.timer = null;
     this.resizeHandler = function() {
         var d = new Date();
         if (d-self.lastExec < self.lastExecThrottle) {
             // This function has been called "too soon," before the allowed "rate" of twice per second
             // Set (or reset) timer so the throttled handler execution happens "n" msec from now instead
             if (self.timer) {
                 window.clearTimeout(self.timer);
             }
             self.timer = window.setTimeout(self.resizeHandler, self.lastExecThrottle);
             return false; // exit
        }
        self.lastExec = d; // update "last exec" time
        // At this point, actual handler code can be called (update positions, resize elements etc.)
        // self.callResizeHandlerFunctions();
    }
}

var someObject = new SomeObject();
window.onresize = someObject.resizeHandler;
