// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_025.phpt
  it("errmsg: cannot inherit previously inherited constant", function () {
    expect(parser.parseCode("<?php\ninterface test1 {\n    const FOO = 10;\n}\ninterface test2 {\n    const FOO = 10;\n}\nclass test implements test1, test2 {\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
