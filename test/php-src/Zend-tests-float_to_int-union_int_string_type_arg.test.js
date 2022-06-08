// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/union_int_string_type_arg.phpt
  it("Union of int|string shouldn't warn if string semantics are used", function () {
    expect(parser.parseCode("<?php\n$float = 1.0;\nfunction foo(int|string $a): void {\n    var_dump($a);\n}\nfoo(1.0);\nfoo(1.5);\nfoo(fdiv(0, 0));\nfoo(10e120);\nfoo(10e500); // Infinity\n?>")).toMatchSnapshot();
  });
});
