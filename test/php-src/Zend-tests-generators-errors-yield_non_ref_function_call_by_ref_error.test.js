// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/yield_non_ref_function_call_by_ref_error.phpt
  it("Yielding the result of a non-ref function call throw a notice", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    return \"bar\";\n}\nfunction &gen() {\n    yield foo();\n}\n$gen = gen();\nvar_dump($gen->current());\n?>")).toMatchSnapshot();
  });
});
