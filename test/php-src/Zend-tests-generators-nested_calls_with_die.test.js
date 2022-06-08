// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/nested_calls_with_die.phpt
  it("Test nested calls with die() in a generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    die('Test');\n    yield; // force generator\n}\nfunction function_with_3_args() {\n    $gen = gen();\n    $gen->rewind();\n}\nfunction function_with_4_args() {\n    function_with_3_args(4, 5, 6);\n}\nfunction outerGen() {\n    function_with_4_args(0, 1, 2, 3);\n    yield; // force generator\n}\n$outerGen = outerGen();\n$outerGen->rewind();\n?>")).toMatchSnapshot();
  });
});
