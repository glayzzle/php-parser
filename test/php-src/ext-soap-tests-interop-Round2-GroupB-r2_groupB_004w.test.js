// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/GroupB/r2_groupB_004w.phpt
  it("SOAP Interop Round2 groupB 004 (php/wsdl): echoNestedStruct", function () {
    expect(parser.parseCode("<?php\n$param = (object)array(\n  'varString' => \"arg\",\n  'varInt' => 34,\n  'varFloat' => 123.45,\n  'varStruct' => (object)array(\n    'varString' => \"arg2\",\n    'varInt' => 342,\n    'varFloat' => 123.452,\n  ));\n$client = new SoapClient(__DIR__.\"/round2_groupB.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoNestedStruct($param);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_groupB.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
