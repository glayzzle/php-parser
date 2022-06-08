// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_ParentNode.phpt
  it("DOMParentNode: Child Element Handling", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test>foo<bar>FirstElement</bar><bar>LastElement</bar>bar</test>');\nvar_dump($dom instanceof DOMParentNode);\nprint_node($dom->firstElementChild);\nprint_node($dom->lastElementChild);\nvar_dump($dom->childElementCount);\n$element = $dom->documentElement;\nvar_dump($element instanceof DOMParentNode);\nprint_node($element->firstElementChild);\nprint_node($element->lastElementChild);\nvar_dump($element->childElementCount);\nvar_dump($element->lastElementChild->firstElementChild);\nvar_dump($element->lastElementChild->lastElementChild);\nvar_dump($element->lastElementChild->childElementCount);\n?>")).toMatchSnapshot();
  });
});
