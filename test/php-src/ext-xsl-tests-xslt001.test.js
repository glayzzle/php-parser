// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt001.phpt
  it("Test 1: Transform To XML String", function () {
    expect(parser.parseCode("<?php\necho \"Test 1: Transform To XML String\";\ninclude(\"prepare.inc\");\n$proc->importStylesheet($xsl);\nprint \"\\n\";\nprint $proc->transformToXml($dom);\nprint \"\\n\";")).toMatchSnapshot();
  });
});
