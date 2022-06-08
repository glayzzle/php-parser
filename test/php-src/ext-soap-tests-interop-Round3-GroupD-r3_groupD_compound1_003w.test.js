// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round3/GroupD/r3_groupD_compound1_003w.phpt
  it("SOAP Interop Round3 GroupD Compound1 003 (php/wsdl): echoDocument", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round3_groupD_compound1.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoDocument((object)array(\"_\"=>\"Test Document Here\",\"ID\"=>1));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round3_groupD_compound1.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
