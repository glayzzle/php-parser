// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_uses_static.phpt
  it("Class cannot use static as a trait, as it is reserved", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    use static;\n}\n?>")).toMatchSnapshot();
  });
});
