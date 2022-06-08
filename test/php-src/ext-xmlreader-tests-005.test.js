// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/005.phpt
  it("XMLReader: libxml2 XML Reader, parser property set/get", function () {
    expect(parser.parseCode("<?php\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books></books>';\n$reader = new XMLReader();\n$reader->XML($xmlstring);\n$a = $reader->setParserProperty(XMLReader::LOADDTD, false);\n$b = $reader->getParserProperty(XMLReader::LOADDTD);\nif (!$a && !$b) {\n    echo \"ok\\n\";\n}\n$a = $reader->setParserProperty(XMLReader::SUBST_ENTITIES, true);\n$b = $reader->getParserProperty(XMLReader::SUBST_ENTITIES);\nif ($a && $b) {\n    echo \"ok\\n\";\n}\n// Only go through\nwhile ($reader->read());\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
