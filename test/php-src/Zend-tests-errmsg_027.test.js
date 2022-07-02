// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_027.phpt
  it("errmsg: class declarations may not be nested", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function foo() {\n        class test2 {\n        }\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
