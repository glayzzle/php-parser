// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_hasExsltSupport_wrongparam_001.phpt
  it("Check XSLTProcessor::hasExsltSupport() with 1 parameter", function () {
    expect(parser.parseCode("<?php\n$proc = new XSLTProcessor();\ntry {\n    $proc->hasExsltSupport('stringValue');\n} catch (ArgumentCountError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
