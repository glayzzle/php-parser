// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema036.phpt
  it("SOAP XML Schema 36: Nested complex types (inline)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <sequence>\n            <element name=\"int\" type=\"int\"/>\n            <element name=\"testType2\">\n                <complexType>\n                    <sequence>\n                        <element name=\"int\" type=\"int\"/>\n                    </sequence>\n                </complexType>\n            </element>\n        </sequence>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"int\"=>123.5,\"testType2\"=>array(\"int\"=>123.5)));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
