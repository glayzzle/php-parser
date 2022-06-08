// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMCharacterData_appendData_basic.phpt
  it("DOMCharacterData::appendData basic functionality test", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument;\n$root = $document->createElement('root');\n$document->appendChild($root);\n$cdata = $document->createElement('cdata');\n$root->appendChild($cdata);\n$cdatanode = $document->createCDATASection('');\n$cdata->appendChild($cdatanode);\n$cdatanode->appendData('data');\necho \"CDATA Length (one append): \" . $cdatanode->length . \"\\n\";\n$cdatanode->appendData('><&\"');\necho \"CDATA Length (two appends): \" . $cdatanode->length . \"\\n\";\necho \"CDATA Content: \" . $cdatanode->data . \"\\n\";\necho \"\\n\" . $document->saveXML();\n?>")).toMatchSnapshot();
  });
});
