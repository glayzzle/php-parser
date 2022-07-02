// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/static_variation_001.phpt
  it("Statics in nested functions & evals.", function () {
    expect(parser.parseCode("<?php\nstatic $a = array(7,8,9);\nfunction f1() {\n    static $a = array(1,2,3);\n    function g1() {\n        static $a = array(4,5,6);\n        var_dump($a);\n    }\n    var_dump($a);\n}\nf1();\ng1();\nvar_dump($a);\neval(' static $b = array(10,11,12); ');\nfunction f2() {\n    eval(' static $b = array(1,2,3); ');\n    function g2a() {\n        eval(' static $b = array(4,5,6); ');\n        var_dump($b);\n    }\n    eval('function g2b() { static $b = array(7, 8, 9); var_dump($b); } ');\n    var_dump($b);\n}\nf2();\ng2a();\ng2b();\nvar_dump($b);\neval(' function f3() { static $c = array(1,2,3); var_dump($c); }');\nf3();\n?>")).toMatchSnapshot();
  });
});
