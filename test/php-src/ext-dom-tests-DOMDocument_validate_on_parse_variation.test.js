// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_validate_on_parse_variation.phpt
  it("DOMDocument::$validateOnParse - effectual determination (dom_document_validate_on_parse_read/dom_document_validate_on_parse_write)", function () {
    expect(parser.parseCode("<?php\nrequire_once('dom_test.inc');\nchdir(__DIR__);\n$XMLStringGood = file_get_contents(__DIR__.'/note.xml');\n$dom = new DOMDocument;\n$dom->resolveExternals = TRUE;\n$dom->validateOnParse = FALSE;\necho \"validateOnParse set to FALSE: \\n\";\n$dom->loadXML($XMLStringGood);\necho \"No Error Report Above\\n\";\n$BogusElement = $dom->createElement('NYPHP','DOMinatrix');\n$Body = $dom->getElementsByTagName('from')->item(0);\n$Body->appendChild($BogusElement);\n$XMLStringBad = $dom->saveXML();\necho \"validateOnParse set to TRUE: \\n\";\n$dom->validateOnParse = TRUE;\n$dom->loadXML($XMLStringBad);\necho \"Error Report Above\\n\";\n?>")).toMatchSnapshot();
  });
});
