// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_031.phpt
  it("031: Namespace support for user functions (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test;\nclass Test {\n    static function foo() {\n        echo __CLASS__,\"::\",__FUNCTION__,\"\\n\";\n    }\n}\nfunction foo() {\n    echo __FUNCTION__,\"\\n\";\n}\ncall_user_func(__NAMESPACE__.\"\\\\foo\");\ncall_user_func(__NAMESPACE__.\"\\\\test::foo\");\n?>")).toMatchSnapshot();
  });
});
