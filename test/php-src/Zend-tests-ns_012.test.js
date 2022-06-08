// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_012.phpt
  it("012: Import in namespace and functions", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nfunction foo() {\n  echo __FUNCTION__,\"\\n\";\n}\nuse test\\ns1 as ns2;\nuse test as ns3;\nfoo();\nbar();\n\\test\\ns1\\foo();\n\\test\\ns1\\bar();\nns2\\foo();\nns2\\bar();\nns3\\ns1\\foo();\nns3\\ns1\\bar();\nfunction bar() {\n  echo __FUNCTION__,\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
