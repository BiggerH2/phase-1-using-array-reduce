// helpers.js

async function loadChai() {
  const chai = await import('chai');
  global.expect = chai.expect;
}

module.exports = {
  loadChai,
};
