// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_006.phpt
  it("006: Run-time name conflict (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nclass Exception {\n}\n$x = \"test\\\\ns1\\\\Exception\";\necho get_class(new $x),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
