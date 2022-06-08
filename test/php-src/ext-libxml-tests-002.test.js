// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/002.phpt
  it("libxml_get_errors()", function () {
    expect(parser.parseCode("<?php\nvar_dump(libxml_use_internal_errors(true));\n$xmlstr = <<< XML\n<?xml version='1.0' standalone='yes'?>\n    <movies>\n        <movie>\n            <titles>PHP: Behind the Parser</title>\n        </movie>\n    </movies>\nXML;\n$doc = simplexml_load_string($xmlstr);\n$xml = explode(\"\\n\", $xmlstr);\nif (!$doc) {\n    $errors = libxml_get_errors();\n    foreach ($errors as $error) {\n        echo display_xml_error($error, $xml);\n    }\n    var_dump(libxml_get_last_error());\n}\nfunction display_xml_error($error, $xml)\n{\n    $return  = $xml[$error->line - 1] . \"\\n\";\n    $return .= str_repeat('-', $error->column) . \"^\\n\";\n    switch ($error->level) {\n        case LIBXML_ERR_WARNING:\n            $return .= \"Warning $error->code: \";\n            break;\n        case LIBXML_ERR_ERROR:\n            $return .= \"Error $error->code: \";\n            break;\n        case LIBXML_ERR_FATAL:\n            $return .= \"Fatal Error $error->code: \";\n            break;\n    }\n    $return .= trim($error->message) . \"\\n  Line: $error->line\" . \"\\n  Column: $error->column\";\n    if ($error->file) {\n        $return .= \"\\n  File: $error->file\";\n    }\n    return \"$return\\n\\n--------------------------------------------\\n\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
