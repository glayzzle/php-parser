// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/get_html_translation_table_basic2.phpt
  it("Test get_html_translation_table() function : basic functionality - table as HTML_ENTITIES & diff quote_style", function () {
    expect(parser.parseCode("<?php\n/* Test get_html_translation_table() when table is specified as HTML_ENTITIES */\n//set locale to en_US.UTF-8\nsetlocale(LC_ALL, \"en_US.UTF-8\");\necho \"*** Testing get_html_translation_table() : basic functionality ***\\n\";\n// Calling get_html_translation_table() with all arguments\n// $table as HTML_ENTITIES and different quote style\necho \"-- with table = HTML_ENTITIES & quote_style = ENT_COMPAT --\\n\";\n$table = HTML_ENTITIES;\n$quote_style = ENT_COMPAT;\n$tt = get_html_translation_table($table, $quote_style, \"UTF-8\");\nasort( $tt );\nvar_dump( $tt );\necho \"-- with table = HTML_ENTITIES & quote_style = ENT_QUOTES --\\n\";\n$quote_style = ENT_QUOTES;\n$tt = get_html_translation_table($table, $quote_style, \"UTF-8\");\nasort( $tt );\nvar_dump( $tt );\necho \"-- with table = HTML_ENTITIES & quote_style = ENT_NOQUOTES --\\n\";\n$quote_style = ENT_NOQUOTES;\n$tt = get_html_translation_table($table, $quote_style, \"UTF-8\");\nasort( $tt );\nvar_dump( $tt );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
