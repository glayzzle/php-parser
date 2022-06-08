// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_validate_on_parse_basic.phpt
  it("DOMDocument::$validateOnParse - read/write tests (dom_document_validate_on_parse_read/dom_document_validate_on_parse_write)", function () {
    expect(parser.parseCode("<?php\nrequire_once('dom_test.inc');\n$dom = new DOMDocument;\n$dom->loadXML($xmlstr);\nif( !$dom )\n{\n    echo \"Error while parsing the document\\n\";\n    exit;\n}\necho \"Checking documented default value: \";\nvar_dump($dom->validateOnParse);\n$dom->validateOnParse = TRUE;\necho \"Setting validateOnParse to TRUE: \";\nvar_dump($dom->validateOnParse);\n$dom->validateOnParse = FALSE;\necho \"Setting validateOnParse to FALSE: \";\nvar_dump($dom->validateOnParse);\n?>")).toMatchSnapshot();
  });
});
