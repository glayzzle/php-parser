// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_prop_recursion.phpt
  it("Unset property where unset will recursively access property again", function () {
    expect(parser.parseCode("<?php\nclass Node {\n    public $parent = null;\n    public $children = [];\n    function insert(Node $node) {\n        $node->parent = $this;\n        $this->children[] = $node;\n    }\n    function __destruct() {\n        var_dump($this);\n        unset($this->children);\n    }\n}\n$a = new Node;\n$a->insert(new Node);\n$a->insert(new Node);\n?>")).toMatchSnapshot();
  });
});
