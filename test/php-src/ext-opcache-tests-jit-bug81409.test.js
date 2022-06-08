// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug81409.phpt
  it("Bug #81409: Incorrect JIT code for ADD with a reference to array", function () {
    expect(parser.parseCode("<?php\nfunction foo(&$a) {\n    $n = count($a);\t\n    $a = $a + [$n=>1];\n}\nfunction bar() {\n    $x = [];\n    for ($i = 0; $i < 200; $i++) {\n        foo($x);\n    }\n    var_dump(count($x));\n}\nbar();\n?>")).toMatchSnapshot();
  });
});
