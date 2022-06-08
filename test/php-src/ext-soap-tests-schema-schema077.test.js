// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema077.phpt
  it("SOAP XML Schema 77: Attributes form qualified/unqualified (attributeFormDefault - default)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <attribute name=\"int1\" type=\"int\"/>\n        <attribute name=\"int2\" type=\"int\" form=\"qualified\"/>\n        <attribute name=\"int3\" type=\"int\" form=\"unqualified\"/>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"int1\"=>1.1,\"int2\"=>2.2,\"int3\"=>3.3), \"rpc\", \"encoded\");\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
