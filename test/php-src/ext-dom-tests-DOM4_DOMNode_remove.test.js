// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_DOMNode_remove.phpt
  it("DOMNode::remove()", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test><one>first</one><two>second</two></test>');\n$element = $dom->documentElement;\nprint_node($element->firstChild);\n$returnValue = $element->firstChild->remove();\nprint_node($element->firstChild);\nvar_dump($returnValue);\n?>")).toMatchSnapshot();
  });
});
