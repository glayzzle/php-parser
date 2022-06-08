// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/030.phpt
  it("SimpleXML: isset and unset by offset", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<root s:att1=\"b\" att1=\"a\"\n      xmlns:s=\"urn::test\" xmlns:t=\"urn::test-t\">\n   <child1>test</child1>\n   <child1>test 2</child1>\n   <s:child3 />\n</root>\nEOF;\n$sxe = simplexml_load_string($xml);\necho $sxe->child1[0].\"\\n\";\necho $sxe->child1[1].\"\\n\\n\";\nvar_dump(isset($sxe->child1[1]));\nunset($sxe->child1[1]);\nvar_dump(isset($sxe->child1[1]));\necho \"\\n\";\n$atts = $sxe->attributes(\"urn::test\");\nvar_dump(isset($atts[0]));\nunset($atts[0]);\nvar_dump(isset($atts[0]));\nvar_dump(isset($atts[TRUE]));\n?>")).toMatchSnapshot();
  });
});
