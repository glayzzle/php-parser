// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug66252.phpt
  it("Bug #66252 (Problems in AST evaluation invalidating valid parent:: reference)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    const HW = \"this is A\";\n}\nclass B extends A {\n    const BHW = parent::HW . \" extended by B\";\n}\nconst C = B::BHW;\necho C, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
