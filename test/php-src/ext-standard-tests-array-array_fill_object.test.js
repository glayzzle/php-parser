// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_fill_object.phpt
  it("Test array_fill() function : usage variations - various object values for 'val' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * testing array_fill() by passing various  object values for 'val' argument\n */\necho \"*** Testing array_fill() : usage variations ***\\n\";\n// Initialise function arguments not being substituted\n$start_key = 0;\n$num = 2;\n// class without a member\nclass Test\n{\n}\n//class with public member, static member , constant and consturctor to initialize the public member\nclass Test1\n{\n  const test1_constant = \"test1\";\n  public static $test1_static = 0;\n  public $member1;\n  var $var1 = 30;\n  var $var2;\n  function __construct($value1 , $value2)\n  {\n    $this->member1 = $value1;\n    $this->var2 = $value2;\n  }\n}\n// child class which inherits parent class test1\nclass Child_test1 extends Test1\n{\n  public $member2;\n  function __construct($value1 , $value2 , $value3)\n  {\n    parent::__construct($value1 , $value2);\n    $this->member2 = $value3;\n  }\n}\n//class with private member, static member, constant and constructor to initialize the private member\nclass Test2\n{\n  const test2_constant = \"test2\";\n  public static $test2_static = 0;\n  private $member1;\n  var $var1 = 30;\n  var $var2;\n  function __construct($value1 , $value2)\n  {\n    $this->member1 = $value1;\n    $this->var2 = $value2;\n  }\n}\n// child class which inherits parent class test2\nclass Child_test2 extends Test2\n{\n  private $member1;\n  function __construct($value1 , $value2 , $value3)\n  {\n    parent::__construct($value1 , $value2);\n    $this->member1 = $value3;\n  }\n}\n// class with protected member, static member, constant and consturctor to initialize the protected member\nclass Test3\n{\n  const test3_constant = \"test3\";\n  public static $test3_static = 0;\n  protected $member1;\n  var $var1 = 30;\n  var $var2;\n  function __construct($value1 , $value2)\n  {\n     $this->member1 = $value1;\n     $this->var2 = $value2;\n  }\n}\n// child class which inherits parent class test3\nclass Child_test3 extends Test3\n{\n  protected $member1;\n  function __construct($value1 , $value2 , $value3)\n  {\n    parent::__construct($value1 , $value2);\n    $this->member1 = $value3;\n  }\n}\n// class with public, private, protected members, static, constant members and constructor to initialize all the members\nclass Test4\n{\n  const test4_constant = \"test4\";\n  public static $test4_static = 0;\n  public $member1;\n  private $member2;\n  protected $member3;\n  function __construct($value1 , $value2 , $value3)\n  {\n    $this->member1 = $value1;\n    $this->member2 = $value2;\n    $this->member3 = $value3;\n  }\n}\n// child class which inherits parent class test4\nclass Child_test4 extends Test4\n{\n  var $var1;\n  function __construct($value1 , $value2 , $value3 , $value4)\n  {\n    parent::__construct($value1 , $value2 , $value3);\n    $this->var1 = $value4;\n  }\n}\n// abstract class with public, private, protected members\nabstract class AbstractClass\n{\n  public $member1;\n  private $member2;\n  protected $member3;\n  var $var1 = 30;\n  abstract protected function display();\n}\n// implement abstract 'AbstractClass' class\nclass ConcreteClass1 extends AbstractClass\n{\n  protected function display()\n  {\n    echo \"class name is ConcreteClass1 \\n\";\n  }\n}\n// declarationn of the interface 'iTemplate'\ninterface iTemplate\n{\n  public function display();\n}\n// implement the interface 'iTemplate'\nclass Template1 implements iTemplate\n{\n  public function display()\n  {\n    echo \"class name is Template1\\n\";\n  }\n}\n//array of object values for 'val' argument\n$objects = array(\n  /* 1  */  new Test(),\n            new Test1(100 , 101),\n            new Child_test1(100 , 101 , 102),\n            new Test2(100 , 101),\n  /* 5  */  new Child_test2(100 , 101 , 102),\n            new Test3(100 , 101),\n            new Child_test3(100 , 101 , 102),\n            new Test4( 100 , 101 , 102),\n            new Child_test4(100 , 101 , 102 , 103),\n            new ConcreteClass1(),\n  /* 11 */  new Template1()\n);\n// loop through each element of the array for 'val' argument\n// check the working of array_fill()\necho \"--- Testing array_fill() with different object values for 'val' argument ---\\n\";\n$counter = 1;\nfor($index = 0; $index < count($objects); $index ++)\n{\n  echo \"-- Iteration $counter --\\n\";\n  $val = $objects[$index];\n  var_dump( array_fill($start_key,$num,$val) );\n  $counter++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
