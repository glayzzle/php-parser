// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_times.phpt
  it("Test posix_times()", function () {
    expect(parser.parseCode("<?php\n    var_dump(posix_times());\n?>")).toMatchSnapshot();
  });
});
