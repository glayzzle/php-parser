// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_createEntityReference_basic.phpt
  it("DOMDocument::createEntityReference() should create a new entity reference node", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument('1.0');\n$ref = $dom->createEntityReference('nbsp');\n$dom->appendChild($ref);\necho $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
