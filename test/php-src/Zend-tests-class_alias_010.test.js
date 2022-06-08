// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_010.phpt
  it("Trying use an existing alias name in class declaration", function () {
    expect(parser.parseCode("<?php\ninterface a { }\nclass_alias('a', 'b');\nclass b { }\n?>")).toMatchSnapshot();
  });
});
