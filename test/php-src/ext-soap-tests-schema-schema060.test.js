// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema060.phpt
  it("SOAP XML Schema 60: SOAP 1.2 Multidimensional array (literal encoding)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <complexContent>\n            <restriction base=\"enc12:Array\" xmlns:enc12=\"http://www.w3.org/2003/05/soap-encoding\">\n        <attribute ref=\"enc12:itemType\" wsdl:itemType=\"int\"/>\n        <attribute ref=\"enc12:arraySize\" wsdl:arraySize=\"* 1\"/>\n        </restriction>\n    </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',array(array(123),array(123.5)),'rpc','literal');\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
