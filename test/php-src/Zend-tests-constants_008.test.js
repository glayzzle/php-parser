// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants_008.phpt
  it("Defining constant twice with two different forms", function () {
    expect(parser.parseCode("<?php\ndefine('a', 2);\nconst a = 1;\nif (defined('a')) {\n    print a;\n}\n?>")).toMatchSnapshot();
  });
});
