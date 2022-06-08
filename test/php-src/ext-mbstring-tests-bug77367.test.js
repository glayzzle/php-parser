// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug77367.phpt
  it("Bug #77367 (Negative size parameter in mb_split)", function () {
    expect(parser.parseCode("<?php\nmb_regex_encoding('UTF-8');\nvar_dump(mb_split(\"\\\\w\", \"\\xfc\"));\n?>")).toMatchSnapshot();
  });
});
