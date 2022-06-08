// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_schemaValidate_error5.phpt
  it("DomDocument::schemaValidate() - non-existent schema file", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\n$result = $doc->schemaValidate(__DIR__.\"/non-existent-file\");\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
