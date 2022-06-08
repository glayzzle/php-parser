// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_getNodePath_basic.phpt
  it("DOMNode::getNodePath()", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.'/book.xml';\n$doc = new DOMDocument();\n$doc->load($file);\n$nodes = $doc->getElementsByTagName('title');\nforeach($nodes as $node) {\n    var_dump($node->getNodePath());\n}\n?>")).toMatchSnapshot();
  });
});
