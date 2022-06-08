// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_isGenerator_basic.phpt
  it("ReflectionFunction::isGenerator()", function () {
    expect(parser.parseCode("<?php\n$closure1 = function() {return \"this is a closure\"; };\n$closure2 = function($param) {\n    yield $param;\n};\n$rf1 = new ReflectionFunction($closure1);\nvar_dump($rf1->isGenerator());\n$rf2 = new ReflectionFunction($closure2);\nvar_dump($rf2->isGenerator());\nfunction func1() {\n    return 'func1';\n}\nfunction func2() {\n    yield 'func2';\n}\n$rf1 = new ReflectionFunction('func1');\nvar_dump($rf1->isGenerator());\n$rf2 = new ReflectionFunction('func2');\nvar_dump($rf2->isGenerator());\nclass Foo {\n    public function f1() {\n    }\n    public function f2() {\n        yield;\n    }\n}\n$rc = new ReflectionClass('Foo');\nforeach($rc->getMethods() as $m) {\n    var_dump($m->isGenerator());\n}\n?>")).toMatchSnapshot();
  });
});
