// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMCharacterData_data_basic_002.phpt
  it("Create CDATA section and change it using DOMcreateCDATASection", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument;\n$root = $document->createElement('root');\n$document->appendChild($root);\n$cdata = $document->createCDATASection('t');\n$root->appendChild($cdata);\nprint $document->saveXML().\"\\n\";\n$cdata->data = 100;\nprint $document->saveXML().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
