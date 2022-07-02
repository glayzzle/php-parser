// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/static_variable.phpt
  it("Static Variable Expressions", function () {
    expect(parser.parseCode("<?php\nconst bar = 2, baz = bar + 1;\nfunction foo() {\n    static $a = 1 + 1;\n    static $b = [bar => 1 + 1, baz * 2 => 1 << 2];\n    static $c = [1 => bar, 3 => baz];\n    var_dump($a, $b, $c);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
