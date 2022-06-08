// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_hasProperty_basic.phpt
  it("ReflectionClass::hasProperty()", function () {
    expect(parser.parseCode("<?php\n//New instance of class C - defined below\n$rc = new ReflectionClass(\"C\");\n//Check if C has public property publicFoo\nvar_dump($rc->hasProperty('publicFoo'));\n//Check if C has protected property protectedFoo\nvar_dump($rc->hasProperty('protectedFoo'));\n//Check if C has private property privateFoo\nvar_dump($rc->hasProperty('privateFoo'));\n//Check if C has static property staticFoo\nvar_dump($rc->hasProperty('staticFoo'));\n//C should not have property bar\nvar_dump($rc->hasProperty('bar'));\nClass C {\n  public $publicFoo;\n  protected $protectedFoo;\n  private $privateFoo;\n  public static $staticFoo;\n}\n?>")).toMatchSnapshot();
  });
});
