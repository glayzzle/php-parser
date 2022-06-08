// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug41566.phpt
  it("Bug #41566 (SOAP Server not properly generating href attributes)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n  $aUser = new User();\n  $aUser->sName = 'newUser';\n  $aUsers = Array();\n  $aUsers[] = $aUser;\n  $aUsers[] = $aUser;\n  $aUsers[] = $aUser;\n  $aUsers[] = $aUser;\n  return $aUsers;\n}\n/* Simple User definition */\nClass User {\n  /** @var string */\n  public $sName;\n}\n$server = new soapserver(null,array('uri'=>\"http://testuri.org\", 'soap_version'=>SOAP_1_2));\n$server->addfunction(\"test\");\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<SOAP-ENV:Envelope\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\n  xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n  xmlns:si=\"http://soapinterop.org/xsd\">\n  <SOAP-ENV:Body>\n    <ns1:test xmlns:ns1=\"http://testuri.org\" />\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\nob_start();\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\"\n  xmlns:ns1=\"http://testuri.org\"\n  xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n  xmlns:enc=\"http://www.w3.org/2003/05/soap-encoding\">\n  <env:Body>\n    <ns1:test env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\"/>\n  </env:Body>\n</env:Envelope>\nEOF;\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\nob_flush();\n?>")).toMatchSnapshot();
  });
});
