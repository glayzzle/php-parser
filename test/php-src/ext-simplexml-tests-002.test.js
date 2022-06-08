// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/002.phpt
  it("SimpleXML: clone", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version='1.0'?>\n<!DOCTYPE sxe SYSTEM \"notfound.dtd\">\n<sxe id=\"elem1\">\n <elem1 attr1='first'>\n  <!-- comment -->\n  <elem2>\n   <elem3>\n    <elem4>\n     <?test processing instruction ?>\n    </elem4>\n   </elem3>\n  </elem2>\n </elem1>\n</sxe>\nEOF;\n$sxe = simplexml_load_string($xml);\n$copy = clone $sxe;\nvar_dump($copy);\n?>")).toMatchSnapshot();
  });
});
