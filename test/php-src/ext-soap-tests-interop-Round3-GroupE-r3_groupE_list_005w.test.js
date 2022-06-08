// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round3/GroupE/r3_groupE_list_005w.phpt
  it("SOAP Interop Round3 GroupE List 005 (php/wsdl): echoLinkedList (cyclic)", function () {
    expect(parser.parseCode("<?php\nclass SOAPList {\n    function __construct($s, $i, $c) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->child = $c;\n    }\n}\n$struct = new SOAPList('arg1',1,new SOAPList('arg2',2,new SOAPList('arg3',3,NULL)));\n$struct->child->child->child = $struct;\n$client = new SoapClient(__DIR__.\"/round3_groupE_list.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoLinkedList($struct);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round3_groupE_list.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
