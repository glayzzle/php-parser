// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/func_get_args.phpt
  it("func_get_args() can be used inside generator functions", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    var_dump(func_get_args());\n    yield; // trigger generator\n}\n$gen = gen(\"foo\", \"bar\");\n$gen->rewind();\n?>")).toMatchSnapshot();
  });
});
