// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_ksort_basic2.phpt
  it("SPL: Test ArrayObject::ksort() function : basic functionality with object base store", function () {
    expect(parser.parseCode("<?php\n/* Sort the entries by key.\n * Source code: ext/spl/spl_array.c\n * Alias to functions:\n */\necho \"*** Testing ArrayObject::ksort() : basic functionality ***\\n\";\nClass C {\n    public $x = 'prop1';\n    public $z = 'prop2';\n    public $a = 'prop3';\n    private $b = 'prop4';\n}\n$c = new C;\n$ao1 = new ArrayObject($c);\nvar_dump($ao1->ksort());\nvar_dump($ao1, $c);\n?>")).toMatchSnapshot();
  });
});
