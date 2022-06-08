// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug81349.phpt
  it("Bug #81349: mb_detect_encoding misdetcts ASCII in some cases", function () {
    expect(parser.parseCode("<?php\necho(mb_detect_encoding(\"\\xe4,a\", ['ASCII', 'UTF-8', 'ISO-8859-1']).\"\\n\");\necho(mb_detect_encoding(\"\\xe4 a\", ['ASCII', 'UTF-8', 'ISO-8859-1']).\"\\n\");\n?>")).toMatchSnapshot();
  });
});
