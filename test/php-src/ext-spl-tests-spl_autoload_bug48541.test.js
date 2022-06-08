// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_bug48541.phpt
  it("SPL: spl_autoload_register() Bug #48541: registering multiple closures fails with memleaks", function () {
    expect(parser.parseCode("<?php\nclass X {\n  public function getClosure() {\n    return function($class) {\n      echo \"a2 called\\n\";\n    };\n  }\n}\n$a = function ($class) {\n    echo \"a called\\n\";\n};\n$x = new X;\n$a2 = $x->getClosure();\n$b = function ($class) {\n    eval('class ' . $class . '{function __construct(){echo \"foo\\n\";}}');\n    echo \"b called\\n\";\n};\nspl_autoload_register($a);\nspl_autoload_register($a2);\nspl_autoload_register($b);\n$c = $a;\n$c2 = $a2;\nspl_autoload_register($c);\nspl_autoload_register($c2);\n$c = new foo;\n?>")).toMatchSnapshot();
  });
});
