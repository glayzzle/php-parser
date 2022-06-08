// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_065.phpt
  it("065: Multiple names in use statement", function () {
    expect(parser.parseCode("<?php\nuse X\\Y as test, X\\Z as test2;\nrequire \"ns_065.inc\";\ntest\\foo();\ntest2\\foo();\n?>")).toMatchSnapshot();
  });
});
