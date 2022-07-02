// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_013.phpt
  it("Location: headers do not override the 308 Permanent Redirect response code", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 308 Permanent Redirect');\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
