// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_017.phpt
  it("GC 017: GC and destructors with unset", function () {
    expect(parser.parseCode("<?php\nclass Node {\n    public $name;\n    public $children;\n    public $parent;\n    function __construct($name) {\n        $this->name = $name;\n        $this->parent = null;\n    }\n    function insert($node) {\n        $node->parent = $this;\n        $this->children[] = $node;\n    }\n    function __destruct() {\n        var_dump($this->name);\n        unset($this->name);\n        unset($this->children);\n        unset($this->parent);\n    }\n}\n$a = new Node('A');\n$b = new Node('B');\n$c = new Node('C');\n$a->insert($b);\n$a->insert($c);\nunset($a);\nunset($b);\nunset($c);\nvar_dump(gc_collect_cycles());\necho \"ok\\n\"\n?>")).toMatchSnapshot();
  });
});
