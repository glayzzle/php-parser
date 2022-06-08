// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_removeParameter-invalidparam.phpt
  it("Check xsltprocessor::removeParameter with invalid parameter", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ .'/prepare.inc';\n$proc->importStylesheet($xsl);\nvar_dump($proc->removeParameter('', 'doesnotexist'));\n?>")).toMatchSnapshot();
  });
});
