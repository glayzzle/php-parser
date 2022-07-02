// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_040.phpt
  it("errmsg: arrays are not allowed in class constants", function () {
    expect(parser.parseCode("<?php\nclass test {\n    const TEST = array(1,2,3);\n}\nvar_dump(test::TEST);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
