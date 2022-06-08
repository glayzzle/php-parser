// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_DOMNode_replaceWith.phpt
  it("DOMNode::replaceWith()", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test><mark>first</mark><mark>second</mark></test>');\n$element = $dom->documentElement->firstChild;\n$element->replaceWith(\n  $dom->createElement('element', 'content'),\n  'content'\n);\nprint_node_list_compact($dom->documentElement->childNodes);\n?>")).toMatchSnapshot();
  });
});
