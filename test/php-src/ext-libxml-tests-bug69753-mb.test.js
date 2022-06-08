// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/bug69753-mb.phpt
  it("Bug #69753 - libXMLError::file contains invalid URI", function () {
    expect(parser.parseCode("<?php\nlibxml_use_internal_errors(true);\n$doc = new DomDocument();\n$doc->load(__DIR__ . DIRECTORY_SEPARATOR . 'bug69753私はガラスを食べられます.xml');\n$error = libxml_get_last_error();\nvar_dump($error->file);\n?>")).toMatchSnapshot();
  });
});
