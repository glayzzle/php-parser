// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/bug81518b.phpt
  it("Bug #81518 (Header injection via default_mimetype / default_charset)", function () {
    expect(parser.parseCode("<?php\nini_set('default_charset', 'ISO-8859-1' . \"\\r\\nHeader-Injection: Works!\");\nheader('Content-Type: text/html');\n?>")).toMatchSnapshot();
  });
});
