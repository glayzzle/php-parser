// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug41874_3.phpt
  it("bug #41874 (Separate STDOUT and STDERR in exec functions)", function () {
    expect(parser.parseCode("<?php\nsystem('cd 1:\\\\non_existent; dir nonexistent');\n?>")).toMatchSnapshot();
  });
});
