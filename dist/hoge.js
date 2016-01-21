'use strict';

module.exports = class Hoge {
  constructor() {
    console.log('Called');
  };
  
  add(x, y) {
    try {
      return x + y;
    } catch (error) {
      console.error(error);
    }
  }
  
  subtract(x, y) {
    try {
      return x - y;
    } catch (error) {
      console.error(error);
    }
  }
  
  multiply(x, y) {
    try {
      return x * y;
    } catch (error) {
      console.error(error);
    }
  }
  
  divide(x, y) {
    try {
      return x / y;
    } catch (error) {
      console.error(error);
    }
  }
}