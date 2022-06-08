// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug49463.phpt
  it("Bug #49463 (setAttributeNS fails setting default namespace).", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument('1.0', 'utf-8');\n$root = $doc->createElementNS('http://purl.org/rss/1.0/','rdf:RDF');\n$doc->appendChild($root);\n$root->setAttributeNS(\"http://www.w3.org/2000/xmlns/\",\"xmlns\",\"http://purl.org/rss/1.0/\" );\necho $doc->saveXML().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
