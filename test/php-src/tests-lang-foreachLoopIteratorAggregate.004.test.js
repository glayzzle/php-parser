// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoopIteratorAggregate.004.phpt
  it("Duplicate of zend test tests/classes/iterators_002.phpt without expected output from destructor", function () {
    expect(parser.parseCode("<?php\nclass c_iter implements Iterator {\n    private $obj;\n    private $num = 0;\n    function __construct($obj) {\n        echo __METHOD__ . \"\\n\";\n        $this->obj = $obj;\n    }\n    function rewind(): void {\n        echo __METHOD__ . \"\\n\";\n        $this->num = 0;\n    }\n    function valid(): bool {\n        $more = $this->num < $this->obj->max;\n        echo __METHOD__ . ' = ' .($more ? 'true' : 'false') . \"\\n\";\n        return $more;\n    }\n    function current(): mixed {\n        echo __METHOD__ . \"\\n\";\n        return $this->num;\n    }\n    function next(): void {\n        echo __METHOD__ . \"\\n\";\n        $this->num++;\n    }\n    function key(): mixed {\n        echo __METHOD__ . \"\\n\";\n        switch($this->num) {\n            case 0: return \"1st\";\n            case 1: return \"2nd\";\n            case 2: return \"3rd\";\n            default: return \"???\";\n        }\n    }\n    function __destruct() {\n    }\n}\nclass c implements IteratorAggregate {\n    public $max = 3;\n    function getIterator(): Traversable {\n        echo __METHOD__ . \"\\n\";\n        return new c_iter($this);\n    }\n    function __destruct() {\n    }\n}\n$t = new c();\nforeach($t as $k => $v) {\n    foreach($t as $w) {\n        echo \"double:$v:$w\\n\";\n        break;\n    }\n}\nunset($t);\n?>")).toMatchSnapshot();
  });
});
