// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round3/GroupD/r3_groupD_compound1_001w.phpt
  it("SOAP Interop Round3 GroupD Compound1 001 (php/wsdl): echoPerson", function () {
    expect(parser.parseCode("<?php\nclass Person {\n    function __construct($a=NULL, $i=NULL, $n=NULL, $m=NULL) {\n        $this->Age = $a;\n        $this->ID = $i;\n        $this->Name = $n;\n        $this->Male = $m;\n    }\n}\n$person = new Person(32,12345,'Shane',TRUE);\n$client = new SoapClient(__DIR__.\"/round3_groupD_compound1.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoPerson($person);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round3_groupD_compound1.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
