// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/iterators_003.phpt
  it("ZE2 iterators and break", function () {
    expect(parser.parseCode("<?php\nclass c_iter implements Iterator {\n    private $obj;\n    private $num = 0;\n    function __construct($obj) {\n        echo __METHOD__ . \"\\n\";\n        $this->obj = $obj;\n    }\n    function rewind(): void {\n        echo __METHOD__ . \"\\n\";\n    }\n    function valid(): bool {\n        $more = $this->num < $this->obj->max;\n        echo __METHOD__ . ' = ' .($more ? 'true' : 'false') . \"\\n\";\n        return $more;\n    }\n    function current(): mixed {\n        echo __METHOD__ . \"\\n\";\n        return $this->num;\n    }\n    function next(): void {\n        echo __METHOD__ . \"\\n\";\n        $this->num++;\n    }\n    function key(): mixed {\n        return $this->num;\n    }\n}\nclass c implements IteratorAggregate {\n    public $max = 4;\n    function getIterator(): Traversable {\n        echo __METHOD__ . \"\\n\";\n        return new c_iter($this);\n    }\n}\n$t = new c();\nforeach($t as $v) {\n    if ($v == 0) {\n        echo \"continue outer\\n\";\n        continue;\n    }\n    foreach($t as $w) {\n        if ($w == 1) {\n            echo \"continue inner\\n\";\n            continue;\n        }\n        if ($w == 2) {\n            echo \"break inner\\n\";\n            break;\n        }\n        echo \"double:$v:$w\\n\";\n    }\n    if ($v == 2) {\n        echo \"break outer\\n\";\n        break;\n    }\n}\nprint \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
