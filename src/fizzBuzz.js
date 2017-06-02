export const fizzBuzz = (num) => {
  return fizz(num) + buzz(num) || num.toString();
};

const fizz = (num) => {
  return num % 3 ? '' : 'FIZZ';
};

const buzz = (num) => {
  return num % 5 ? '' : 'BUZZ';
};