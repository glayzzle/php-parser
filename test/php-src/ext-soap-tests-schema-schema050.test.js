// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema050.phpt
  it("SOAP XML Schema 50: Array in complex type (maxOccurs > 1, one value)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <sequence>\n            <element name=\"int\" type=\"int\"/>\n            <element name=\"int2\" type=\"int\" maxOccurs=\"unbounded\"/>\n        </sequence>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"int\"=>123.5,\"int2\"=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
