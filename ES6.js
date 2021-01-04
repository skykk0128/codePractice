const flights1 = [{ origin: 'MEL', destination: 'CAN' }];
const flights2 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'PVG' }];
const flights3 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'SYD'}, { origin: 'SYD', destination: 'PKX'}, { origin: 'PKX',
destination: 'PVG' }];
const flights4 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'SYD', destination: 'PVG' }];
const stops = (flights) => {
  return {
    1: 'Direct',
    2: '1 Stop',
  }[flights.length] || `${flights.length - 1} Stops`;
}
console.log(stops(flights1));
console.log(stops(flights2));
console.log(stops(flights3));
console.log(stops(flights4));


// const flights5 = [{ origin: 'MEL', destination: 'CAN' }];
// const flights6 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'PVG' }];
// const flights7 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'SYD' }, { origin: 'SYD', destination: 'PKX' }, { origin: 'PKX',
// destination: 'PVG' }];
// const flights8 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'SYD', destination: 'PVG' }];
// const flights9 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'JFK'}, { origin: 'SYD', destination: 'PKX'}, { origin: 'PKX',
// destination: 'PVG' }];
//
// const stopsnum = (flights) => {
//   for (let i = 0; i < flights.length; i++) {
//     return (flights.length === 1) ? 'Direct'
//       : (flights.length === 2 && flights[0].destination === flights[1].origin) ? '1 Stop'
//       : (flights.length === 2 && flights[0].destination !== flights[1].origin) ? 'These are different airlines'
//       : (flights.length > 2 && flights[i].destination !== flights[i+1].origin) ? 'These are different airlines'
//       : `${flights.length - 1} Stops`;
//   }
// }
// console.log(stopsnum(flights5));
// console.log(stopsnum(flights6));
// console.log(stopsnum(flights7));
// console.log(stopsnum(flights8));
// console.log(stopsnum(flights9));


// const flights5 = [{ origin: 'MEL', destination: 'CAN' }];
// const flights6 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'PVG' }];
// const flights7 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'SYD'}, { origin: 'SYD', destination: 'PKX'}, { origin: 'PKX',
// destination: 'PVG' }];
// const flights8 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'SYD', destination: 'PVG' }];
// const flights9 = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'JFK'}, { origin: 'SYD', destination: 'PKX'}, { origin: 'PKX',
// destination: 'PVG' }];
//
// const stopsnum = (flights) => {
//   if (flights.length === 1)
//     return 'Direct';
//   else if (flights.length === 2 && flights[0].destination === flights[1].origin)
//     return '1 Stop';
//   else if (flights.length === 2 && flights[0].destination !== flights[1].origin)
//     return 'These are different airlines';
//   else if (flights.length > 2) {
//     for (let i = 0; i < flights.length; i++) {
//       if (flights[i].destination === flights[i+1].origin)
//         return `${flights.length - 1} Stops`;
//       else {
//         return 'These are different airlines';
//       }
//     }
//   }
// }
// console.log(stopsnum(flights5));
// console.log(stopsnum(flights6));
// console.log(stopsnum(flights7));
// console.log(stopsnum(flights8));
// console.log(stopsnum(flights9));



const tax = (income) => {
  return (income >= 0 && income <= 18200) ? 0
    : (income >= 18201 && income <= 37000) ? ((income - 18200) * 0.19)
    : (income >= 37001 && income <= 90000) ? ((income - 37000) * 0.325 + 3572)
    : (income >= 90001 && income <= 180000) ? ((income - 90000) * 0.37 + 20797)
    : (income >= 180001) ? ((income - 180000) * 0.45 +  54096)
    : 'Wrong input';
}
console.log(tax(10000));
console.log(tax(20000));
console.log(tax(50000));
console.log(tax(100000));
console.log(tax(200000));
console.log(tax(-20));



// const taxtopay = (income) => {
//   if (income >= 0 && income <= 18200)
//     return 0;
//   else if (income >= 18201 && income <= 37000)
//     return (income - 18200) * 0.19;
//   else if (income >= 37001 && income <= 90000)
//     return (income - 37000) * 0.325 + 3572;
//   else if (income >= 90001 && income <= 180000)
//     return (income - 90000) * 0.37 + 20797;
//   else
//     return (income - 180000) * 0.45 +  54096;
// }
// console.log(taxtopay(19000));
