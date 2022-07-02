// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/xor_003.phpt
  it("XORing booleans", function () {
    expect(parser.parseCode("<?php\n$t = true;\n$f = false;\nvar_dump($t ^ $f);\nvar_dump($t ^ $t);\nvar_dump($f ^ $f);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
