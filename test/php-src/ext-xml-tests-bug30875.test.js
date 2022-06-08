// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug30875.phpt
  it("Bug #30875 (xml_parse_into_struct() does not resolve entities)", function () {
    expect(parser.parseCode("<?php\n$xml = <<<XML\n<!DOCTYPE dtd [\n    <!ENTITY ref \"ent\">\n]>\n<elt att=\"&ref;\">a&ref;</elt>\nXML;\n$parser = xml_parser_create();\nxml_parse_into_struct($parser, $xml, $vals);\nxml_parser_free($parser);\nvar_dump($vals);\n?>")).toMatchSnapshot();
  });
});
