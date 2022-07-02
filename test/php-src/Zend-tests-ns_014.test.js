// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_014.phpt
  it("014: Name conflict and functions (php name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\necho strlen(\"Hello\"),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
