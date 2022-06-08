// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/readString_basic.phpt
  it("XMLReader: readString basic", function () {
    expect(parser.parseCode("<?php\n$xml = '<?xml version=\"1.0\" encoding=\"UTF-8\"?><books><book>Book1</book><book>Book2</book></books>';\n$reader = new XMLReader();\n$reader->xml($xml);\n$reader->read();\necho $reader->readString();\n?>")).toMatchSnapshot();
  });
});
