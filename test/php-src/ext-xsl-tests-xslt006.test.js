// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt006.phpt
  it("Test 6: Transform To Doc", function () {
    expect(parser.parseCode("<?php\necho \"Test 6: Transform To Doc\";\ninclude(\"prepare.inc\");\n$proc->importStylesheet($xsl);\nprint \"\\n\";\n$doc = $proc->transformToDoc($dom);\nprint $doc->saveXML();\nprint \"\\n\";")).toMatchSnapshot();
  });
});
