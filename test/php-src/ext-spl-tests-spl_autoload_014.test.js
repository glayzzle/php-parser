// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_014.phpt
  it("SPL: spl_autoload_unregister() with closures and invocables", function () {
    expect(parser.parseCode("<?php\n$closure = function($class) {\n  echo \"closure called with class $class\\n\";\n};\nclass Autoloader {\n  private $dir;\n  public function __construct($dir) {\n    $this->dir = $dir;\n  }\n  public function __invoke($class) {\n    echo (\"Autoloader('{$this->dir}') called with $class\\n\");\n  }\n}\nclass WorkingAutoloader {\n  public function __invoke($class) {\n    echo (\"WorkingAutoloader() called with $class\\n\");\n    eval(\"class $class { }\");\n  }\n}\n$al1 = new Autoloader('d1');\n$al2 = new WorkingAutoloader('d2');\nspl_autoload_register($closure);\nspl_autoload_register($al1);\nspl_autoload_register($al2);\n$x = new TestX;\nspl_autoload_unregister($closure);\nspl_autoload_unregister($al1);\n$y = new TestY;\n?>")).toMatchSnapshot();
  });
});
