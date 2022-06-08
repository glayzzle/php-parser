// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_getStaticVariables_basic.phpt
  it("ReflectionMethod::getStaticVariables()", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public function foo() {\n        static $c;\n        static $a = 1;\n        static $b = \"hello\";\n        $d = 5;\n    }\n    private function bar() {\n        static $a = 1;\n    }\n    public function noStatics() {\n        $a = 54;\n    }\n}\necho \"Public method:\\n\";\n$methodInfo = new ReflectionMethod('TestClass::foo');\nvar_dump($methodInfo->getStaticVariables());\necho \"\\nPrivate method:\\n\";\n$methodInfo = new ReflectionMethod('TestClass::bar');\nvar_dump($methodInfo->getStaticVariables());\necho \"\\nMethod with no static variables:\\n\";\n$methodInfo = new ReflectionMethod('TestClass::noStatics');\nvar_dump($methodInfo->getStaticVariables());\necho \"\\nInternal Method:\\n\";\n$methodInfo = new ReflectionMethod('ReflectionClass::getName');\nvar_dump($methodInfo->getStaticVariables());\n?>")).toMatchSnapshot();
  });
});
