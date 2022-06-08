// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_013.phpt
  it("SPL: spl_autoload_functions() with closures and invocables", function () {
    expect(parser.parseCode("<?php\n$closure = function($class) {\n  echo \"a called\\n\";\n};\nclass Autoloader {\n  private $dir;\n  public function __construct($dir) {\n    $this->dir = $dir;\n  }\n  public function __invoke($class) {\n    var_dump(\"{$this->dir}/$class.php\");\n  }\n}\n$al1 = new Autoloader('d1');\n$al2 = new Autoloader('d2');\nspl_autoload_register($closure);\nspl_autoload_register($al1);\nspl_autoload_register($al2);\nvar_dump(spl_autoload_functions());\n?>")).toMatchSnapshot();
  });
});
