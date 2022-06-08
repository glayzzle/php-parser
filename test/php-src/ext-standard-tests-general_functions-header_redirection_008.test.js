// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_008.phpt
  it("Location: headers do not override the 302 Found response code", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 302 Found');\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
