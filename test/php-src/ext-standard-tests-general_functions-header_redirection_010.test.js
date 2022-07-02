// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_010.phpt
  it("Location: headers do not override the 304 Not Modified response code", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 304 Not Modified');\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
