// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_014.phpt
  it("Location: headers do not override the 399 Choose Your Own Adventure response code", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 399 Choose Your Own Adventure');\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
