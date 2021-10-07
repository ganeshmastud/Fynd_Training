

const _pi=3.14;
const areaOfSqr = num => num*num;
const areaOfCircle = (num) => _pi* areaOfSqr(num);

const _areaOfRect = (w,l) => w*l;


// console.log(areaOfRect(3,4));

module.exports = {
    areaOfSqr,
    areaOfCircle,

};