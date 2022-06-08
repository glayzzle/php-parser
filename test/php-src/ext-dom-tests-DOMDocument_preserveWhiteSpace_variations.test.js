// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_preserveWhiteSpace_variations.phpt
  it("DOMDocument::$preserveWhiteSpace - test ability to read and write property", function () {
    expect(parser.parseCode("<?php\necho \"Load document with preserveWhiteSpace on\\n\";\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\necho $doc->saveXML();\necho \"\\nLoad document with preserveWhiteSpace off\\n\";\n$doc = new DOMDocument;\n$doc->preserveWhiteSpace = false;\n$doc->load(__DIR__.\"/book.xml\");\necho $doc->saveXML();\n?>")).toMatchSnapshot();
  });
});
