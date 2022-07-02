// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/missing-trait.phpt
  it("Check error message for missing traits", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass TraitsTest {\n  use THello;\n}\n$test = new TraitsTest();\n?>")).toMatchSnapshot();
  });
});
