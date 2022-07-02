// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_007.phpt
  it("Location: headers do not override the 301 Moved Permanently response code", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 301 Moved Permanently');\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
