// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_014.phpt
  it("Closure 014: return by value/reference", function () {
    expect(parser.parseCode("<?php\nclass C1 {\n    function __invoke() {\n        return 0;\n    }\n}\nclass C2 {\n    function &__invoke(&$a) {\n        return $a;\n    }\n}\nclass C3 {\n    function __invoke() {\n    }\n}\n$x = new C1();\nvar_dump($x());\nvar_dump($x->__invoke());\n$x();\n$x->__invoke();\n$x = function() {\n    return 0;\n};\nvar_dump($x());\nvar_dump($x->__invoke());\n$x();\n$x->__invoke();\n$x = new C2();\n$a = $b = $c = $d = 1;\n$e =& $x($a);\n$e = 2;\nvar_dump($a);\n$e =& $x->__invoke($b);\n$e = 3;\nvar_dump($b);\n$x($b);\n$x->__invoke($b);\n$x = function & (&$a) {\n    return $a;\n};\n$e =& $x($c);\n$e = 4;\nvar_dump($c);\n$e =& $x->__invoke($d);\n$e = 5;\nvar_dump($d);\n$x($d);\n$x->__invoke($d);\n$x = new C3();\nvar_dump($x());\nvar_dump($x->__invoke());\n$x();\n$x->__invoke();\n$x = function() {\n};\nvar_dump($x());\nvar_dump($x->__invoke());\n$x();\n$x->__invoke();\n?>")).toMatchSnapshot();
  });
});
