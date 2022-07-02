// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/get_html_translation_table_basic3.phpt
  it("Test get_html_translation_table() function : basic functionality - table as HTML_SPECIALCHARS", function () {
    expect(parser.parseCode("<?php\n/* test get_html_translation_table() when $table argument is specified as HTML_SPECIALCHARS */\necho \"*** Testing get_html_translation_table() : basic functionality ***\\n\";\n// $table as HTML_SEPCIALCHARS and different quote style\necho \"-- with table = HTML_SPECIALCHARS & quote_style = ENT_COMPAT --\\n\";\n$table = HTML_SPECIALCHARS;\n$quote_style = ENT_COMPAT;\n$tt = get_html_translation_table($table, $quote_style, \"UTF-8\");\nasort( $tt );\nvar_dump( $tt );\necho \"-- with table = HTML_SPECIALCHARS & quote_style = ENT_QUOTES --\\n\";\n$quote_style = ENT_QUOTES;\n$tt = get_html_translation_table($table, $quote_style, \"UTF-8\");\nasort( $tt );\nvar_dump( $tt );\necho \"-- with table = HTML_SPECIALCHARS & quote_style = ENT_NOQUOTES --\\n\";\n$quote_style = ENT_NOQUOTES;\n$tt = get_html_translation_table($table, $quote_style, \"UTF-8\");\nasort( $tt );\nvar_dump( $tt );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
