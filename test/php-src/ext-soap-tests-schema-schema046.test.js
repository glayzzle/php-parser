// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema046.phpt
  it("SOAP XML Schema 46: Extension of complex type", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType2\">\n        <simpleContent>\n            <extension base=\"int\">\n                <attribute name=\"int\" type=\"int\"/>\n            </extension>\n        </simpleContent>\n    </complexType>\n    <complexType name=\"testType\">\n        <complexContent>\n            <extension base=\"tns:testType2\">\n                <attribute name=\"int2\" type=\"int\"/>\n            </extension>\n        </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"_\"=>123.5,\"int\"=>123.5,\"int2\"=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
