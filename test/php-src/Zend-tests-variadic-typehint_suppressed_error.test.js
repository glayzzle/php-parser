// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/typehint_suppressed_error.phpt
  it("Error suppression for types on variadic arguments works", function () {
    expect(parser.parseCode("<?php\nfunction test(array... $args) {\n    var_dump($args);\n}\ntry {\n    test([0], [1], 2);\n} catch(Error $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
