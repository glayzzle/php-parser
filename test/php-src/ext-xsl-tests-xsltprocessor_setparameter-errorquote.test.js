// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_setparameter-errorquote.phpt
  it("Check xsltprocessor::setparameter error handling with both single and double quotes", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ .'/prepare.inc';\n$proc->importStylesheet($xsl);\n$proc->setParameter('', '', '\"\\'');\n$proc->transformToXml($dom);\n?>")).toMatchSnapshot();
  });
});
