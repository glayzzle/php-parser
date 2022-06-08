// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/reserved.phpt
  it("Reserved keywords can be used with named parameters", function () {
    expect(parser.parseCode("<?php\nfunction test($array) {\n    var_dump($array);\n}\ntest(array: []);\n?>")).toMatchSnapshot();
  });
});
