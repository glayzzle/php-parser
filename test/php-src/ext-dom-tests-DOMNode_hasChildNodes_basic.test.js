// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_hasChildNodes_basic.phpt
  it("Test whether a node has child nodes: hasChildNodes()", function () {
    expect(parser.parseCode("<?php\n/* Create an XML document\n * with structure\n * <book>\n *  <title>This is the title</title>\n * </book>\n * Check for child nodes of the <book>, <title> and This is the title\n *\n*/\n$doc = new DOMDocument();\n$root = $doc->createElement('book');\n$doc->appendChild($root);\n$title = $doc->createElement('title');\n$root->appendChild($title);\n$text = $doc->createTextNode('This is the title');\n$title->appendChild($text);\necho \"Root has child nodes: \";\nvar_dump($root->hasChildNodes());\necho \"Title has child nodes: \";\nvar_dump($title->hasChildNodes());\necho \"Text has child nodes: \";\nvar_dump($text->hasChildNodes());\n?>")).toMatchSnapshot();
  });
});
