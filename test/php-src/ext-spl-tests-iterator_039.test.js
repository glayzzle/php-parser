// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_039.phpt
  it("SPL: LimitIterator and backward seeking", function () {
    expect(parser.parseCode("<?php\nclass NumericArrayIterator implements Iterator\n{\n    protected $a;\n    protected $i = 0;\n    public function __construct($a)\n    {\n        echo __METHOD__ . \"\\n\";\n        $this->a = $a;\n    }\n    public function valid(): bool\n    {\n        echo __METHOD__ . \"\\n\";\n        return $this->i < count($this->a);\n    }\n    public function rewind(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        $this->i = 0;\n    }\n    public function key(): mixed\n    {\n        echo __METHOD__ . \"\\n\";\n        return $this->i;\n    }\n    public function current(): mixed\n    {\n        echo __METHOD__ . \"\\n\";\n        return $this->a[$this->i];\n    }\n    public function next(): void\n    {\n        echo __METHOD__ . \"\\n\";\n        $this->i++;\n    }\n}\n$it = new LimitIterator(new NumericArrayIterator(array(12, 25, 42, 56)));\nforeach($it as $k => $v)\n{\n    var_dump($k);\n    var_dump($v);\n}\necho \"===SEEK===\\n\";\n$it->seek(2);\necho \"===LOOP===\\n\";\nforeach(new NoRewindIterator($it) as $k => $v)\n{\n    var_dump($k);\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
