// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/003.phpt
  it("libxml_use_internal_errors() memory leaks", function () {
    expect(parser.parseCode("<?php\nvar_dump(libxml_use_internal_errors(true));\n$xmlstr = <<< XML\n<?xml version='1.0' standalone='yes'?>\n    <movies>\n        <movie>\n            <titles>PHP: Behind the Parser</title>\n        </movie>\n    </movies>\nXML;\nsimplexml_load_string($xmlstr);\n// test memleaks here\nvar_dump(libxml_use_internal_errors(false));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
