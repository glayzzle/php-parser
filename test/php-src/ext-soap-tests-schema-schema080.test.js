// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema080.phpt
  it("SOAP XML Schema 80: Element form qualified/unqualified (elementFormDefault - default)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <sequence>\n            <element name=\"int1\" type=\"int\"/>\n            <element name=\"int2\" type=\"int\" form=\"qualified\"/>\n            <element name=\"int3\" type=\"int\" form=\"unqualified\"/>\n        </sequence>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"int1\"=>1.1,\"int2\"=>2.2,\"int3\"=>3.3), \"rpc\", \"literal\");\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
