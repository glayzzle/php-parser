// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMCharacterData_deleteData_basic_001.phpt
  it("DOMCharacterData::deleteData() with count exceeding string size.", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument;\n$root = $document->createElement('root');\n$document->appendChild($root);\n$cdata = $document->createCDATASection('test');\n$root->appendChild($cdata);\n$cdata->deleteData(1, 10);\nvar_dump($cdata->data);\n?>")).toMatchSnapshot();
  });
});
