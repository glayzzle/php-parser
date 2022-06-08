// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/GroupB/r2_groupB_005s.phpt
  it("SOAP Interop Round2 groupB 005 (soap/direct): echoNestedArray", function () {
    expect(parser.parseCode("<?php\n$param = new SoapParam(new SoapVar(array(\n    new SoapVar(\"arg\", XSD_STRING, null, null, \"varString\"),\n    new SoapVar(34, XSD_INT, null, null, \"varInt\"),\n    new SoapVar(325.325, XSD_FLOAT, null, null, \"varFloat\"),\n    new SoapVar(array(\n        new SoapVar(\"red\", XSD_STRING),\n        new SoapVar(\"blue\", XSD_STRING),\n        new SoapVar(\"green\", XSD_STRING),\n    ), SOAP_ENC_ARRAY, \"ArrayOfString\", \"http://soapinterop.org/xsd\", 'varArray')\n  ), SOAP_ENC_OBJECT, \"SOAPArrayStruct\", \"http://soapinterop.org/xsd\"), \"inputStruct\");\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoNestedArray\", array($param), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_groupB.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
