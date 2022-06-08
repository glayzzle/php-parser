// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema065.phpt
  it("SOAP XML Schema 65: Attribute with default value", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <attribute name=\"str\" type=\"string\"/>\n        <attribute name=\"int\" type=\"int\" default=\"5\"/>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"str\"=>\"str\"));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
