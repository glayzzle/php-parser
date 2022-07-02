// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoopIteratorAggregate.001.phpt
  it("foreach with iteratorAggregate", function () {
    expect(parser.parseCode("<?php\nclass EnglishMealIterator implements Iterator {\n    private $pos=0;\n    private $myContent=array(\"breakfast\", \"dinner\", \"tea\");\n    public function valid(): bool {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        return $this->pos < count($this->myContent);\n    }\n    public function next(): void {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        $this->pos++;\n    }\n    public function rewind(): void {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        $this->pos=0;\n    }\n    public function current(): mixed {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        return $this->myContent[$this->pos];\n    }\n    public function key(): mixed {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        return \"meal \" . $this->pos;\n    }\n}\nclass FrenchMealIterator implements Iterator {\n    private $pos=0;\n    private $myContent=array(\"petit dejeuner\", \"dejeuner\", \"gouter\", \"dinner\");\n    public function valid(): bool {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        return $this->pos < count($this->myContent);\n    }\n    public function next(): void {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        $this->pos++;\n    }\n    public function rewind(): void {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        $this->pos=0;\n    }\n    public function current(): mixed {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        return $this->myContent[$this->pos];\n    }\n    public function key(): mixed {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__ . \" ($this->pos)\\n\";\n        return \"meal \" . $this->pos;\n    }\n}\nClass EuropeanMeals implements IteratorAggregate {\n    private $storedEnglishMealIterator;\n    private $storedFrenchMealIterator;\n    public function __construct() {\n        $this->storedEnglishMealIterator = new EnglishMealIterator;\n        $this->storedFrenchMealIterator = new FrenchMealIterator;\n    }\n    public function getIterator(): Traversable {\n        global $indent;\n        echo \"$indent--> \" . __METHOD__  . \"\\n\";\n        //Alternate between English and French meals\n        static $i = 0;\n        if ($i++%2 == 0) {\n            return $this->storedEnglishMealIterator;\n        } else {\n            return $this->storedFrenchMealIterator;\n        }\n    }\n}\n$f = new EuropeanMeals;\nvar_dump($f);\necho \"-----( Simple iteration 1: )-----\\n\";\nforeach ($f as $k=>$v) {\n    echo \"$k => $v\\n\";\n}\necho \"-----( Simple iteration 2: )-----\\n\";\nforeach ($f as $k=>$v) {\n    echo \"$k => $v\\n\";\n}\n$indent = \" \";\necho \"\\n\\n\\n-----( Nested iteration: )-----\\n\";\n$count=1;\nforeach ($f as $k=>$v) {\n    echo \"\\nTop level \"  .  $count++ . \": \\n\";\n    echo \"$k => $v\\n\";\n    $indent = \"     \";\n    foreach ($f as $k=>$v) {\n        echo \"     $k => $v\\n\";\n    }\n    $indent = \" \";\n}\n?>")).toMatchSnapshot();
  });
});
