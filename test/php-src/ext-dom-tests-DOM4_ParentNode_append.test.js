// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_ParentNode_append.phpt
  it("DOMParentNode::append()", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test><mark/><mark /><mark /></test>');\n$element = $dom->documentElement;\n$element->append(\n  $dom->createElement('element', 'content'),\n  'content'\n);\nvar_dump($dom->documentElement->childElementCount);\nprint_node_list_compact($element->childNodes);\n$element->append(\n  $dom->createElement('element', 'content'),\n  'content'\n);\nvar_dump($dom->documentElement->childElementCount);\n?>")).toMatchSnapshot();
  });
});
