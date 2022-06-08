// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getmypid_basic.phpt
  it("Test getmypid() function: basic test", function () {
    expect(parser.parseCode("<?php\necho \"Simple testcase for getmypid() function\\n\";\nvar_dump(getmypid());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
