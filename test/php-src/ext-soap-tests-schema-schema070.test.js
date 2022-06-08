// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema070.phpt
  it("SOAP XML Schema 70: Attribute with default value (attributeGroup)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <attribute name=\"str\" type=\"string\"/>\n        <attributeGroup ref=\"tns:int_group\"/>\n    </complexType>\n    <attributeGroup name=\"int_group\">\n        <attribute name=\"int\" type=\"int\" default=\"5\"/>\n    </attributeGroup>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"str\"=>\"str\"));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
