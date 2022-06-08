// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug30994.phpt
  it("Bug #30994 (SOAP server unable to handle request with references)", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"\n    xmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\"\n    xmlns:tns=\"http://spock/kunta/kunta\"\n    xmlns:types=\"http://spock/kunta/kunta/encodedTypes\"\n    xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n    xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n<soap:Body\nsoap:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\">\n    <q1:bassCall xmlns:q1=\"http://spock/bass/types/kunta\">\n        <system xsi:type=\"xsd:string\">XXX</system>\n        <function xsi:type=\"xsd:string\">TASKTEST</function>\n        <parameter href=\"#id1\" />\n    </q1:bassCall>\n    <soapenc:Array id=\"id1\" soapenc:arrayType=\"tns:Item[1]\">\n        <Item href=\"#id2\" />\n    </soapenc:Array>\n    <tns:Item id=\"id2\" xsi:type=\"tns:Item\">\n        <key xsi:type=\"xsd:string\">ABCabc123</key>\n        <val xsi:type=\"xsd:string\">123456</val>\n    </tns:Item>\n</soap:Body>\n</soap:Envelope>\nEOF;\nfunction bassCall() {\n  return \"ok\";\n}\n$x = new SoapServer(NULL, array(\"uri\"=>\"http://spock/kunta/kunta\"));\n$x->addFunction(\"bassCall\");\n$x->handle($HTTP_RAW_POST_DATA);\n?>")).toMatchSnapshot();
  });
});
