// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_006.phpt
  it("Location: headers do not override the 300 Multiple Choices response code", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 300 Multiple Choices');\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
