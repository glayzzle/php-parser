// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema033.phpt
  it("SOAP XML Schema 33: Nested complex types", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType2\">\n        <sequence>\n            <element name=\"int\" type=\"int\"/>\n        </sequence>\n    </complexType>\n    <complexType name=\"testType\">\n        <sequence>\n            <element name=\"int\" type=\"int\"/>\n            <element name=\"nest\" type=\"tns:testType2\"/>\n        </sequence>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"int\"=>123.5,\"nest\"=>array(\"int\"=>123.5)));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
