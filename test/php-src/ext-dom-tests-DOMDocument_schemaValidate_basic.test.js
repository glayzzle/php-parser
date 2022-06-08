// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_schemaValidate_basic.phpt
  it("DomDocument::schemaValidate() - basic", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\n$result = $doc->schemaValidate(__DIR__.\"/book.xsd\");\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
