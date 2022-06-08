// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/bug64230.phpt
  it("Bug #64230 (XMLReader does not suppress errors)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\nfunction show_internal_errors() {\n    foreach (libxml_get_errors() as $error) {\n        printf(\"Internal: %s\\n\", $error->message);\n    }\n    libxml_clear_errors();\n}\necho \"Internal errors TRUE\\n\";\nlibxml_use_internal_errors(true);\n$x = new XMLReader;\n$x->xml(\"<root att/>\");\n$x->read();\nshow_internal_errors();\necho \"Internal errors FALSE\\n\";\nlibxml_use_internal_errors(false);\n$x = new XMLReader;\n$x->xml(\"<root att/>\");\n$x->read();\nshow_internal_errors();\n?>\nDone")).toMatchSnapshot();
  });
});
