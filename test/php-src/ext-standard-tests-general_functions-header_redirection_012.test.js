// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_012.phpt
  it("Location: headers do not override the 307 Temporary Redirect response code", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 307 Temporary Redirect');\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
