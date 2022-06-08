// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getMethods_003.phpt
  it("ReflectionClass::getMethods()", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public function pubf1() {}\n    public function pubf2() {}\n    private function privf1() {}\n    private function privf2() {}\n    static public function pubsf1() {}\n    static public function pubsf2() {}\n    static private function privsf1() {}\n    static private function privsf2() {}\n}\n$rc = new ReflectionClass(\"C\");\n$StaticFlag = ReflectionMethod::IS_STATIC;\n$pubFlag = ReflectionMethod::IS_PUBLIC;\n$privFlag = ReflectionMethod::IS_PRIVATE;\necho \"No methods:\";\nvar_dump($rc->getMethods(0));\necho \"Public methods:\";\nvar_dump($rc->getMethods($pubFlag));\necho \"Private methods:\";\nvar_dump($rc->getMethods($privFlag));\necho \"Public or static methods:\";\nvar_dump($rc->getMethods($StaticFlag | $pubFlag));\necho \"Private or static methods:\";\nvar_dump($rc->getMethods($StaticFlag | $privFlag));\n?>")).toMatchSnapshot();
  });
});
