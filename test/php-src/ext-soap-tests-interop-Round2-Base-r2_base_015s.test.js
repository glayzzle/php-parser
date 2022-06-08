// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/Base/r2_base_015s.phpt
  it("SOAP Interop Round2 base 015 (soap/direct): echoStructArray", function () {
    expect(parser.parseCode("<?php\nclass SOAPStruct {\n    function __construct($s, $i, $f) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n    }\n}\n$struct1 = new SoapVar(array(\n        new SoapVar('arg', XSD_STRING, null, null, 'varString'),\n        new SoapVar('34',  XSD_INT, null, null, 'varInt'),\n        new SoapVar('325.325',  XSD_FLOAT, null, null, 'varFloat')\n  ),SOAP_ENC_OBJECT,\"SOAPStruct\",\"http://soapinterop.org/xsd\");\n$struct2 = new SoapVar(array(\n        new SoapVar('arg', XSD_STRING, null, null, 'varString'),\n        new SoapVar('34',  XSD_INT, null, null, 'varInt'),\n        new SoapVar('325.325',  XSD_FLOAT, null, null, 'varFloat')\n  ),SOAP_ENC_OBJECT,\"SOAPStruct\",\"http://soapinterop.org/xsd\");\n$param =   new SoapParam(new SoapVar(array(\n    $struct1,\n    $struct2\n  ),SOAP_ENC_ARRAY,\"ArrayOfSOAPStruct\",\"http://soapinterop.org/xsd\"), \"inputStructArray\");\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoStructArray\", array($param), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_base.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
