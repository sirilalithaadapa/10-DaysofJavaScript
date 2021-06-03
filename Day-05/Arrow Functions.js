
function modifyArray(nums) {
    const func = nums.map(function(num) {

    if (num % 2 == 0) {
        return 2 * num;
    }
    else {
        return 3 * num;
    }
    });
    return func;
}

function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}
