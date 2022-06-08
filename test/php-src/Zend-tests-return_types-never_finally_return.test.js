// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_finally_return.phpt
  it("never return type: never cannot return from finally", function () {
    expect(parser.parseCode("<?php\nfunction foo() : never {\n    try {\n        throw new Exception('bad');\n    } finally {\n        return;\n    }\n}\n// Note the lack of function call: function validated at compile-time\n?>")).toMatchSnapshot();
  });
});
