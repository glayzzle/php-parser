// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/get_html_translation_table_basic1.phpt
  it("Test get_html_translation_table() function : basic functionality - with default args", function () {
    expect(parser.parseCode("<?php\n/* Test get_html_translation_table() when table is specified as HTML_ENTITIES */\necho \"*** Testing get_html_translation_table() : basic functionality ***\\n\";\necho \"-- with table = HTML_ENTITIES --\\n\";\n$table = HTML_ENTITIES;\n$tt = get_html_translation_table($table, ENT_COMPAT, \"UTF-8\");\nasort($tt);\nvar_dump( $tt );\necho \"-- with table = HTML_SPECIALCHARS --\\n\";\n$table = HTML_SPECIALCHARS;\n$tt = get_html_translation_table($table, ENT_COMPAT, \"UTF-8\");\nasort($tt);\nvar_dump( $tt );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
