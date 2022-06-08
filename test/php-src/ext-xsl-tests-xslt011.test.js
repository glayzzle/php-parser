// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt011.phpt
  it("Test 11: php:function Support", function () {
    expect(parser.parseCode("<?php\nprint \"Test 11: php:function Support\\n\";\n  Class foo {\n       function __construct() {}\n       function __toString() { return \"not a DomNode object\";}\n  }\n$dom = new domDocument();\n  $dom->load(__DIR__.\"/xslt011.xsl\");\n  $proc = new xsltprocessor;\n  $xsl = $proc->importStylesheet($dom);\n  $xml = new DomDocument();\n  $xml->load(__DIR__.\"/xslt011.xml\");\n  $proc->registerPHPFunctions();\n  print $proc->transformToXml($xml);\n  function foobar($id, $secondArg = \"\" ) {\n    if (is_array($id)) {\n        return $id[0]->value . \" - \" . $secondArg;\n    } else {\n        return $id . \" - \" . $secondArg;\n    }\n  }\n  function nodeSet($id = null) {\n      if ($id and is_array($id)) {\n          return $id[0];\n      } else {\n          $dom = new domdocument;\n          $dom->loadXML(\"<root>this is from an external DomDocument</root>\");\n          return $dom->documentElement;\n      }\n  }\n  function nonDomNode() {\n    return  new foo();\n  }\n  class aClass {\n    static function aStaticFunction($id) {\n        return $id;\n    }\n  }\n?>")).toMatchSnapshot();
  });
});
