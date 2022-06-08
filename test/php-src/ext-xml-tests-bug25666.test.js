// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug25666.phpt
  it("Bug #25666 (XML namespaces broken in libxml-based SAX interface)", function () {
    expect(parser.parseCode("<?php\nfunction start_elem($parser,$name,$attribs) {\n    var_dump($name);\n}\nfunction end_elem()\n{\n}\n$xml = <<<HERE\n<foo:a xmlns:foo=\"http://example.com/foo\"\n       xmlns:bar=\"http://example.com/bar\"\n       xmlns:baz=\"http://example.com/baz\">\n  <bar:b />\n  <baz:c />\n</foo>\nHERE;\n$parser = xml_parser_create_ns(\"ISO-8859-1\",\"@\");\nxml_set_element_handler($parser,'start_elem','end_elem');\nxml_parser_set_option($parser,XML_OPTION_CASE_FOLDING,0);\nxml_parse($parser, $xml);\nxml_parser_free($parser);\n?>")).toMatchSnapshot();
  });
});
