// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/GroupB/r2_groupB_003s.phpt
  it("SOAP Interop Round2 groupB 003 (soap/direct): echo2DStringArray", function () {
    expect(parser.parseCode("<?php\n$param = new SoapParam(new SoapVar(array(\n    new SoapVar(array(\n      new SoapVar('row0col0', XSD_STRING),\n      new SoapVar('row0col1', XSD_STRING),\n      new SoapVar('row0col2', XSD_STRING)\n    ), SOAP_ENC_ARRAY),\n    new SoapVar(array(\n      new SoapVar('row1col0', XSD_STRING),\n      new SoapVar('row1col1', XSD_STRING),\n      new SoapVar('row1col2', XSD_STRING)\n    ), SOAP_ENC_ARRAY)\n  ), SOAP_ENC_ARRAY, \"ArrayOfString2D\", \"http://soapinterop.org/xsd\"),\"input2DStringArray\");\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echo2DStringArray\", array($param), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_groupB.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
