// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug66112.phpt
  it("Bug #66112 (Use after free condition in SOAP extension)", function () {
    expect(parser.parseCode("<?php\ndefine('WSDL', __DIR__.\"/bug66112.wsdl\");\nfunction Mist($p) {\n    $client=new soapclient(WSDL, array('typemap'=>array(array(\"type_ns\"=>\"uri:mist\", \"type_name\"=>\"A\"))));\n    try{\n        $client->Mist(array(\"XX\"=>\"xx\"));\n    }catch(SoapFault $x){\n    }\n    return array(\"A\"=>\"ABC\",\"B\"=>\"sss\");\n}\n$s = new SoapServer(WSDL, array('typemap'=>array(array(\"type_ns\"=>\"uri:mist\", \"type_name\"=>\"A\"))));\n$s->addFunction(\"Mist\");\n$_SERVER[\"REQUEST_METHOD\"] = \"POST\";\n$HTTP_RAW_POST_DATA=<<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:uri=\"uri:mist\">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <uri:Request><uri:A>XXX</uri:A><uri:B>yyy</uri:B></uri:Request>\n   </soapenv:Body>\n</soapenv:Envelope>\nEOF;\n$s->handle($HTTP_RAW_POST_DATA);\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
