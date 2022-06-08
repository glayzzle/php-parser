// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/011.phpt
  it("XMLReader: libxml2 XML Reader, string data", function () {
    expect(parser.parseCode("<?php\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books><book>test</book></books>';\n$reader = new XMLReader();\n$reader->XML($xmlstring);\n$reader->read();\necho $reader->readInnerXml();\necho \"\\n\";\n$reader->close();\n$reader = new XMLReader();\n$reader->XML($xmlstring);\n$reader->read();\necho $reader->readOuterXml();\necho \"\\n\";\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
