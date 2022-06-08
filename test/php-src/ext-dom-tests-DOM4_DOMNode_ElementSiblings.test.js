// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_DOMNode_ElementSiblings.phpt
  it("DOMNode: Element Siblings", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test>foo<bar>FirstElement</bar><bar>LastElement</bar>bar</test>');\n$element = $dom->documentElement;\nprint_node($element->firstElementChild->nextElementSibling);\nprint_node($element->lastElementChild->previousElementSibling);\n?>")).toMatchSnapshot();
  });
});
