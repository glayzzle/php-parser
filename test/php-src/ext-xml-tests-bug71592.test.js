// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug71592.phpt
  it("Bug #71592 (External entity processing never fails)", function () {
    expect(parser.parseCode("<?php\n// The tag mismatch at the end of the XML is on purpose, to make sure that the\n// parser actually stops after the handler returns FALSE.\n$xml = <<<XML\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE root [\n  <!ENTITY pic PUBLIC \"image.gif\" \"http://example.org/image.gif\">\n]>\n<root>\n<p>&pic;</p>\n<p></nop>\n</root>\nXML;\n$parser = xml_parser_create_ns('UTF-8');\nxml_set_external_entity_ref_handler($parser, function () {\n    return false;\n});\nxml_parse($parser, $xml);\nvar_dump(xml_get_error_code($parser) === XML_ERROR_EXTERNAL_ENTITY_HANDLING);\n?>")).toMatchSnapshot();
  });
});
