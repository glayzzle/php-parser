// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug55399.phpt
  it("Bug #55399 (parse_url() incorrectly treats ':' as a valid path)", function () {
    expect(parser.parseCode("<?php\nvar_dump(parse_url(\":\"));\n?>")).toMatchSnapshot();
  });
});
