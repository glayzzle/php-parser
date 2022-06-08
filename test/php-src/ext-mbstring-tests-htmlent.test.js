// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/htmlent.phpt
  it("HTML input/output", function () {
    expect(parser.parseCode("<?php\n// enable output encoding through output handler\n//ob_start(\"mb_output_handler\");\n// &#64... are must be decoded on input these are not reencoded on output.\n// If you see &#64;&#65;&#66; on output this means input encoding fails.\n// If you do not see &auml;... on output this means output encoding fails.\n// Using UTF-8 internally allows to encode/decode ALL characters.\n// &128... will stay as they are since their character codes are above 127\n// and they do not have a named entity representation.\n?>\n<?php echo mb_http_input('l').'>'.mb_internal_encoding().'>'.mb_http_output();?>\n<?php mb_parse_str(\"test=&#38;&#64;&#65;&#66;&#128;&#129;&#130;&auml;&ouml;&uuml;&euro;&lang;&rang;\", $test);\nprint_r($test);\n?>")).toMatchSnapshot();
  });
});
