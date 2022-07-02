// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/factory_and_singleton_001.phpt
  it("ZE2 factory and singleton, test 1", function () {
    expect(parser.parseCode("<?php\nclass test {\n  protected $x;\n  static private $test = NULL;\n  static private $cnt = 0;\n  static function factory($x) {\n    if (test::$test) {\n      return test::$test;\n    } else {\n      test::$test = new test($x);\n      return test::$test;\n    }\n  }\n  protected function __construct($x) {\n    test::$cnt++;\n    $this->x = $x;\n  }\n  static function destroy() {\n    test::$test = NULL;\n  }\n  protected function __destruct() {\n    test::$cnt--;\n  }\n  public function get() {\n    return $this->x;\n  }\n  static public function getX() {\n    if (test::$test) {\n      return test::$test->x;\n    } else {\n      return NULL;\n    }\n  }\n  static public function count() {\n    return test::$cnt;\n  }\n}\necho \"Access static members\\n\";\nvar_dump(test::getX());\nvar_dump(test::count());\necho \"Create x and y\\n\";\n$x = test::factory(1);\n$y = test::factory(2);\nvar_dump(test::getX());\nvar_dump(test::count());\nvar_dump($x->get());\nvar_dump($y->get());\necho \"Destruct x\\n\";\n$x = NULL;\nvar_dump(test::getX());\nvar_dump(test::count());\nvar_dump($y->get());\necho \"Destruct y\\n\";\n$y = NULL;\nvar_dump(test::getX());\nvar_dump(test::count());\necho \"Destruct static\\n\";\ntest::destroy();\nvar_dump(test::getX());\nvar_dump(test::count());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
