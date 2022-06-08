// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_as_lexical_var_error.phpt
  it("Cannot use $this as lexical variable", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function f() {\n        return function() use ($this) {};\n    }\n}\n?>")).toMatchSnapshot();
  });
});
