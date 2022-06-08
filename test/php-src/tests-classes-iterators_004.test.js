// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/iterators_004.phpt
  it("ZE2 iterators must be implemented", function () {
    expect(parser.parseCode("<?php\necho \"1st try\\n\";\nclass c1 {}\n$obj = new c1();\nforeach($obj as $w) {\n    echo \"object:$w\\n\";\n}\necho \"2nd try\\n\";\nclass c2 {\n    public $max = 3;\n    public $num = 0;\n    function current() {\n        echo __METHOD__ . \"\\n\";\n        return $this->num;\n    }\n    function next(): void {\n        echo __METHOD__ . \"\\n\";\n        $this->num++;\n    }\n    function valid(): bool {\n        echo __METHOD__ . \"\\n\";\n        return $this->num < $this->max;\n    }\n    function key(): mixed {\n        echo __METHOD__ . \"\\n\";\n        switch($this->num) {\n            case 0: return \"1st\";\n            case 1: return \"2nd\";\n            case 2: return \"3rd\";\n            default: return \"???\";\n        }\n    }\n}\n$obj = new c2();\nforeach($obj as $v => $w) {\n    echo \"object:$v=>$w\\n\";\n}\nprint \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
