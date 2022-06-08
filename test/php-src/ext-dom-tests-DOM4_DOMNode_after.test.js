// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_DOMNode_after.phpt
  it("DOMNode::after()", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test><mark>first</mark><mark>second</mark></test>');\n$element = $dom->documentElement->firstElementChild;\n$secondMark = $dom->documentElement->lastElementChild;\n$element->after(\n  'text inserted after',\n  $dom->createElement('inserted-after', 'content')\n);\n$secondMark->after('text inserted after second');\nprint_node_list_compact($dom->documentElement->childNodes);\n?>")).toMatchSnapshot();
  });
});
