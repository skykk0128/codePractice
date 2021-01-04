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
