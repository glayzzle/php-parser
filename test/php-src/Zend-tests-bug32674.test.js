// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32674.phpt
  it("Bug #32674 (exception in iterator causes crash)", function () {
    expect(parser.parseCode("<?php\nclass collection implements Iterator {\n  private $_elements = array();\n  public function __construct() {\n  }\n  public function rewind(): void {\n    reset($this->_elements);\n  }\n  public function count(): int {\n    return count($this->_elements);\n  }\n  public function current(): mixed {\n    $element = current($this->_elements);\n    return $element;\n  }\n  public function next(): void {\n    $element = next($this->_elements);\n    $element;\n  }\n  public function key(): mixed {\n    $this->_fillCollection();\n    $element = key($this->_elements);\n    return $element;\n  }\n  public function valid(): bool {\n    throw new Exception('shit happened');\n    return ($this->current() !== false);\n  }\n}\nclass class2 {\n  public $dummy;\n}\n$obj = new class2();\n$col = new collection();\ntry {\n    foreach($col as $co) {\n    //irrelevant\n    }\n    echo 'shouldn`t get here';\n    //$dummy = 'this will not crash';\n    $obj->dummy = 'this will crash';\n} catch (Exception $e) {\n    echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
