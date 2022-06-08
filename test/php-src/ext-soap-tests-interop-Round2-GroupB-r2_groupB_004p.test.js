// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/GroupB/r2_groupB_004p.phpt
  it("SOAP Interop Round2 groupB 004 (php/direct): echoNestedStruct", function () {
    expect(parser.parseCode("<?php\n$param = (object)array(\n  'varString' => \"arg\",\n  'varInt' => 34,\n  'varFloat' => 123.45,\n  'varStruct' => (object)array(\n    'varString' => \"arg2\",\n    'varInt' => 342,\n    'varFloat' => 123.452,\n  ));\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoNestedStruct\", array($param), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_groupB.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
