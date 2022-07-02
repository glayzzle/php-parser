// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_021.phpt
  it("021: Name search priority (first look into namespace)", function () {
    expect(parser.parseCode("<?php\nnamespace test;\nclass Test {\n    static function foo() {\n        echo __CLASS__,\"::\",__FUNCTION__,\"\\n\";\n    }\n}\nfunction foo() {\n    echo __FUNCTION__,\"\\n\";\n}\nfoo();\n\\test\\foo();\n\\test\\test::foo();\n?>")).toMatchSnapshot();
  });
});
