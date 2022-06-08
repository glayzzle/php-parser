// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/gd_info_variation1.phpt
  it("Test gd_info() function : variation - Checking all the values in returned array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gd_info() : variation ***\\n\";\nvar_dump(gd_info());\n?>")).toMatchSnapshot();
  });
});
