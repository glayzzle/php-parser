// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupI/r4_groupI_xsd_009w.phpt
  it("SOAP Interop Round4 GroupI XSD 009 (php/wsdl): echoComplexType(minOccur=0)", function () {
    expect(parser.parseCode("<?php\nclass SOAPComplexType {\n    function __construct($s, $i, $f) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n    }\n}\n$struct = new SOAPComplexType('arg',34,325.325);\nunset($struct->varString);\n$client = new SoapClient(__DIR__.\"/round4_groupI_xsd.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoComplexType(array(\"inputComplexType\"=>$struct));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupI_xsd.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
