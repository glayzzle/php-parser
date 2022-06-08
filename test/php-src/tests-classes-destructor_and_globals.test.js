// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/destructor_and_globals.phpt
  it("ZE2 accessing globals from destructor in shutdown", function () {
    expect(parser.parseCode("<?php\n$test_cnt = 0;\n$test_num = 0;\nfunction Show() {\n  global $test_cnt;\n  echo \"Count: $test_cnt\\n\";\n}\nclass counter {\n  protected $id;\n  public function __construct() {\n    global $test_cnt, $test_num;\n    $test_cnt++;\n    $this->id = $test_num++;\n  }\n  public function Show() {\n    echo 'Id: '.$this->id.\"\\n\";\n  }\n  // try protected here\n  public function __destruct() {\n    global $test_cnt;\n    $test_cnt--;\n  }\n  static public function destroy(&$obj) {\n    $obj = NULL;\n    }\n}\nShow();\n$obj1 = new counter;\n$obj1->Show();\nShow();\n$obj2 = new counter;\n$obj2->Show();\nShow();\ncounter::destroy($obj1);\nShow();\n// or uncomment this line and it works\n//counter::destroy($obj2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
