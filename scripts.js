for (let i = 0; i >= 0;) {

    let count = prompt('Text something');

    if (count === '') {
        prompt('Text something');
        continue;
    } else {
        if (count !== 'break' && count !== 'continue') {
            i++;
            alert(i);
        }
        if (count === 'continue') {
            i++;
            continue;
        }
        if (count === 'break') {
            break;
        }
    }
}