// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_disallowed1.phpt
  it("never return type: unacceptable cases: any return", function () {
    expect(parser.parseCode("<?php\nfunction foo(): never {\n    return \"hello\"; // not permitted in a never function\n}\n// Note the lack of function call: function validated at compile-time\n?>")).toMatchSnapshot();
  });
});
