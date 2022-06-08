// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/GroupB/r2_groupB_005w.phpt
  it("SOAP Interop Round2 groupB 005 (php/wsdl): echoNestedArray", function () {
    expect(parser.parseCode("<?php\n$param = (object)array(\n  'varString'=>'arg',\n  'varInt'=>34,\n  'varFloat'=>325.325,\n  'varArray' => array('red','blue','green'));\n$client = new SoapClient(__DIR__.\"/round2_groupB.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoNestedArray($param);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_groupB.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
