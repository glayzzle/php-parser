// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/xpath_domnamespacenode.phpt
  it("DOMXPath::query() can return DOMNodeList with DOMNameSpaceNode items", function () {
    expect(parser.parseCode("<?php\n$xml = <<<'XML'\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<test></test>\nXML;\n$doc = new DomDocument;\n$doc->loadXML($xml);\n$xpath = new DOMXPath($doc);\n$nodes = $xpath->query('//namespace::*');\nvar_dump($nodes->item(0));\n?>")).toMatchSnapshot();
  });
});
