// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_return_throw.phpt
  it("never return type: never cannot return from throw expression", function () {
    expect(parser.parseCode("<?php\nfunction foo() : never {\n    return throw new Exception('bad');\n}\n// Note the lack of function call: function validated at compile-time\n?>")).toMatchSnapshot();
  });
});
