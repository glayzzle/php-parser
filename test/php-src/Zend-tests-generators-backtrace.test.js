// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/backtrace.phpt
  it("Printing the stack trace in a generator", function () {
    expect(parser.parseCode("<?php\nfunction f1() {\n    debug_print_backtrace();\n}\nfunction f2($arg1, $arg2) {\n    f1();\n    yield; // force generator\n}\nfunction f3($gen) {\n    $gen->rewind(); // trigger run\n}\n$gen = f2('foo', 'bar');\nf3($gen);\n?>")).toMatchSnapshot();
  });
});
