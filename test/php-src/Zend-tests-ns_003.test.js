// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_003.phpt
  it("003: Name conflict (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nclass Exception {\n}\necho get_class(new Exception()),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
