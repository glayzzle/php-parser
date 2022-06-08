// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug68917.phpt
  it("Bug #68917 (parse_url fails on some partial urls)", function () {
    expect(parser.parseCode("<?php\nprint_r(parse_url('//example.org:81/hi?a=b#c=d'));\nprint_r(parse_url('//example.org/hi?a=b#c=d'));\n?>")).toMatchSnapshot();
  });
});
