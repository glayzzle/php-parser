// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_schemaValidateSource_error1.phpt
  it("DomDocument::schemaValidateSource() - string that is not a schema", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\n$result = $doc->schemaValidateSource('string that is not a schema');\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
