// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_002.phpt
  it("Location: headers override non-201 and 3xx response codes", function () {
    expect(parser.parseCode("<?php\nheader(\"HTTP/1.1 418 I'm a Teapot\");\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
