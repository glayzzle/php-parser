// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug71443.phpt
  it("Bug #71443 (Segfault using built-in webserver with intl using symfony)", function () {
    expect(parser.parseCode("<?php\nini_set(\"include_path\", \"/tmp\");\n?>\nokey")).toMatchSnapshot();
  });
});
