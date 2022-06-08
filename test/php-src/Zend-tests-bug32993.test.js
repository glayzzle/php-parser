// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32993.phpt
  it("Bug #32993 (implemented Iterator function current() don't throw exception)", function () {
    expect(parser.parseCode("<?php\nclass Test implements Iterator {\n    public $arr = array();\n    public function rewind(): void    { reset($this->arr); }\n    public function current(): mixed   { throw new Exception(); }\n    public function key(): mixed       { return key($this->arr); }\n    public function next(): void      { next($this->arr); }\n    public function valid(): bool     { return (current($this->arr) !== false); }\n}\n$t = new Test();\n$t->arr =  array(1, 2, 3);\ntry {\n    foreach ($t as $v) {\n        echo \"$v\\n\";\n    }\n} catch (Exception $e) {\n    ; // handle exception\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
