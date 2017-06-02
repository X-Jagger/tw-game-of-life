import _ from 'lodash'

const square = (n) => {
  console.log(_.range(0, n));
  return n * n;
};

module.exports = {
  square
};
