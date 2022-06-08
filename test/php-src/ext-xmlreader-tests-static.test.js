// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/static.phpt
  it("Calling XMLReader::open() and ::XML() statically", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . '/static.xml';\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books></books>';\nfile_put_contents($filename, $xmlstring);\n$reader = XMLReader::open($filename);\nwhile ($reader->read()) {\n    echo $reader->name, \"\\n\";\n}\n$reader = XMLReader::XML($xmlstring);\nwhile ($reader->read()) {\n    echo $reader->name, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
