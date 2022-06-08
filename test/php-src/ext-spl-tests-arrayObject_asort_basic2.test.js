// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_asort_basic2.phpt
  it("SPL: Test ArrayObject::asort() function : basic functionality with object based store", function () {
    expect(parser.parseCode("<?php\n/* Sort the entries by values.\n * Source code: ext/spl/spl_array.c\n * Alias to functions:\n */\necho \"*** Testing ArrayObject::asort() : basic functionality ***\\n\";\nClass C {\n    public $prop1 = 'x';\n    public $prop2 = 'z';\n    private $prop3 = 'a';\n    public $prop4 = 'x';\n}\n$c = new C;\n$ao1 = new ArrayObject($c);\nvar_dump($ao1->asort());\nvar_dump($ao1, $c);\n?>")).toMatchSnapshot();
  });
});
