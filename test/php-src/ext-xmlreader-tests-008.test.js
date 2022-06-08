// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/008.phpt
  it("XMLReader: libxml2 XML Reader, DTD", function () {
    expect(parser.parseCode("<?php\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE LIST SYSTEM \"dtdexample.dtd\">\n<LIST>\n<MOVIE ID=\"x200338360\">\n<TITLE>Move Title 1</TITLE>\n<ORGTITLE/><LOC>Location 1</LOC>\n<INFO/>\n</MOVIE>\n<MOVIE ID=\"m200338361\">\n<TITLE>Move Title 2</TITLE>\n<ORGTITLE/>\n<LOC>Location 2</LOC>\n<INFO/>\n</MOVIE>\n</LIST>';\n$dtdfile = rawurlencode(__DIR__) . '/dtdexample.dtd';\n$file = __DIR__ . '/_008.xml';\nfile_put_contents($file, $xmlstring);\n$reader = new XMLReader();\n$reader->open($file);\n$reader->setParserProperty(XMLREADER::LOADDTD, TRUE);\n$reader->setParserProperty(XMLREADER::VALIDATE, TRUE);\nwhile($reader->read());\nif ($reader->isValid()) {\n    echo \"file DTD: ok\\n\";\n}\n$reader->close();\nunlink($file);\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE LIST SYSTEM \"file:///' . $dtdfile. '\">\n<LIST>\n<MOVIE ID=\"x200338360\">\n<TITLE>Move Title 1</TITLE>\n<ORGTITLE/><LOC>Location 1</LOC>\n<INFO/>\n</MOVIE>\n<MOVIE ID=\"m200338361\">\n<TITLE>Move Title 2</TITLE>\n<ORGTITLE/>\n<LOC>Location 2</LOC>\n<INFO/>\n</MOVIE>\n</LIST>';\n$reader = new XMLReader();\n$reader->XML($xmlstring);\n$reader->setParserProperty(XMLREADER::LOADDTD, TRUE);\n$reader->setParserProperty(XMLREADER::VALIDATE, TRUE);\nwhile($reader->read());\nif ($reader->isValid()) {\n    echo \"string DTD: ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
