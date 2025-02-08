// files -> hard disk
// process -> RAM & Processor

// Process has ID
// Data segment(global and static variables with data)
// Text Segment
// Call stack
// Heap

// For a process there is a Call Stack and there is a Kernel Stack


// Stack allows FILO access to elements
// Stack are used in web browsers, mobile apps
// Call Stack is a DS that helps to return back to caller function 


function f1() {
    console.log("Inside f1");
    return 10;
}
function f2() {
    console.log("Inside f2");
    return 12;
}
function f3() {
    console.log("Inside f3");
    f2();
    return 5;
}
function f4() {
    f3();
    console.log("Inside f4");
    const x = f2();
    const y = f1(); 
    return x + y;   
}

console.log("start");
const result = f4();
console.log(result);