// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_017.phpt
  it("Testing visibility of object returned by function", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    private $test = 1;\n}\nfunction test() {\n    return new foo;\n}\ntest()->test = 2;\n?>")).toMatchSnapshot();
  });
});
