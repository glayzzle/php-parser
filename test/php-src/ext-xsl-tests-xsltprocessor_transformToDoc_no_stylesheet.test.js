// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_transformToDoc_no_stylesheet.phpt
  it("Calling XSLTProcessor::transformToDoc() without stylesheet", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument('1.0', 'utf-8');\n$xsl = new XSLTProcessor;\ntry {\n    $xsl->transformToDoc($doc);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
