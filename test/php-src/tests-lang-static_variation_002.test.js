// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/static_variation_002.phpt
  it("Static variables in methods & nested functions & evals.", function () {
    expect(parser.parseCode("<?php\nClass C {\n    function f() {\n        static $a = array(1,2,3);\n        eval(' static $k = array(4,5,6); ');\n        function cfg() {\n            static $a = array(7,8,9);\n            eval(' static $k = array(10,11,12); ');\n            var_dump($a, $k);\n        }\n        var_dump($a, $k);\n    }\n}\n$c = new C;\n$c->f();\ncfg();\nClass D {\n    static function f() {\n        eval('function dfg() { static $b = array(1,2,3); var_dump($b); } ');\n    }\n}\nD::f();\ndfg();\neval(' Class E { function f() { static $c = array(1,2,3); var_dump($c); } }');\n$e = new E;\n$e->f();\n?>")).toMatchSnapshot();
  });
});
