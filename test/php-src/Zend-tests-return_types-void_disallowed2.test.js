// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/void_disallowed2.phpt
  it("void return type: unacceptable cases: explicit return of some other value", function () {
    expect(parser.parseCode("<?php\nfunction foo(): void {\n    return -1; // not permitted in a void function\n}\n// Note the lack of function call: function validated at compile-time\n?>")).toMatchSnapshot();
  });
});
