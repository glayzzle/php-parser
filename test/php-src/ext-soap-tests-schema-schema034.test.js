// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema034.phpt
  it("SOAP XML Schema 34: Nested complex types (element ref)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <element name=\"testType2\" type=\"tns:testType2\"/>\n    <complexType name=\"testType2\">\n        <sequence>\n            <element name=\"int\" type=\"int\"/>\n        </sequence>\n    </complexType>\n    <complexType name=\"testType\">\n        <sequence>\n            <element name=\"int\" type=\"int\"/>\n            <element ref=\"tns:testType2\"/>\n        </sequence>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"int\"=>123.5,\"testType2\"=>array(\"int\"=>123.5)));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
