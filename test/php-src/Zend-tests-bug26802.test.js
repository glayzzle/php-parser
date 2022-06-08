// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug26802.phpt
  it("Bug #26802 (Can't call static method using a variable)", function () {
    expect(parser.parseCode("<?php\nfunction global_func()\n{\n    echo __METHOD__ . \"\\n\";\n}\n$function = 'global_func';\n$function();\nclass foo\n{\n    static $method = 'global_func';\n    static public function foo_func()\n    {\n        echo __METHOD__ . \"\\n\";\n    }\n}\n/* The following is a BC break with PHP 4 where it would\n * call foo::fail. In PHP 5 we first evaluate static class\n * properties and then do the function call.\n */\n$method = 'foo_func';\nfoo::$method();\n?>")).toMatchSnapshot();
  });
});
