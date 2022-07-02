// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69534.phpt
  it("Bug #69534 (Cycle leaks through declared properties on internal classes)", function () {
    expect(parser.parseCode("<?php\nclass Node extends SplObjectStorage {\n    public $prop;\n}\n$node1 = new Node;\n$node2 = new Node;\n$node1->prop = $node2;\n$node2->prop = $node1;\nunset($node1);\nunset($node2);\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
