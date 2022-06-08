// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/010.phpt
  it("XMLReader: libxml2 XML Reader, next", function () {
    expect(parser.parseCode("<?php\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<prefix:books xmlns:prefix=\"uri\" isbn=\"\" prefix:isbn=\"12isbn\">book1</prefix:books>';\n$reader = new XMLReader();\n$reader->XML($xmlstring);\n// Only go through\n$reader->read();\n$reader->read();\n$reader->next();\necho $reader->name;\necho \" \";\necho $reader->getAttributeNs('isbn', 'uri');\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
