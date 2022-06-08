// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_053.phpt
  it("053: Run-time constant definition", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\ndefine(__NAMESPACE__ . '\\\\NAME', basename(__FILE__));\necho NAME.\"\\n\";\necho \\test\\ns1\\NAME.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
