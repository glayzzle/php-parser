// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_importStylesheet-invalidparam.phpt
  it("XSLTProcessor::importStylesheet() - Test with invalid stylesheet", function () {
    expect(parser.parseCode("<?php\n$xslt = new XSLTProcessor();\n$dummy = new stdClass();\ntry {\n    var_dump($xslt->importStylesheet($dummy));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
