// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_009.phpt
  it("Location: headers do not override the 303 See Other response code", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 303 See Other');\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
