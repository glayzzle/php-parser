// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema057.phpt
  it("SOAP XML Schema 57: SOAP 1.1 Array (second way, literal encoding)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <complexContent>\n            <restriction base=\"SOAP-ENC:Array\">\n                <all>\n                    <element name=\"x_item\" type=\"int\" maxOccurs=\"unbounded\"/>\n            </all>\n        </restriction>\n    </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',array(123,123.5),'rpc','literal');\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
