// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_DOMNode_before.phpt
  it("DOMNode::before()", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test><mark>first</mark><mark>second</mark></test>');\n$element = $dom->documentElement->firstElementChild;\n$secondMark = $dom->documentElement->lastElementChild;\n$element->before(\n  $dom->createElement('inserted-before', 'content'),\n  'text inserted before'\n);\n$secondMark->before('text inserted before second');\nprint_node_list_compact($dom->documentElement->childNodes);\n?>")).toMatchSnapshot();
  });
});
