// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema047.phpt
  it("SOAP XML Schema 47: Extension of complex type (2)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType2\">\n        <sequence>\n            <element name=\"int\" type=\"int\"/>\n        </sequence>\n    </complexType>\n    <complexType name=\"testType\">\n        <complexContent>\n            <extension base=\"tns:testType2\">\n                <attribute name=\"int2\" type=\"int\"/>\n            </extension>\n        </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"_\"=>123.5,\"int\"=>123.5,\"int2\"=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
