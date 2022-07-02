// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63635.phpt
  it("Bug #63635 (Segfault in gc_collect_cycles)", function () {
    expect(parser.parseCode("<?php\nclass Node {\n    public $parent = NULL;\n    public $children = array();\n    function __construct(Node $parent=NULL) {\n        if ($parent) {\n            $parent->children[] = $this;\n        }\n        $this->children[] = $this;\n    }\n    function __destruct() {\n        $this->children = NULL;\n    }\n}\ndefine(\"MAX\", 16);\nfor ($n = 0; $n < 20; $n++) {\n    $top = new Node();\n    for ($i=0 ; $i<MAX ; $i++) {\n        $ci = new Node($top);\n        for ($j=0 ; $j<MAX ; $j++) {\n            $cj = new Node($ci);\n            for ($k=0 ; $k<MAX ; $k++) {\n                $ck = new Node($cj);\n            }\n        }\n    }\n    echo \"$n\\n\";\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
