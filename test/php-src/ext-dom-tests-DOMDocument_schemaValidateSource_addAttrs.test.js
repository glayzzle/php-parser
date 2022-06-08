// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_schemaValidateSource_addAttrs.phpt
  it("DomDocument::schemaValidateSource() - Add missing attribute default values from schema", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book-attr.xml\");\n$xsd = file_get_contents(__DIR__.\"/book.xsd\");\n$doc->schemaValidateSource($xsd, LIBXML_SCHEMA_CREATE);\nforeach ($doc->getElementsByTagName('book') as $book) {\n    var_dump($book->getAttribute('is-hardback'));\n}\n?>")).toMatchSnapshot();
  });
});
