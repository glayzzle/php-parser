// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/get_html_translation_table_basic4.phpt
  it("Test get_html_translation_table() function : basic functionality - charset WINDOWS-1252", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_html_translation_table() : basic functionality/Windows-1252 ***\\n\";\necho \"-- with table = HTML_ENTITIES --\\n\";\n$table = HTML_ENTITIES;\n$tt = get_html_translation_table($table, ENT_COMPAT, \"WINDOWS-1252\");\nasort( $tt );\nvar_dump( $tt );\necho \"-- with table = HTML_SPECIALCHARS --\\n\";\n$table = HTML_SPECIALCHARS;\n$tt = get_html_translation_table($table, ENT_COMPAT, \"WINDOWS-1252\");\nasort( $tt );\nvar_dump( $tt );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
