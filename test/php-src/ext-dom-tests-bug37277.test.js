// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug37277.phpt
  it("Bug #37277 (cloning Dom Documents or Nodes does not work)", function () {
    expect(parser.parseCode("<?php\n$dom1 = new DomDocument('1.0', 'UTF-8');\n$xml = '<foo />';\n$dom1->loadXml($xml);\n$node = clone $dom1->documentElement;\n$dom2 = new DomDocument('1.0', 'UTF-8');\n$dom2->appendChild($dom2->importNode($node->cloneNode(true), TRUE));\nprint $dom2->saveXML();\n?>")).toMatchSnapshot();
  });
});
