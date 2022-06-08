// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug81351.phpt
  it("Bug #81351 (xml_parse may fail, but has no error code)", function () {
    expect(parser.parseCode("<?php\n$xml = <<<XML\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:soap=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n <soap:Body>\n  <X xmlns=\"example.org\">\nXML;\n$parser = xml_parser_create_ns('UTF-8');\n$success = xml_parse($parser, $xml, false);\n$code = xml_get_error_code($parser);\n$error = xml_error_string($code);\necho \"xml_parse returned $success, xml_get_error_code = $code, xml_error_string = $error\\r\\n\";\n$success = xml_parse($parser, 'Y>', true);\n$code = xml_get_error_code($parser);\n$error = xml_error_string($code);\necho \"xml_parse returned $success, xml_get_error_code = $code, xml_error_string = $error\\r\\n\";\n?>")).toMatchSnapshot();
  });
});
