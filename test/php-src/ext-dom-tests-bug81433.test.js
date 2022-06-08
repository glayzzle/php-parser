// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug81433.phpt
  it("Bug #81433 (DOMElement::setIdAttribute(attr, true) called twice removes ID)", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument('1.0', 'utf-8');\n$element = $dom->createElement('test', 'root');\n$dom->appendChild($element);\n$element->setAttribute(\"id\", 123);\n$element->setIdAttribute(\"id\", true);\n$node = $element->getAttributeNode(\"id\");\nvar_dump($node->isId());\n$element->setIdAttribute(\"id\", true);\nvar_dump($node->isId());\n?>")).toMatchSnapshot();
  });
});
