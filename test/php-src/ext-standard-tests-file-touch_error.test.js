// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/touch_error.phpt
  it("touch() error tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(touch(\"/no/such/file/or/directory\"));\n?>")).toMatchSnapshot();
  });
});
