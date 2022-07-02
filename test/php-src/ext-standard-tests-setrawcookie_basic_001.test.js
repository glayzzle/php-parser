// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/setrawcookie_basic_001.phpt
  it("Test setrawcookie basic functionality", function () {
    expect(parser.parseCode("<?php\nvar_dump(setrawcookie('cookie_name', rawurlencode('cookie_content')));\n?>")).toMatchSnapshot();
  });
});
