// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema044.phpt
  it("SOAP XML Schema 44: Restriction of simple type", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <simpleContent>\n            <restriction base=\"int\">\n                <attribute name=\"int\" type=\"int\"/>\n            </restriction>\n        </simpleContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"_\"=>123.5,\"int\"=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
