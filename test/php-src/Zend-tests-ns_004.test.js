// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_004.phpt
  it("004: Using global class name from namespace (unqualified - fail)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\necho get_class(new Exception()),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
