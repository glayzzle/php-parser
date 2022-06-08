// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/sxe_005.phpt
  it("SPL: SimpleXMLIterator and overridden count()", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version='1.0'?>\n<sxe>\n <elem1/>\n <elem2/>\n <elem2/>\n</sxe>\nEOF;\nclass SXETest extends SimpleXMLIterator\n{\n    function count(): int\n    {\n        echo __METHOD__ . \"\\n\";\n        return parent::count();\n    }\n}\n$sxe = new SXETest($xml);\nvar_dump(count($sxe));\nvar_dump(count($sxe->elem1));\nvar_dump(count($sxe->elem2));\n?>")).toMatchSnapshot();
  });
});
