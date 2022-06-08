// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isInstantiable_variation.phpt
  it("ReflectionClass::IsInstantiable()", function () {
    expect(parser.parseCode("<?php\nclass noCtor {\n}\nclass publicCtorNew {\n    public function __construct() {}\n}\nclass protectedCtorNew {\n    protected function __construct() {}\n}\nclass privateCtorNew {\n    private function __construct() {}\n}\n$classes = array(\"noCtor\", \"publicCtorNew\", \"protectedCtorNew\", \"privateCtorNew\");\nforeach ($classes as $class) {\n    $reflectionClass = new ReflectionClass($class);\n    echo \"Is $class instantiable?  \";\n    var_dump($reflectionClass->IsInstantiable());\n}\n?>")).toMatchSnapshot();
  });
});
