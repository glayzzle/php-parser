// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_011.phpt
  it("011: Function in namespace", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nfunction foo() {\n  echo __FUNCTION__,\"\\n\";\n}\nfoo();\n\\test\\ns1\\foo();\nbar();\n\\test\\ns1\\bar();\nfunction bar() {\n  echo __FUNCTION__,\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
