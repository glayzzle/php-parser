// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_normalize_basic.phpt
  it("DOMNode::normalize()", function () {
    expect(parser.parseCode("<?php\n/* Create an XML document\n * with structure\n * <book>\n *  <author></author>\n *  <title>This is the title</title>\n * </book>\n * Calculate the number of title text nodes (1).\n * Add another text node to title. Calculate the number of title text nodes (2).\n * Normalize author. Calculate the number of title text nodes (2).\n * Normalize title. Calculate the number of title text nodes (1).\n*/\n$doc = new DOMDocument();\n$root = $doc->createElement('book');\n$doc->appendChild($root);\n$title = $doc->createElement('title');\n$root->appendChild($title);\n$author = $doc->createElement('author');\n$root->appendChild($author);\n$text = $doc->createTextNode('This is the first title');\n$title->appendChild($text);\necho \"Number of child nodes of title = \";\nvar_dump($title->childNodes->length);\n// add a second text node to title\n$text = $doc->createTextNode('This is the second title');\n$title->appendChild($text);\necho \"Number of child nodes of title after adding second title = \";\nvar_dump($title->childNodes->length);\n// should do nothing\n$author->normalize();\necho \"Number of child nodes of title after normalizing author = \";\nvar_dump($title->childNodes->length);\n// should concatenate first and second title text nodes\n$title->normalize();\necho \"Number of child nodes of title after normalizing title = \";\nvar_dump($title->childNodes->length);\n?>")).toMatchSnapshot();
  });
});
