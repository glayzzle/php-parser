// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_disallowed2.phpt
  it("never return type: unacceptable cases: empty return", function () {
    expect(parser.parseCode("<?php\nfunction foo(): never {\n    return; // not permitted in a never function\n}\n// Note the lack of function call: function validated at compile-time\n?>")).toMatchSnapshot();
  });
});
