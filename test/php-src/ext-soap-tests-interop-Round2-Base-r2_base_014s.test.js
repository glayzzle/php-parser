// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/Base/r2_base_014s.phpt
  it("SOAP Interop Round2 base 014 (soap/direct): echoStruct", function () {
    expect(parser.parseCode("<?php\n$param = new SoapParam(new SoapVar(array(\n        new SoapVar('arg', XSD_STRING, null, null, 'varString'),\n        new SoapVar('34',  XSD_INT, null, null, 'varInt'),\n        new SoapVar('325.325',  XSD_FLOAT, null, null, 'varFloat')\n  ),SOAP_ENC_OBJECT,\"SOAPStruct\",\"http://soapinterop.org/xsd\"), \"inputStruct\");\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoStruct\", array($param), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_base.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
