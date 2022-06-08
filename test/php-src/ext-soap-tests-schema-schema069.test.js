// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema069.phpt
  it("SOAP XML Schema 69: Attribute with default value (reference)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <attribute name=\"str\" type=\"string\"/>\n        <attribute ref=\"tns:int\"/>\n    </complexType>\n    <attribute name=\"int\" type=\"int\" default=\"5\"/>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"str\"=>\"str\"));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
