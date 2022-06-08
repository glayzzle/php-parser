// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug41874_1.phpt
  it("bug #41874 (Separate STDOUT and STDERR in exec functions)", function () {
    expect(parser.parseCode("<?php\npopen(\"1:\\\\non_existent\", \"r\");\n?>")).toMatchSnapshot();
  });
});
