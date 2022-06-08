// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema053.phpt
  it("SOAP XML Schema 52: Array in complex type (maxOccurs > 1, empty array)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <sequence>\n            <element name=\"int\" type=\"int\"/>\n            <element name=\"int2\" type=\"int\" minOccurs=\"0\" maxOccurs=\"unbounded\"/>\n        </sequence>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"int\"=>123.5,\"int2\"=>array()));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
