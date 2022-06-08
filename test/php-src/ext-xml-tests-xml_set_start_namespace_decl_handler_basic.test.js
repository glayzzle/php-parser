// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml_set_start_namespace_decl_handler_basic.phpt
  it("Test xml_set_start_namespace_decl_handler function: basic", function () {
    expect(parser.parseCode("<?php\n$xml = <<<HERE\n<aw1:book xmlns:aw1=\"http://www.somewhere.com/namespace1\"\n          xmlns:aw2=\"file:/DTD/somewhere.dtd\">\n<aw1:para>Any old text.</aw1:para>\n<aw2:td>An HTML table cell.</aw2:td>\n</aw1:book>\nHERE;\n$parser = xml_parser_create_ns();\nxml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0);\nvar_dump(xml_set_start_namespace_decl_handler( $parser, \"Namespace_Start_Handler\" ));\nvar_dump(xml_set_end_namespace_decl_handler( $parser, \"Namespace_End_Handler\" ));\nxml_parse( $parser, $xml, true);\nxml_parser_free( $parser );\necho \"Done\\n\";\nfunction Namespace_Start_Handler( $parser, $prefix, $uri ) {\n    echo \"Namespace_Start_Handler called\\n\";\n    echo \"...Prefix: \". $prefix . \"\\n\";\n    echo \"...Uri: \". $uri . \"\\n\";\n}\nfunction Namespace_End_Handler($parser, $prefix) {\n    echo \"Namespace_End_Handler called\\n\";\n    echo \"...Prefix: \". $prefix . \"\\n\\n\";\n}\nfunction DefaultHandler( $parser, $data ) {\n   print( 'DefaultHandler Called<br/>' );\n}\n?>")).toMatchSnapshot();
  });
});
