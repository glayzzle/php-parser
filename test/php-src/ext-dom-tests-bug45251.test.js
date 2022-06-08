// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug45251.phpt
  it("Bug #45251 (double free or corruption with setAttributeNode())", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->loadXml(<<<EOF\n<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<aaa>\n  <bbb foo=\"bar\"/>\n</aaa>\nEOF\n);\n$xpath = new DOMXPath($doc);\n$bbb = $xpath->query('bbb', $doc->documentElement)->item(0);\n$ccc = $doc->createElement('ccc');\nforeach ($bbb->attributes as $attr)\n{\n  $ccc->setAttributeNode($attr);\n}\necho $attr->parentNode->localName;\n?>")).toMatchSnapshot();
  });
});
