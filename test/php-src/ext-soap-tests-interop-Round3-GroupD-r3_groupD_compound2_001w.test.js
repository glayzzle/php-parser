// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round3/GroupD/r3_groupD_compound2_001w.phpt
  it("SOAP Interop Round3 GroupD Compound2 001 (php/wsdl): echoEmployee", function () {
    expect(parser.parseCode("<?php\nclass Person {\n    function __construct($a=NULL, $i=NULL, $n=NULL, $m=NULL) {\n        $this->Age = $a;\n        $this->ID = $i;\n        $this->Name = $n;\n        $this->Male = $m;\n    }\n}\nclass Employee {\n    function __construct($person=NULL,$id=NULL,$salary=NULL) {\n        $this->person = $person;\n        $this->ID = $id;\n        $this->salary = $salary;\n    }\n}\n$person = new Person(32,12345,'Shane',TRUE);\n$employee = new Employee($person,12345,1000000.00);\n$client = new SoapClient(__DIR__.\"/round3_groupD_compound2.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoEmployee($employee);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round3_groupD_compound2.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
