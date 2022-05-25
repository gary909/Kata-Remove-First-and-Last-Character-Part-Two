function array(arr) {
    if (arr.split(',').slice(1, -1).join(' ') == '') {
        return null;
    } else {
        return arr.split(',').slice(1, -1).join(' ');
    }
}

console.log(array('1,2,3')); // '2'
console.log(array('1,2,3,4')); // '2 3'
console.log(array('1,2,3,4,5')); // '2 3 4,'
console.log(array('')); // null