function delayedCall(fn: () => void){
    setTimeout(fn,1000);
};

delayedCall (
    function(){
console.log("=== Check if it print after 1 sec ===")
    }
);