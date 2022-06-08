// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/GroupB/r2_groupB_005p.phpt
  it("SOAP Interop Round2 groupB 005 (php/direct): echoNestedArray", function () {
    expect(parser.parseCode("<?php\n$param = (object)array(\n  'varString'=>'arg',\n  'varInt'=>34,\n  'varFloat'=>325.325,\n  'varArray' => array('red','blue','green'));\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoNestedArray\", array($param), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_groupB.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
