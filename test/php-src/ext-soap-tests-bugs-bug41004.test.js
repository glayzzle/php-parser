// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug41004.phpt
  it("Bug #41004 (minOccurs=\"0\" and null class member variable)", function () {
    expect(parser.parseCode("<?php\nini_set('soap.wsdl_cache_enabled', false);\nclass EchoBean{\n    public $mandatoryElement;\n    public $optionalElement;\n}\nclass EchoRequest{\n    public $in;\n}\nclass EchoResponse{\n    public $out;\n}\n$wsdl = __DIR__.\"/bug41004.wsdl\";\n$classmap = array('EchoBean'=>'EchoBean','echo'=>'EchoRequest','echoResponse'=>'EchoResponse');\n$client = new SoapClient($wsdl, array('location'=>'test://',\"classmap\" => $classmap, 'exceptions'=>0, 'trace'=>1));\n$echo=new EchoRequest();\n$in=new EchoBean();\n$in->mandatoryElement=\"REV\";\n$in->optionalElement=NULL;\n$echo->in=$in;\n$client->echo($echo);\necho $client->__getLastRequest();\n?>")).toMatchSnapshot();
  });
});
