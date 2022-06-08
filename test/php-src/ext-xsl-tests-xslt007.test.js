// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt007.phpt
  it("Test 7: Transform To Uri", function () {
    expect(parser.parseCode("<?php\necho \"Test 7: Transform To Uri\";\ninclude(\"prepare.inc\");\n$proc->importStylesheet($xsl);\nprint \"\\n\";\n$doc = $proc->transformToUri($dom, \"file://\".__DIR__.\"/out.xml\");\nprint file_get_contents(__DIR__.\"/out.xml\");\nunlink(__DIR__.\"/out.xml\");\nprint \"\\n\";")).toMatchSnapshot();
  });
});
