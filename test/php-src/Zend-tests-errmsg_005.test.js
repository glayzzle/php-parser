// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_005.phpt
  it("errmsg: can't use method return value in write context", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function foo() {\n        return \"blah\";\n    }\n}\n$t = new test;\n$t->foo() = 1;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
