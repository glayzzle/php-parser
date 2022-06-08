// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug37013.phpt
  it("Bug #37013 (server hangs when returning circular object references)", function () {
    expect(parser.parseCode("<?php\n$request = <<<REQUEST\n<?xml version=\"1.0\" encoding=\"UTF-8\"?><soapenv:Envelope\nxmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n<soapenv:Body>\n<ns2:getThingWithParent\n soapenv:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n xmlns:ns2=\"urn:test.soapserver#\"/>\n</soapenv:Body>\n</soapenv:Envelope>\nREQUEST;\nclass ThingWithParent\n{\n var $parent;\n var $id;\n var $children;\n function __construct( $id, $parent ) {\n  $this->id = $id;\n  $this->parent = $parent;\n }\n}\nclass MultiRefTest {\n public function getThingWithParent() {\n  $p = new ThingWithParent( 1, null );\n  $p2 = new ThingWithParent( 2, $p );\n  $p3 = new ThingWithParent( 3, $p );\n  $p->children = array( $p2, $p3 );\n  return $p2;\n }\n}\n$server = new SoapServer(__DIR__.\"/bug37013.wsdl\");\n$server->setClass( \"MultiRefTest\");\n$server->handle( $request );\n?>")).toMatchSnapshot();
  });
});
