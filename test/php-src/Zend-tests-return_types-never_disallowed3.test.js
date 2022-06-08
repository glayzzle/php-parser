// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_disallowed3.phpt
  it("never return type: unacceptable cases: implicit return", function () {
    expect(parser.parseCode("<?php\nfunction foo(): never {\n    if (false) {\n        throw new Exception('bad');\n    }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
