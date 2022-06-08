// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/Base/r2_base_011s.phpt
  it("SOAP Interop Round2 base 011 (soap/direct): echoIntegerArray", function () {
    expect(parser.parseCode("<?php\n$param =  new SoapParam(new SoapVar(array(\n    new SoapVar(1,XSD_INT),\n    new SoapVar(234324324,XSD_INT),\n    new SoapVar(2,XSD_INT)\n  ), SOAP_ENC_ARRAY, \"ArrayOfint\",\"http://soapinterop.org/xsd\"), \"inputIntegerArray\");\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoIntegerArray\", array($param), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_base.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
