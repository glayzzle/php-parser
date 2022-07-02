// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/header_redirection_011.phpt
  it("Location: headers do not override the 305 Use Proxy response code", function () {
    expect(parser.parseCode("<?php\nheader('HTTP/1.1 305 Use Proxy');\nheader('Location: http://example.com/');\n?>")).toMatchSnapshot();
  });
});
