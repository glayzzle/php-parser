// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/007.phpt
  it("SimpleXML: Attributes", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version='1.0'?>\n<!DOCTYPE sxe SYSTEM \"notfound.dtd\">\n<sxe id=\"elem1\">\n <elem1 attr1='first'>\n  <!-- comment -->\n  <elem2>\n   <elem3>\n    <elem4>\n     <?test processing instruction ?>\n    </elem4>\n   </elem3>\n  </elem2>\n </elem1>\n</sxe>\nEOF;\n$sxe = simplexml_load_string($xml);\necho \"===Property===\\n\";\nvar_dump($sxe->elem1);\necho \"===Array===\\n\";\nvar_dump($sxe['id']);\nvar_dump($sxe->elem1['attr1']);\necho \"===Set===\\n\";\n$sxe['id'] = \"Changed1\";\nvar_dump($sxe['id']);\n$sxe->elem1['attr1'] = 12;\nvar_dump($sxe->elem1['attr1']);\necho \"===Unset===\\n\";\nunset($sxe['id']);\nvar_dump($sxe['id']);\nunset($sxe->elem1['attr1']);\nvar_dump($sxe->elem1['attr1']);\necho \"===Misc.===\\n\";\n$a = 4;\nvar_dump($a);\n$dummy = $sxe->elem1[$a];\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
