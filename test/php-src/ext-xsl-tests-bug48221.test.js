// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/bug48221.phpt
  it("Bug #48221 (memory leak when passing invalid xslt parameter)", function () {
    expect(parser.parseCode("<?php\ninclude('prepare.inc');\n$proc->importStylesheet($xsl);\n$proc->setParameter('', '', '\"\\'');\n$proc->transformToXml($dom);\n?>")).toMatchSnapshot();
  });
});
