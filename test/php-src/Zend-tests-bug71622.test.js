// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71622.phpt
  it("Bug #71622 (Strings used in pass-as-reference cannot be used to invoke C::$callable())", function () {
    expect(parser.parseCode("<?php\nfunction getMethodName(&$methodName) {\n    $methodName = Abc::METHOD_NAME;\n}\nclass Abc {\n    const METHOD_NAME = \"goal\";\n    private static function goal() {\n        echo \"success\\n\";\n    }\n    public static function run() {\n        $method = \"foobar\";\n        getMethodName($method);\n        var_dump(is_callable(\"self::$method\"));\n        self::$method();\n    }\n}\nAbc::run();\n?>")).toMatchSnapshot();
  });
});
