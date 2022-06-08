// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_schemaValidate_error1.phpt
  it("DomDocument::schemaValidate() - file that is not a schema", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\n$result = $doc->schemaValidate(__DIR__.\"/book-not-a-schema.xsd\");\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
