// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_ParentNode_Fragment.phpt
  it("DOMParentNode: Child Element Handling", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test></test>');\n$fragment = $dom->createDocumentFragment();\n$fragment->appendChild($dom->createTextNode('foo'));\n$fragment->appendChild($dom->createElement('bar', 'FirstElement'));\n$fragment->appendChild($dom->createElement('bar', 'LastElement'));\n$fragment->appendChild($dom->createTextNode('bar'));\nvar_dump($fragment instanceof DOMParentNode);\nprint_node($fragment->firstElementChild);\nprint_node($fragment->lastElementChild);\nvar_dump($fragment->childElementCount);\nvar_dump($fragment->lastElementChild->firstElementChild);\nvar_dump($fragment->lastElementChild->lastElementChild);\nvar_dump($fragment->lastElementChild->childElementCount);\n?>")).toMatchSnapshot();
  });
});
