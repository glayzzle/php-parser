// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMCharacterData_substringData_basic_001.phpt
  it("__DOMCharacterData::substringData pull mid section of string", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument;\n$root = $document->createElement('root');\n$document->appendChild($root);\n$cdata = $document->createCDATASection('testfest');\n$root->appendChild($cdata);\nprint $cdata->substringData(1, 6);\n?>")).toMatchSnapshot();
  });
});
