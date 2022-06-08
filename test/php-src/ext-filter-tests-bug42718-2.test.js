// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug42718-2.phpt
  it("Bug #42718 - 2 (unsafe_raw filter not applied when configured as default filter)", function () {
    expect(parser.parseCode("<?php\necho ini_get('filter.default') . \"\\n\";\necho ini_get('filter.default_flags') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
