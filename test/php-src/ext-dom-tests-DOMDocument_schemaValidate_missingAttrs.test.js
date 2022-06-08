// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_schemaValidate_missingAttrs.phpt
  it("DomDocument::schemaValidate() - Don't add missing attribute default values from schema", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book-attr.xml\");\n$doc->schemaValidate(__DIR__.\"/book.xsd\");\nforeach ($doc->getElementsByTagName('book') as $book) {\n    var_dump($book->getAttribute('is-hardback'));\n}\n?>")).toMatchSnapshot();
  });
});
