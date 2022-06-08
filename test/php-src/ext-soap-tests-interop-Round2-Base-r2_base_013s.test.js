// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/Base/r2_base_013s.phpt
  it("SOAP Interop Round2 base 013 (soap/direct): echoFloatArray", function () {
    expect(parser.parseCode("<?php\n$param =  new SoapParam(new SoapVar(array(\n    new SoapVar(1.3223, XSD_FLOAT),\n    new SoapVar(34.2, XSD_FLOAT),\n    new SoapVar(325.325, XSD_FLOAT)\n  ), SOAP_ENC_ARRAY, \"ArrayOffloat\",\"http://soapinterop.org/xsd\"), \"inputFloatArray\");\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoFloatArray\", array($param), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_base.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
