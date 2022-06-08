// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_003.phpt
  it("Location: headers respect the header() response code parameter", function () {
    expect(parser.parseCode("<?php\nheader('Location: http://example.com/', true, 404);\n?>")).toMatchSnapshot();
  });
});
