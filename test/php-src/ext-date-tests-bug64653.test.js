// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug64653.phpt
  it("Bug #64653 (Subtraction of DateInterval yields wrong result)", function () {
    expect(parser.parseCode("<?php\n$date = new \\DateTime('2370-01-31');\necho $date->sub(new \\DateInterval('P1M'))->format('Y-m-d');\n?>")).toMatchSnapshot();
  });
});
