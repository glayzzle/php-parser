// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema032.phpt
  it("SOAP XML Schema 32: Structure (choice)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <choice>\n            <element name=\"int\" type=\"int\"/>\n            <element name=\"str\" type=\"string\"/>\n        </choice>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"int\"=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
