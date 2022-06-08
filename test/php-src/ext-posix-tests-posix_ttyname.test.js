// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_ttyname.phpt
  it("Test posix_ttyname()", function () {
    expect(parser.parseCode("<?php\n    var_dump(posix_ttyname(STDIN));\n    var_dump(posix_ttyname(STDERR));\n    var_dump(posix_ttyname(STDOUT));\n?>")).toMatchSnapshot();
  });
});
