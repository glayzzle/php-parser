// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/GroupB/r2_groupB_002s.phpt
  it("SOAP Interop Round2 groupB 002 (soap/direct): echoSimpleTypesAsStruct", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoSimpleTypesAsStruct\", array(\n  new SoapParam(new SoapVar(\"arg\",XSD_STRING), \"inputString\"),\n  new SoapParam(new SoapVar(34,XSD_INT), \"inputInteger\"),\n  new SoapParam(new SoapVar(34.345,XSD_FLOAT), \"inputFloat\")), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_groupB.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
