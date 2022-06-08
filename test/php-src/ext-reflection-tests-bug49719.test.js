// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug49719.phpt
  it("Bug #49719 (ReflectionClass::hasProperty returns true for a private property in base class)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $a;\n}\nclass B extends A {\n    private $b;\n}\ntry {\n    $b = new B;\n    $ref = new ReflectionClass($b);\n    var_dump(property_exists('b', 'a'));\n    var_dump(property_exists($b, 'a'));\n    var_dump($ref->hasProperty('a'));\n    var_dump($ref->getProperty('a'));\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\nclass A2 {\n    private $a = 1;\n}\nclass B2 extends A2 {\n    private $a = 2;\n}\n$b2 = new ReflectionClass('B2');\n$prop = $b2->getProperty('a');\nvar_dump($prop->getValue(new b2));\n?>")).toMatchSnapshot();
  });
});
