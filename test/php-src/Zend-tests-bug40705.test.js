// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40705.phpt
  it("Bug #40705 (Iterating within function moves original array pointer)", function () {
    expect(parser.parseCode("<?php\nfunction doForeach($array)\n{\n    foreach ($array as $k => $v) {\n        // do stuff\n    }\n}\n$foo = array('foo', 'bar', 'baz');\nvar_dump(key($foo));\ndoForeach($foo);\nvar_dump(key($foo));\nforeach ($foo as $k => $v) {\n    var_dump($k);\n}\nvar_dump(key($foo));\n?>")).toMatchSnapshot();
  });
});
