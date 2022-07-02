// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_009.phpt
  it("Testing interface declaration using the original and alias class name", function () {
    expect(parser.parseCode("<?php\ninterface a { }\nclass_alias('a', 'b');\ninterface c extends a, b { }\n?>")).toMatchSnapshot();
  });
});
