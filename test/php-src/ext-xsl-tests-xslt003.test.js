// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt003.phpt
  it("Test 3: Using Parameters", function () {
    expect(parser.parseCode("<?php\necho \"Test 3: Using Parameters\";\ninclude(\"prepare.inc\");\n$proc->importStylesheet($xsl);\n$proc->setParameter( \"\", \"foo\",\"hello world\");\nprint \"\\n\";\nprint $proc->transformToXml($dom);\nprint \"\\n\";")).toMatchSnapshot();
  });
});
