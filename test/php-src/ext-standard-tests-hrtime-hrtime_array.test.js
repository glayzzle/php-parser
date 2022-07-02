// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/hrtime/hrtime_array.phpt
  it("Test hrtime() return array", function () {
    expect(parser.parseCode("<?php\nvar_dump(hrtime());\n?>")).toMatchSnapshot();
  });
});
