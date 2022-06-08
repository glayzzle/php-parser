// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_backtrace.phpt
  it("Exceptions in linear yield from setup", function () {
    expect(parser.parseCode("<?php\nfunction from($off) {\n    debug_print_backtrace();\n    yield $off + 1;\n}\nfunction gen() {\n    yield 1;\n    debug_print_backtrace();\n    yield 2;\n    yield from from(2);\n    debug_print_backtrace();\n}\nprint \"\\nImplicit foreach:\\n\";\nforeach (gen() as $v) {\n    var_dump($v);\n}\nprint \"\\nExplicit iterator:\\n\";\nfor ($gen = gen(); $gen->valid(); $gen->next()) {\n    var_dump($gen->current());\n}\n?>")).toMatchSnapshot();
  });
});
