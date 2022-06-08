// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupI/r4_groupI_xsd_023w.phpt
  it("SOAP Interop Round4 GroupI XSD 023 (php/wsdl): echoNestedComplexType", function () {
    expect(parser.parseCode("<?php\nclass SOAPComplexType {\n    function __construct($s, $i, $f) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n    }\n}\nclass SOAPComplexTypeComplexType {\n    function __construct($s, $i, $f, $c) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n        $this->varComplexType = $c;\n    }\n}\n$struct = new SOAPComplexTypeComplexType(\"arg\",34,12.345,new SOAPComplexType(\"arg\",43,54.321));\n$client = new SoapClient(__DIR__.\"/round4_groupI_xsd.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoNestedComplexType(array(\"inputComplexType\"=>$struct));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupI_xsd.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
