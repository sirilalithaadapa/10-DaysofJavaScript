
function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    }
    catch (error) {
        console.log("s.split is not a function");
    }
    finally {
        console.log(s);
    }
}

function main() {
    const s = eval(readLine());
    
    reverseString(s);
}
