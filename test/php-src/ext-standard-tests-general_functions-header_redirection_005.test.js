// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_005.phpt
  it("Location: headers do not override the 201 response code", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 201 Created');\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
