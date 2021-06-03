function isPositive(a) {
    if (a > 0) {
        return "YES";
    } 
    else if (a == 0) {
        return "Zero Error";
    } 
    else if (a < 0) {
        return "Negative Error";
    }
}
function main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}
