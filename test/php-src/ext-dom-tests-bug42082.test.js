// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug42082.phpt
  it("Bug #42082 (NodeList length zero should be empty)", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$xpath = new DOMXPath($doc);\n$nodes = $xpath->query('*');\necho get_class($nodes), \"\\n\";\nvar_dump($nodes->length);\n$length = $nodes->length;\nvar_dump(empty($nodes->length), empty($length));\n$doc->loadXML(\"<element></element>\");\nvar_dump($doc->firstChild->nodeValue, empty($doc->firstChild->nodeValue), isset($doc->firstChild->nodeValue));\nvar_dump(empty($doc->nodeType), empty($doc->firstChild->nodeType))\n?>")).toMatchSnapshot();
  });
});
