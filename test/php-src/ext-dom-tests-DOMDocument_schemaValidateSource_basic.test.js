// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_schemaValidateSource_basic.phpt
  it("DomDocument::schemaValidateSource() - basic", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\n$xsd = file_get_contents(__DIR__.\"/book.xsd\");\n$result = $doc->schemaValidateSource($xsd);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
