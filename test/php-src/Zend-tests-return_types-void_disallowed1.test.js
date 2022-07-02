// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/void_disallowed1.phpt
  it("void return type: unacceptable cases: explicit NULL return", function () {
    expect(parser.parseCode("<?php\nfunction foo(): void {\n    return NULL; // not permitted in a void function\n}\n// Note the lack of function call: function validated at compile-time\n?>")).toMatchSnapshot();
  });
});
