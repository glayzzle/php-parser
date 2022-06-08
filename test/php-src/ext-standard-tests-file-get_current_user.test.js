// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/get_current_user.phpt
  it("get_current_user() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(get_current_user());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
