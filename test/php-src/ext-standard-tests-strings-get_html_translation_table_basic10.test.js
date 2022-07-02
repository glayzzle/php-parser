// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/get_html_translation_table_basic10.phpt
  it("Test get_html_translation_table() function: htmlentities/HTML 4/ISO-8859-1 (bug #64011)", function () {
    expect(parser.parseCode("<?php\nfunction so($a,$b) { return ord($a) - ord($b); }\n$table = HTML_ENTITIES;\n$tt = get_html_translation_table($table, ENT_COMPAT, \"ISO-8859-1\");\nuksort( $tt, 'so' );\nvar_dump( count($tt) );\nprint_r( $tt );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
