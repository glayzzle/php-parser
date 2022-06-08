// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug40609.phpt
  it("Bug #40609 (Segfaults when using more than one SoapVar in a request)", function () {
    expect(parser.parseCode("<?php\nini_set(\"soap.wsdl_cache_enabled\", 0);\n$c = new SoapClient(__DIR__.\"/bug40609.wsdl\", array('trace' => 1, 'exceptions' => 0));\n$c->update(array('symbol' => new SoapVar(\"<symbol>MSFT</symbol>\", XSD_ANYXML),\n                 'price' =>  new SoapVar(\"<price>1000</price>\", XSD_ANYXML)));\necho $c->__getLastRequest();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
