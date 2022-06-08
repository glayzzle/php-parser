// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38287.phpt
  it("Bug #38287 (static variables mess up global vars)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(0);\nsomething::do_something();\n// $not_there is really NULL\nvar_dump($not_there);\n// error occurs here: execution should never get inside the if condition because $not_there is NULL\nif ($not_there[\"invalid_var\"]) {\n  // will print NULL (which is ok, but execution should never get here if the value is NULL)\n  var_dump($not_there[\"use_authmodule\"]);\n  // will print \"PATH:Array\"\n  print \"PATH:\".$not_there[\"use_authmodule\"].\"\\n\";\n}\nclass something {\n  public static function get_object() {\n    static $object=NULL;\n    if ($object===NULL)\n    $object=new something;\n    return $object;\n  }\n  public static function do_something() {\n    self::get_object()->vars[]=1;\n    self::get_object()->vars[]=2;\n    self::get_object()->vars[]=3;\n    var_dump(self::get_object()->vars);\n  }\n}\n?>")).toMatchSnapshot();
  });
});
