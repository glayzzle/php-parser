// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/get_html_translation_table_basic8.phpt
  it("Test get_html_translation_table() function : basic functionality - XML 1.0", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_html_translation_table() : basic functionality/XML 1.0 ***\\n\";\necho \"-- with table = HTML_ENTITIES, ENT_QUOTES --\\n\";\n$table = HTML_ENTITIES;\n$tt = get_html_translation_table($table, ENT_QUOTES | ENT_XML1, \"UTF-8\");\nasort( $tt );\nvar_dump( count($tt) );\nprint_r( $tt );\necho \"-- with table = HTML_ENTITIES, ENT_COMPAT --\\n\";\n$table = HTML_ENTITIES;\n$tt = get_html_translation_table($table, ENT_COMPAT | ENT_XML1, \"UTF-8\");\nvar_dump( count($tt) );\necho \"-- with table = HTML_ENTITIES, ENT_NOQUOTES --\\n\";\n$table = HTML_ENTITIES;\n$tt = get_html_translation_table($table, ENT_NOQUOTES | ENT_XML1, \"UTF-8\");\nvar_dump( count($tt) );\necho \"-- with table = HTML_SPECIALCHARS, ENT_COMPAT --\\n\";\n$table = HTML_SPECIALCHARS;\n$tt = get_html_translation_table($table, ENT_COMPAT, \"UTF-8\");\nasort( $tt );\nvar_dump( count($tt) );\nprint_r( $tt );\necho \"-- with table = HTML_SPECIALCHARS, ENT_QUOTES --\\n\";\n$table = HTML_SPECIALCHARS;\n$tt = get_html_translation_table($table, ENT_QUOTES | ENT_XML1, \"UTF-8\");\nasort( $tt );\nvar_dump( $tt );\necho \"-- with table = HTML_SPECIALCHARS, ENT_NOQUOTES --\\n\";\n$table = HTML_SPECIALCHARS;\n$tt = get_html_translation_table($table, ENT_NOQUOTES | ENT_XML1, \"UTF-8\");\nasort( $tt );\nvar_dump( $tt );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
