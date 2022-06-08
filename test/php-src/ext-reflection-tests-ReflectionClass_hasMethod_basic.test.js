// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_hasMethod_basic.phpt
  it("ReflectionClass::hasMethod()", function () {
    expect(parser.parseCode("<?php\n//New instance of class C - defined below\n$rc = new ReflectionClass(\"C\");\n//Check if C has public method publicFoo\nvar_dump($rc->hasMethod('publicFoo'));\n//Check if C has protected method protectedFoo\nvar_dump($rc->hasMethod('protectedFoo'));\n//Check if C has private method privateFoo\nvar_dump($rc->hasMethod('privateFoo'));\n//Check if C has static method staticFoo\nvar_dump($rc->hasMethod('staticFoo'));\n//C should not have method bar\nvar_dump($rc->hasMethod('bar'));\n//Method names are case insensitive\nvar_dump($rc->hasMethod('PUBLICfOO'));\nClass C {\n  public function publicFoo()\n  {\n    return true;\n  }\n  protected function protectedFoo()\n  {\n    return true;\n  }\n  private function privateFoo()\n  {\n    return true;\n  }\n  static function staticFoo()\n  {\n    return true;\n  }\n}\n?>")).toMatchSnapshot();
  });
});
