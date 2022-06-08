// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_basic3.phpt
  it("ReflectionMethod class getName(), isInternal() and isUserDefined() methods", function () {
    expect(parser.parseCode("<?php\nfunction reflectMethod($class, $method) {\n    $methodInfo = new ReflectionMethod($class, $method);\n    echo \"**********************************\\n\";\n    echo \"Reflecting on method $class::$method()\\n\\n\";\n    echo \"\\ngetName():\\n\";\n    var_dump($methodInfo->getName());\n    echo \"\\nisInternal():\\n\";\n    var_dump($methodInfo->isInternal());\n    echo \"\\nisUserDefined():\\n\";\n    var_dump($methodInfo->isUserDefined());\n    echo \"\\n**********************************\\n\";\n}\nclass TestClass\n{\n    public function foo() {\n        echo \"Called foo()\\n\";\n    }\n    static function stat() {\n        echo \"Called stat()\\n\";\n    }\n    private function priv() {\n        echo \"Called priv()\\n\";\n    }\n    protected function prot() {}\n    public function __destruct() {}\n}\nclass DerivedClass extends TestClass {}\ninterface TestInterface {\n    public function int();\n}\nreflectMethod(\"DerivedClass\", \"foo\");\nreflectMethod(\"TestClass\", \"stat\");\nreflectMethod(\"TestClass\", \"priv\");\nreflectMethod(\"TestClass\", \"prot\");\nreflectMethod(\"DerivedClass\", \"prot\");\nreflectMethod(\"TestInterface\", \"int\");\nreflectMethod(\"ReflectionProperty\", \"__construct\");\nreflectMethod(\"TestClass\", \"__destruct\");\n?>")).toMatchSnapshot();
  });
});
