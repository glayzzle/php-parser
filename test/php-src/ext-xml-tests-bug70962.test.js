// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug70962.phpt
  it("Bug #70962 (XML_OPTION_SKIP_WHITE strips embedded whitespace)", function () {
    expect(parser.parseCode("<?php\nfunction parseAndOutput($xml)\n{\n    $parser = xml_parser_create();\n    xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE, 1);\n    xml_parse_into_struct($parser, $xml, $values);\n    return $values;\n}\n$xml = \"<a><b>&lt;d&gt;\\n &lt;e&gt;</b><![CDATA[  ]]><c>\\n \\t</c></a>\";\n$parsed = parseAndOutput($xml);\n// Check embedded whitespace is not getting skipped.\necho $parsed[1]['value'] . \"\\n\";\n// Check XML_OPTION_SKIP_WHITE ignores values of tags containing whitespace characters only.\nvar_dump(isset($parsed[2]['value']));\n// Check XML_OPTION_SKIP_WHITE ignores empty <![CDATA[  ]]> values.\nvar_dump(count($parsed));\n?>")).toMatchSnapshot();
  });
});
