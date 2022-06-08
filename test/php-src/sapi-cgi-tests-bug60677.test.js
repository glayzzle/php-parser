// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/bug60677.phpt
  it("Bug #60677: CGI doesn't properly validate shebang line contains #!", function () {
    expect(parser.parseCode("#<?php echo \"Hello World\\n\"; ?>\nSecond line.")).toMatchSnapshot();
  });
});
