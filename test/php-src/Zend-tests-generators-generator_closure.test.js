// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_closure.phpt
  it("Closures can be generators", function () {
    expect(parser.parseCode("<?php\n$genFactory = function() {\n    yield 1;\n    yield 2;\n    yield 3;\n};\nforeach ($genFactory() as $value) {\n    var_dump($value);\n}\n?>")).toMatchSnapshot();
  });
});
