// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70912.phpt
  it("Bug #70912 (Null ptr dereference when class property is initialised to a dereferenced value)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $a=[][];\n}\n?>")).toMatchSnapshot();
  });
});
