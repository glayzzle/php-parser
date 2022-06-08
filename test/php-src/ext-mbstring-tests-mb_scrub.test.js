// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_scrub.phpt
  it("mb_scrub()", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    \"?\" === mb_scrub(\"\\x80\"),\n    \"?\" === mb_scrub(\"\\x80\", 'UTF-8')\n);\n?>")).toMatchSnapshot();
  });
});
