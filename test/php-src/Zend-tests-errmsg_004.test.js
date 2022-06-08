// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_004.phpt
  it("errmsg: can't use function return value in write context", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    return \"blah\";\n}\nfoo() = 1;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
