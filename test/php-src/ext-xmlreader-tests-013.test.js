// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/013.phpt
  it("XMLReader: Schema validation", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<items>\n  <item>123</item>\n  <item>456</item>\n</items>\nEOF;\n$reader = new XMLReader();\n$reader->XML($xml);\n$reader->setSchema(__DIR__ . '/013.xsd');\nwhile($reader->read()) {\n    if ($reader->nodeType == XMLReader::ELEMENT && $reader->name == 'item') {\n        $reader->read();\n        var_dump($reader->value);\n    }\n}\n$reader->close();\n?>\n===FAIL===\n<?php\n$xml =<<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<foo/>\nEOF;\n$reader = new XMLReader();\n$reader->XML($xml);\n$reader->setSchema(__DIR__ . '/013.xsd');\nwhile($reader->read() && $reader->nodeType != XMLReader::ELEMENT);\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
