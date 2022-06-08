// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt012.phpt
  it("Test 12: Using Associative Array of Parameters", function () {
    expect(parser.parseCode("<?php\necho \"Test 12: Using Associative Array of Parameters\";\n$dom = new domDocument;\n$dom->load(__DIR__.\"/xslt.xml\");\nif(!$dom) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\n$xsl = new domDocument;\n$xsl->load(__DIR__.\"/xslt012.xsl\");\nif(!$xsl) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\n$proc = new xsltprocessor;\nif(!$proc) {\n  echo \"Error while making xsltprocessor object\\n\";\n  exit;\n}\n$proc->importStylesheet($xsl);\n$parameters = Array(\n                    'foo' => 'barbar',\n                    'foo1' => 'test',\n                    );\n$proc->setParameter( \"\", $parameters);\nprint \"\\n\";\nprint $proc->transformToXml($dom);\nprint \"\\n\";")).toMatchSnapshot();
  });
});
