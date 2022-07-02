// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73816.phpt
  it("Bug #73816: Broken eval(anonymous class)", function () {
    expect(parser.parseCode("<?php\nfunction anon()\n{\n    static $i = 0;\n    return eval(sprintf('return new class { private $prop%s; };', ++$i));\n}\nvar_dump(anon());\nvar_dump(anon());\n?>")).toMatchSnapshot();
  });
});
