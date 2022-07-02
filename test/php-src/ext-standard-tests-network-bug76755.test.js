// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug76755.phpt
  it("Bug #76755 (setcookie does not accept \"double\" type for expire time)", function () {
    expect(parser.parseCode("<?php\nvar_dump(setcookie('name', 'value', (float)(time() + 1296000)));\n?>")).toMatchSnapshot();
  });
});
