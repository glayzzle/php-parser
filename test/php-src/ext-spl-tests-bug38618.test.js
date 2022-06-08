// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug38618.phpt
  it("Bug #38618 (RecursiveArrayIterator::hasChildren() follows objects)", function () {
    expect(parser.parseCode("<?php\nclass FruitPublic\n{\n  public $title;\n  public function __construct($title)\n  {\n    $this->title = $title;\n  }\n  public function __toString()\n  {\n    return $this->title;\n  }\n}\nclass FruitProtected\n{\n  protected $title;\n  public function __construct($title)\n  {\n    $this->title = $title;\n  }\n  public function __toString()\n  {\n    return $this->title;\n  }\n}\nfunction test_array($array, $which, $flags = 0)\n{\n  echo \"===$which===\\n\";\n  $it = new RecursiveArrayIterator($array, $flags);\n  foreach (new RecursiveIteratorIterator($it) as $k => $fruit) {\n    echo $k , ' => ', $fruit, \"\\n\";\n  }\n}\n$array = array(\n  1 => array(\n    1 => array(\n      1 => 'apple',\n    ),\n    2 => array(\n      1 => 'grape',\n    ),\n  ),\n);\ntest_array($array, 'Default with array');\n$array = array(\n  1 => array(\n    1 => array(\n      1 => new FruitPublic('apple'),\n    ),\n    2 => array(\n      1 => new FruitPublic('grape'),\n    ),\n  ),\n);\ntest_array($array, 'Public Property');\n$array = array(\n  1 => array(\n    1 => array(\n      1 => new FruitProtected('apple'),\n    ),\n    2 => array(\n      1 => new FruitProtected('grape'),\n    ),\n  ),\n);\ntest_array($array, 'Protected Property');\ntest_array($array, 'Public Property New', RecursiveArrayIterator::CHILD_ARRAYS_ONLY);\ntest_array($array, 'Protected Property New', RecursiveArrayIterator::CHILD_ARRAYS_ONLY);\n?>")).toMatchSnapshot();
  });
});
