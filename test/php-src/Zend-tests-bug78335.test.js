// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78335.phpt
  it("Bug #78335: Static properties/variables containing cycles report as leak", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static $test;\n    public static function method() {\n        static $foo;\n        $foo = [&$foo];\n    }\n}\nfunction test() {\n    static $foo;\n    $foo = [&$foo];\n}\n$foo = [&$foo];\nTest::$test = $foo;\ntest();\nTest::method();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
