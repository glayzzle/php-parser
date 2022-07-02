// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_005.phpt
  it("005: Name conflict (php name in case if ns name exists)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nclass Exception {\n}\necho get_class(new \\Exception()),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
