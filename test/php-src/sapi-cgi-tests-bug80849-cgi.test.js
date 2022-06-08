// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/bug80849-cgi.phpt
  it("Bug #80849 (HTTP Status header truncation)", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 201 ' . str_repeat('A', 1014), true);\n?>")).toMatchSnapshot();
  });
});
