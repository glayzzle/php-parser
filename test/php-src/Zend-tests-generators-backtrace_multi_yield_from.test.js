// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/backtrace_multi_yield_from.phpt
  it("Generator backtrace with multi yield from", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield 1;\n    debug_print_backtrace();\n    yield 2;\n}\nfunction from($gen) {\n    yield from $gen;\n}\n$gen1 = gen();\n$gen2 = from($gen1);\n$gen3 = from($gen2);\nvar_dump($gen3->current());\n$gen2->next();\nvar_dump($gen2->current());\n$gen2->next();\nvar_dump($gen2->current());\n?>")).toMatchSnapshot();
  });
});
