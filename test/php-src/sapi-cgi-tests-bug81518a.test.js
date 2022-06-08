// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/bug81518a.phpt
  it("Bug #81518 (Header injection via default_mimetype / default_charset)", function () {
    expect(parser.parseCode("<?php\nini_set(\n    \"default_mimetype\",\n    \"text/html;charset=ISO-8859-1\\r\\nContent-Length: 31\\r\\n\\r\\n\" .\n    \"Lets smuggle a HTTP response.\\r\\n\"\n);\n?>")).toMatchSnapshot();
  });
});
