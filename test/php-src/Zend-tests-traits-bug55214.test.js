// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug55214.phpt
  it("Bug #55214 (Use of __CLASS__ within trait returns trait name not class name)", function () {
    expect(parser.parseCode("<?php\ntrait ATrait {\n  public static $static_var = __CLASS__;\n  public $var = __CLASS__;\n  public static function get_class_name() {\n    return __CLASS__;\n  }\n  public function get_class_name_obj() {\n    return __CLASS__;\n  }\n  public static function get_class_name2() {\n    return self::$static_var;\n  }\n  public function get_class_name_obj2() {\n    return $this->var;\n  }\n}\ntrait Indirect {\n    use ATrait;\n}\nclass SomeClass {\n   use ATrait;\n}\nclass UsingIndirect {\n    use Indirect;\n}\n$r = SomeClass::get_class_name();\nvar_dump($r);\n$r = SomeClass::get_class_name2();\nvar_dump($r);\n$o = new SomeClass();\n$r = $o->get_class_name_obj();\nvar_dump($r);\n$r = $o->get_class_name_obj2();\nvar_dump($r);\n$r = UsingIndirect::get_class_name();\nvar_dump($r);\n$r = UsingIndirect::get_class_name2();\nvar_dump($r);\n$o = new UsingIndirect();\n$r = $o->get_class_name_obj();\nvar_dump($r);\n$r = $o->get_class_name_obj2();\nvar_dump($r);\n?>")).toMatchSnapshot();
  });
});
