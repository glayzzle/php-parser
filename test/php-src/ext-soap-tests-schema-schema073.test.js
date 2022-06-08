// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema073.phpt
  it("SOAP XML Schema 73: SOAP 1.1 Array (document style, element with type ref)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <element name=\"testElement\" type=\"tns:testType\"/>\n    <complexType name=\"testType\">\n        <complexContent>\n            <restriction base=\"SOAP-ENC:Array\">\n        <attribute ref=\"SOAP-ENC:arrayType\" wsdl:arrayType=\"int[]\"/>\n        </restriction>\n    </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'element=\"tns:testElement\"',array(123,123.5),'document','literal');\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
