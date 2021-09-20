// Your code here
function saturdayFun(activity) {
    if (typeof activity === 'string') {
        return `This Saturday, I want to ${activity}!`;
    } else {
        return 'This Saturday, I want to roller-skate!';
    }
}

saturdayFun('bathe my dog');

function mondayWork(plan) {
    switch (plan) {
        case 'work from home':
            return 'This Monday, I will work from home.';
            break;
        default:
            return 'This Monday, I will go to the office.'
    }
}

mondayWork('work from home');

function wrapAdjective(flair) {
    const text1 = 'You are ';
    if (typeof flair === 'string') {
        flair = flair;
    } else {
        flair = '*';
    }
    return function (input) {
        return `${text1}${flair}${input}${flair}!`
    }
}