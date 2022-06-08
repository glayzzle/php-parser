// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_removeParameter.phpt
  it("Check xsltprocessor::removeParameter functionality", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ .'/prepare.inc';\n$proc->importStylesheet($xsl);\n$proc->setParameter('', 'key', 'value');\n$proc->removeParameter('', 'key');\nvar_dump($proc->getParameter('', 'key'));\n?>")).toMatchSnapshot();
  });
});
