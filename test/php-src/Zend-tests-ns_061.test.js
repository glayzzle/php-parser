// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_061.phpt
  it("061: use in global scope", function () {
    expect(parser.parseCode("<?php\nclass A {}\nuse \\A as B;\necho get_class(new B).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
