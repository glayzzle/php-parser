// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/iterators_007.phpt
  it("ZE2 iterators and exceptions", function () {
    expect(parser.parseCode("<?php\nclass Test implements Iterator\n{\n    public $arr = array(1, 2, 3);\n    public $x = 0;\n    public function rewind(): void    { if ($this->x == 0) throw new Exception(__METHOD__); reset($this->arr); }\n    public function current(): mixed   { if ($this->x == 1) throw new Exception(__METHOD__); return current($this->arr); }\n    public function key(): mixed       { if ($this->x == 2) throw new Exception(__METHOD__); return key($this->arr); }\n    public function next(): void      { if ($this->x == 3) throw new Exception(__METHOD__); next($this->arr); }\n    public function valid(): bool     { if ($this->x == 4) throw new Exception(__METHOD__); return (key($this->arr) !== NULL); }\n}\n$t = new Test();\nwhile($t->x < 5)\n{\n    try\n    {\n        foreach($t as $k => $v)\n        {\n            echo \"Current\\n\";\n        }\n    }\n    catch(Exception $e)\n    {\n        echo \"Caught in \" . $e->getMessage() . \"()\\n\";\n    }\n    $t->x++;\n}\n?>")).toMatchSnapshot();
  });
});
