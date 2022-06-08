// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/bug73053.phpt
  it("Bug #73053 (XML reader with setSchema now fails under 5.6.25)", function () {
    expect(parser.parseCode("<?php\n$xmlfile = __DIR__ . DIRECTORY_SEPARATOR . 'bug73053.xml';\n$xsdfile = __DIR__ . DIRECTORY_SEPARATOR . 'bug73053.xsd';\n$xml = new XMLReader();\nvar_dump($xml->open($xmlfile, null, LIBXML_PARSEHUGE));\n$xml->setSchema($xsdfile);\nwhile($xml->read());\n?>")).toMatchSnapshot();
  });
});
