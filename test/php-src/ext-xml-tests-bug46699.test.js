// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug46699.phpt
  it("Bug #46699: (xml_parse crash when parser is namespace aware)", function () {
    expect(parser.parseCode("<?php\nfunction defaultfunc($parser, $data)\n{\necho $data;\n}\n$xml = <<<HERE\n<a xmlns=\"http://example.com/foo\"\n    xmlns:bar=\"http://example.com/bar\">\n  <bar:b foo=\"bar\">1</bar:b>\n  <bar:c bar:nix=\"null\" foo=\"bar\">2</bar:c>\n</a>\nHERE;\n$parser = xml_parser_create_ns(\"ISO-8859-1\",\"@\");\nxml_set_default_handler($parser,'defaultfunc');\nxml_parser_set_option($parser,XML_OPTION_CASE_FOLDING,0);\nxml_parse($parser, $xml);\nxml_parser_free($parser);\n?>")).toMatchSnapshot();
  });
});
