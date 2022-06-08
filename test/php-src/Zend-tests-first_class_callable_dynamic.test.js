// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_dynamic.phpt
  it("Acquire callable through various dynamic constructs", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function b($x) {\n        return $x;\n    }\n    public function c($x) {\n        return $x;\n    }\n}\n$name = 'strlen';\n$fn = $name(...);\nvar_dump($fn('x'));\n$name = ['A', 'b'];\n$fn = $name(...);\nvar_dump($fn(2));\n$name = [new A, 'c'];\n$fn = $name(...);\nvar_dump($fn(3));\n$name1 = 'A';\n$name2 = 'b';\n$fn = $name1::$name2(...);\nvar_dump($fn(4));\n$name2 = 'c';\n$fn = (new A)->$name2(...);\nvar_dump($fn(5));\n$fn = [A::class, 'b'](...);\nvar_dump($fn(6));\n$o = new stdClass;\n$o->prop = A::b(...);\n($o->prop)(7);\n$nam\n?>")).toMatchSnapshot();
  });
});
