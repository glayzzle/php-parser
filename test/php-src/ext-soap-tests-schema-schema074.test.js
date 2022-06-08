// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema074.phpt
  it("SOAP XML Schema 74: Structure with attributes and qualified elements", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <sequence>\n            <element name=\"str\" type=\"string\"/>\n        </sequence>\n        <attribute name=\"int\" type=\"int\"/>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"str\"=>\"str\",\"int\"=>123.5), \"rpc\", \"encoded\", 'attributeFormDefault=\"qualified\"');\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
