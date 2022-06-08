// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone_version_get.phpt
  it("Test the basics to function timezone_version_get().", function () {
    expect(parser.parseCode("<?php\nvar_dump(timezone_version_get());\n?>")).toMatchSnapshot();
  });
});
