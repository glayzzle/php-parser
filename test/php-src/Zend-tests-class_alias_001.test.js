// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_alias_001.phpt
  it("Testing class_alias()", function () {
    expect(parser.parseCode("<?php\nclass foo { }\nclass_alias('foo', 'bar');\n$a = new foo;\n$b = new bar;\nvar_dump($a == $b, $a === $b);\nvar_dump($a instanceof $b);\nvar_dump($a instanceof foo);\nvar_dump($a instanceof bar);\nvar_dump($b instanceof foo);\nvar_dump($b instanceof bar);\n?>")).toMatchSnapshot();
  });
});
