
const dayjs = require("dayjs");



let today = new Date();
let birthday = dayjs("1986-01-19");

let difference = dayjs(today).diff(birthday, "days");

console.log(`Llevo ${difference} dias en este maldito mundo`);

