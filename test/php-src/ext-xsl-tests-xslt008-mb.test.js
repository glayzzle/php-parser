// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt008-mb.phpt
  it("Test 8: Stream Wrapper Includes", function () {
    expect(parser.parseCode("<?php\necho \"Test 8: Stream Wrapper Includes \";\ninclude(\"prepare.inc\");\n$xsl = new domDocument;\n$xsl->load(__DIR__.\"/私はガラスを食べられますstreamsinclude.xsl\");\nif(!$xsl) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\nchdir(__DIR__);\n$proc->importStylesheet($xsl);\nprint \"\\n\";\nprint $proc->transformToXML($dom);")).toMatchSnapshot();
  });
});
