// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/Base/r2_base_008s.phpt
  it("SOAP Interop Round2 base 008 (soap/direct): echoStringArray(empty)", function () {
    expect(parser.parseCode("<?php\n$param =  new SoapParam(new SoapVar(array(\n  ), SOAP_ENC_ARRAY, \"ArrayOfstring\",\"http://soapinterop.org/xsd\"), \"inputStringArray\");\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoStringArray\", array($param), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_base.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
