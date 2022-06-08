// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_046.phpt
  it("JIT ASSIGN: incorrect assumption about in-memeory zval type", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $a = null;\n    for ($i = 0; $i < 6; $i++) {\n        var_dump($a);\n        $a = $a + $a = +$a = $b;\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
