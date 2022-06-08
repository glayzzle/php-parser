// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupI/r4_groupI_xsd_015w.phpt
  it("SOAP Interop Round4 GroupI XSD 015 (php/wsdl): echoComplexTypeMultiOccurs(nil)", function () {
    expect(parser.parseCode("<?php\nclass SOAPComplexType {\n    function __construct($s, $i, $f) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n    }\n}\n$struct1 = new SOAPComplexType('arg',34,325.325);\n$struct2 = new SOAPComplexType('arg',34,325.325);\n$client = new SoapClient(__DIR__.\"/round4_groupI_xsd.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoComplexTypeMultiOccurs(array(\"inputComplexTypeMultiOccurs\"=>array($struct1,null,$struct2)));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupI_xsd.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
