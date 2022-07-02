// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug72071.phpt
  it("Bug #72071 setcookie allows max-age to be negative", function () {
    expect(parser.parseCode("<?php\n$date = mktime(12, 25, 39, 4, 1, 2017);\nsetcookie(\"name\", \"value\", $date);\n?>")).toMatchSnapshot();
  });
});
