// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema042.phpt
  it("SOAP XML Schema 42: Extension of simple type", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <simpleContent>\n            <extension base=\"int\">\n                <attribute name=\"int\" type=\"int\"/>\n            </extension>\n        </simpleContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"_\"=>123.5,\"int\"=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
