// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_032.phpt
  it("032: Namespace support for user functions (php name)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    static function foo() {\n        echo __CLASS__,\"::\",__FUNCTION__,\"\\n\";\n    }\n}\nfunction foo() {\n    echo __FUNCTION__,\"\\n\";\n}\ncall_user_func(__NAMESPACE__.\"\\\\foo\");\ncall_user_func(__NAMESPACE__.\"\\\\test::foo\");\n?>")).toMatchSnapshot();
  });
});
