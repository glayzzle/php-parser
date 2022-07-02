// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_recursive_object2.phpt
  it("Test array_walk_recursive() function : object functionality - array of objects", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing array_walk_recursive() with an array of objects\n*/\necho \"*** Testing array_walk_recursive() : array of objects ***\\n\";\nfunction callback_private($value, $key, $addValue)\n{\n  echo \"value : \";\n  var_dump($value->getValue());\n  echo \"key : \";\n  var_dump($key);\n}\nfunction callback_public($value, $key)\n{\n  echo \"value : \";\n  var_dump($value->pub_value);\n}\nfunction callback_protected($value, $key)\n{\n  echo \"value : \";\n  var_dump($value->get_pro_value());\n}\nclass MyClass\n{\n  private $pri_value;\n  public $pub_value;\n  protected $pro_value;\n  public function __construct($setVal)\n  {\n    $this->pri_value = $setVal;\n    $this->pub_value = $setVal;\n    $this->pro_value = $setVal;\n  }\n  public function getValue()\n  {\n    return $this->pri_value;\n  }\n  public function get_pro_value()\n  {\n    return $this->pro_value;\n  }\n};\n// array containing objects of MyClass\n$input = array (\n  array(\n  new MyClass(3),\n  new MyClass(10),\n  ),\n  new MyClass(20),\n  array(new MyClass(-10))\n);\necho \"-- For private member --\\n\";\nvar_dump( array_walk_recursive($input, \"callback_private\", 1));\necho \"-- For public member --\\n\";\nvar_dump( array_walk_recursive($input, \"callback_public\"));\necho \"-- For protected member --\\n\";\nvar_dump( array_walk_recursive($input, \"callback_protected\"));\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
