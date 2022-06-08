// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema056.phpt
  it("SOAP XML Schema 56: SOAP 1.1 Array (literal encoding)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <complexContent>\n            <restriction base=\"SOAP-ENC:Array\">\n        <attribute ref=\"SOAP-ENC:arrayType\" wsdl:arrayType=\"int[]\"/>\n        </restriction>\n    </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',array(123,123.5),'rpc','literal');\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
