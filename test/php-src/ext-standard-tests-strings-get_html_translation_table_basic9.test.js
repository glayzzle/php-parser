// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/get_html_translation_table_basic9.phpt
  it("Test get_html_translation_table() function : basic functionality - HTML5 /sjis", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_html_translation_table() : basic functionality/HTML5/SJIS ***\\n\";\necho \"*** Only basic entities supported! ***\\n\";\necho \"-- with table = HTML_ENTITIES, ENT_QUOTES --\\n\";\n$table = HTML_ENTITIES;\n$tt = get_html_translation_table($table, ENT_QUOTES | ENT_HTML5, \"SJIS\");\nasort( $tt );\nvar_dump( count($tt) );\nprint_r( $tt );\necho \"-- with table = HTML_ENTITIES, ENT_COMPAT --\\n\";\n$table = HTML_ENTITIES;\n$tt = get_html_translation_table($table, ENT_COMPAT | ENT_HTML5, \"SJIS\");\nvar_dump( count($tt) );\necho \"-- with table = HTML_ENTITIES, ENT_NOQUOTES --\\n\";\n$table = HTML_ENTITIES;\n$tt = get_html_translation_table($table, ENT_NOQUOTES | ENT_HTML5, \"SJIS\");\nvar_dump( count($tt) );\necho \"-- with table = HTML_SPECIALCHARS, ENT_COMPAT --\\n\";\n$table = HTML_SPECIALCHARS;\n$tt = get_html_translation_table($table, ENT_COMPAT, \"SJIS\");\nasort( $tt );\nvar_dump( count($tt) );\nprint_r( $tt );\necho \"-- with table = HTML_SPECIALCHARS, ENT_QUOTES --\\n\";\n$table = HTML_SPECIALCHARS;\n$tt = get_html_translation_table($table, ENT_QUOTES | ENT_HTML5, \"SJIS\");\nasort( $tt );\nvar_dump( $tt );\necho \"-- with table = HTML_SPECIALCHARS, ENT_NOQUOTES --\\n\";\n$table = HTML_SPECIALCHARS;\n$tt = get_html_translation_table($table, ENT_NOQUOTES | ENT_HTML5, \"SJIS\");\nasort( $tt );\nvar_dump( $tt );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
