// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentFragment_appendXML_error_003.phpt
  it("DOMDocumentFragment::appendXML() with unbalanced chunks.", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument;\n$root = $document->createElement('root');\n$document->appendChild($root);\n$fragment = $document->createDocumentFragment();\n@$fragment->appendXML('<foo>is<bar>great</foo>');\n$root->appendChild($fragment);\n?>")).toMatchSnapshot();
  });
});
