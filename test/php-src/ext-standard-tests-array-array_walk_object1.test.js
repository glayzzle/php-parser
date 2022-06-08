// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_object1.phpt
  it("Test array_walk() function : object functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing object in place of 'input' argument to test object functionality\n*/\necho \"*** Testing array_walk() : object functionality ***\\n\";\nfunction callback($value, $key, $user_data)\n{\n  var_dump($key);\n  var_dump($value);\n  var_dump($user_data);\n  echo \"\\n\";\n}\nclass MyClass\n{\n  private $pri_value;\n  public $pub_value;\n  protected $pro_value;\n  public function __construct($setVal)\n  {\n    $this->pri_value = $setVal;\n    $this->pub_value = $setVal;\n    $this->pro_value = $setVal;\n  }\n};\n// object for 'input' argument\n$input = new MyClass(10);\nvar_dump( array_walk($input, \"callback\", 1));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
