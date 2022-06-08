// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_DOMNode_prepend_ns.phpt
  it("DOMNode::prepend() with namespace", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$doc  = new DOMDocument('1.0', 'utf-8');\n$doc->formatOutput = true;\n$root = $doc->createElementNS('http://www.w3.org/2005/Atom', 'element');\n$doc->appendChild($root);\n$root->setAttributeNS('http://www.w3.org/2000/xmlns/' ,'xmlns:g', 'http://base.google.com/ns/1.0');\n$item = $doc->createElementNS('http://base.google.com/ns/1.0', 'g:item_type', 'house');\n$root->prepend($item);\necho $doc->saveXML(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
