// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug38850.phpt
  it("Bug #38850 (lookupNamespaceURI does not return default namespace)", function () {
    expect(parser.parseCode("<?php\n$xml = <<<HERE\n<?xml version=\"1.0\" ?>\n<foo xmlns=\"http://www.example.com/ns/foo\" />\nHERE;\n$doc = new DOMDocument();\n$doc->loadXML($xml);\n$root = $doc->documentElement;\nprint $root->lookupNamespaceURI(NULL);\n?>")).toMatchSnapshot();
  });
});
