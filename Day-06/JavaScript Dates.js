function getDayName(dateString) {
    let dayName;

    // Write your code here
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date(dateString)
    dayName = date.getDay();

    return dayNames[dayName];
}

function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}
