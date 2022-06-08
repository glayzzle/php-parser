// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/profile12.phpt
  it("SimpleXML [profile]: Accessing namespaced root and non namespaced children", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope\nxmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\nxmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n>\n<soap:Body>\n<businessList foo=\"bar\">\n<businessInfo businessKey=\"bla\"/>\n</businessList>\n</soap:Body>\n</soap:Envelope>\nEOF;\n$sxe = simplexml_load_string($xml);\n$nsl = $sxe->getNamespaces();\nvar_dump($nsl);\n$sxe = simplexml_load_string($xml, NULL, 0, $nsl['soap']);\nvar_dump($sxe->Body);\nvar_dump($sxe->Body->children(''));\nvar_dump($sxe->Body->children('')->businessList);\n?>")).toMatchSnapshot();
  });
});
