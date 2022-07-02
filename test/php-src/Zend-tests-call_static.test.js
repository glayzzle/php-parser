// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_static.phpt
  it("__callStatic() Magic method", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    static function __callStatic($fname, $args)\n    {\n        echo $fname, '() called with ', count($args), \" arguments\\n\";\n    }\n}\ncall_user_func(\"Test::Two\", 'A', 'B');\ncall_user_func(array(\"Test\", \"Three\"), NULL, 0, false);\nTest::Four(5, 6, 7, 8);\n?>")).toMatchSnapshot();
  });
});
