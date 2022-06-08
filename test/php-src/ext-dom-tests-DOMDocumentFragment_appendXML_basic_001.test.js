// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentFragment_appendXML_basic_001.phpt
  it("DOMDocumentFragment::appendXML() with children with properties.", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument;\n$root = $document->createElement('root');\n$document->appendChild($root);\n$fragment = $document->createDocumentFragment();\n$fragment->appendXML('<foo id=\"baz\">bar</foo>');\n$root->appendChild($fragment);\nprint $document->saveXML();\n?>")).toMatchSnapshot();
  });
});
