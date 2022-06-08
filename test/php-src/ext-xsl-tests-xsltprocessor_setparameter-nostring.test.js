// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_setparameter-nostring.phpt
  it("Check xsltprocessor::setparameter error handling with no-string", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ .'/prepare.inc';\n$proc->importStylesheet($xsl);\ntry {\n    $proc->setParameter('', array(4, 'abc'));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$proc->transformToXml($dom);\n?>")).toMatchSnapshot();
  });
});
