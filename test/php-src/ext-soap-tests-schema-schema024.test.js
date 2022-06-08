// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema024.phpt
  it("SOAP XML Schema 24: SOAP 1.1 Array (second way)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <complexContent>\n            <restriction base=\"SOAP-ENC:Array\">\n                <all>\n                    <element name=\"x_item\" type=\"int\" maxOccurs=\"unbounded\"/>\n            </all>\n        </restriction>\n    </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',array(123,123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
