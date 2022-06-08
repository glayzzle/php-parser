// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug54382.phpt
  it("Bug #54382 DOMNode::getAttributeNodeNS doesn't get xmlns* attributes", function () {
    expect(parser.parseCode("<?php\n$xmlString = '<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<root xmlns=\"http://ns\" xmlns:ns2=\"http://ns2\">\n    <ns2:child />\n</root>';\n$xml=new DOMDocument();\n$xml->loadXML($xmlString);\n$de = $xml->documentElement;\n$ns2 = $de->getAttributeNodeNS(\"http://www.w3.org/2000/xmlns/\", \"ns2\");\nif ($ns2 == NULL) {\n  echo 'namespace node does not exist.' . \"\\n\";\n} else {\n  echo 'namespace node prefix=' . $ns2->prefix . \"\\n\";\n  echo 'namespace node namespaceURI=' . $ns2->namespaceURI . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
