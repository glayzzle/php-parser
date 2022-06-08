// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema029.phpt
  it("SOAP XML Schema 29: SOAP 1.2 Multidimensional array (second way)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <complexContent>\n            <restriction base=\"enc12:Array\" xmlns:enc12=\"http://www.w3.org/2003/05/soap-encoding\">\n                <all>\n                    <element name=\"x_item\" type=\"int\" maxOccurs=\"unbounded\"/>\n            </all>\n        <attribute ref=\"enc12:arraySize\" wsdl:arraySize=\"* 1\"/>\n        </restriction>\n    </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',array(array(123),array(123.5)));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
