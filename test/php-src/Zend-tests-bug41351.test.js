// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41351.phpt
  it("Bug #41351 (Invalid opcode with foreach ($a[] as $b))", function () {
    expect(parser.parseCode("<?php\n$a = array();\nforeach($a[] as $b) {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
