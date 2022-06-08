// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_004.phpt
  it("Test possible function naming regression on procedural scope", function () {
    expect(() => parser.parseCode("<?php\nclass Obj\n{\n    function echo(){} // valid\n    function return(){} // valid\n}\nfunction echo(){} // not valid\n?>")).toThrowErrorMatchingSnapshot();
  });
});
