// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/001_placement.phpt
  it("Attributes can be placed on all supported elements.", function () {
    expect(parser.parseCode("<?php\n#[A1(1)]\nclass Foo\n{\n    #[A1(2)]\n    public const FOO = 'foo';\n    #[A1(3)]\n    public $x;\n    #[A1(4)]\n    public function foo(#[A1(5)] $a, #[A1(6)] $b) { }\n}\n$object = new #[A1(7)] class () { };\n#[A1(8)]\nfunction f1() { }\n$f2 = #[A1(9)] function () { };\n$f3 = #[A1(10)] fn () => 1;\n$ref = new \\ReflectionClass(Foo::class);\n$sources = [\n    $ref,\n    $ref->getReflectionConstant('FOO'),\n    $ref->getProperty('x'),\n    $ref->getMethod('foo'),\n    $ref->getMethod('foo')->getParameters()[0],\n    $ref->getMethod('foo')->getParameters()[1],\n    new \\ReflectionObject($object),\n    new \\ReflectionFunction('f1'),\n    new \\ReflectionFunction($f2),\n    new \\ReflectionFunction($f3)\n];\nforeach ($sources as $r) {\n    $attr = $r->getAttributes();\n    var_dump(get_class($r), count($attr));\n    foreach ($attr as $a) {\n        var_dump($a->getName(), $a->getArguments());\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
