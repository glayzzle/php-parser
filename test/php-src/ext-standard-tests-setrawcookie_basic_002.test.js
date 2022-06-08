// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/setrawcookie_basic_002.phpt
  it("Test setrawcookie to fail when output exists before", function () {
    expect(parser.parseCode("<?php\necho 'output' . PHP_EOL;\nvar_dump(@setrawcookie('cookie_name', rawurlencode('cookie_content')));\n?>")).toMatchSnapshot();
  });
});
