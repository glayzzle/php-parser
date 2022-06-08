// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/010.phpt
  it("SimpleXML: Simple Inheritance", function () {
    expect(parser.parseCode("<?php\nclass simplexml_inherited extends SimpleXMLElement\n{\n}\n$xml =<<<EOF\n<?xml version='1.0'?>\n<!DOCTYPE sxe SYSTEM \"notfound.dtd\">\n<sxe id=\"elem1\">\n <elem1 attr1='first'>\n  <!-- comment -->\n  <elem2>\n   <elem3>\n    <elem4>\n     <?test processing instruction ?>\n    </elem4>\n   </elem3>\n  </elem2>\n </elem1>\n</sxe>\nEOF;\nvar_dump(simplexml_load_string($xml, 'simplexml_inherited'));\n?>")).toMatchSnapshot();
  });
});
