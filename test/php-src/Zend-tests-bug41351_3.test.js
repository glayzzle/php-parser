// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41351_3.phpt
  it("Bug #41351 (Invalid opcode with foreach ($a[] as $b)) - 3", function () {
    expect(parser.parseCode("<?php\n$a = array();\nforeach($a['test'][] as $b) {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
