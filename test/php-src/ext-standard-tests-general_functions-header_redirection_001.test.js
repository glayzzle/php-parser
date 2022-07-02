// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_001.phpt
  it("Location: headers change the status code", function () {
    expect(parser.parseCode("<?php\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
