// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/recursive_yield_from.phpt
  it("Check if recursion with yield from works", function () {
    expect(parser.parseCode("<?php\nfunction from($a = 0) {\n    yield 1 + $a;\n    if ($a <= 3) {\n        yield from from($a + 3);\n        yield from from($a + 6);\n    }\n    yield 2 + $a;\n}\nfunction gen() {\n    yield from from();\n}\nforeach(gen() as $v) {\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
