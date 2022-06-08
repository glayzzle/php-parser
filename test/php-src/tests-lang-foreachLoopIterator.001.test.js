// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoopIterator.001.phpt
  it("foreach with Iterator.", function () {
    expect(parser.parseCode("<?php\nclass MealIterator implements Iterator {\n    private $pos=0;\n    private $myContent=array(\"breakfast\", \"lunch\", \"dinner\");\n    public function valid(): bool {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        return $this->pos<3;\n    }\n    public function next(): void {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        $this->myContent[$this->pos++];\n    }\n    public function rewind(): void {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        $this->pos=0;\n    }\n    public function current(): mixed {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        return $this->myContent[$this->pos];\n    }\n    public function key(): mixed {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        return \"meal \" . $this->pos;\n    }\n}\n$f = new MealIterator;\nvar_dump($f);\necho \"-----( Simple iteration: )-----\\n\";\nforeach ($f as $k=>$v) {\n    echo \"$k => $v\\n\";\n}\n$f->rewind();\n$indent = \" \";\necho \"\\n\\n\\n-----( Nested iteration: )-----\\n\";\n$count=1;\nforeach ($f as $k=>$v) {\n    echo \"\\nTop level \"  .  $count++ . \": \\n\";\n    echo \"$k => $v\\n\";\n    $indent = \"     \";\n    foreach ($f as $k=>$v) {\n        echo \"     $k => $v\\n\";\n    }\n    $indent = \" \";\n}\n?>")).toMatchSnapshot();
  });
});
