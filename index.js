
function generateFibonacci(){
    const length = parseInt(document.getElementById("length").value);

    let fibSequence = [];
    let a = 0, b = 1;

    for (let i = 0; i < length; i++) {
        fibSequence.push(a);
        const temp = a + b;
        a = b;
        b = temp;
    }
    // Display the sequence

    document.getElementById("fib-Sequence").innerHTML = fibSequence.join(", ");

}

