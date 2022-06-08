// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/009.phpt
  it("XMLReader: libxml2 XML Reader, next", function () {
    expect(parser.parseCode("<?php\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books><book num=\"1\"><test /></book><book num=\"2\" /></books>';\n$reader = new XMLReader();\n$reader->XML($xmlstring);\n// Only go through\n$reader->read();\n$reader->read();\n$reader->next();\necho $reader->name;\necho \" \";\necho $reader->getAttribute('num');\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
