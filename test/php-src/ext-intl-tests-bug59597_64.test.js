// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug59597_64.phpt
  it("Bug#59597 NumberFormatter::parse() with TYPE_INT64 results in a 32 bit integer", function () {
    expect(parser.parseCode("<?php\n$formatter = new \\NumberFormatter('en', \\NumberFormatter::DECIMAL);\n$value = $formatter->parse('2147483647', \\NumberFormatter::TYPE_INT32);\nvar_dump($value);\n$formatter = new \\NumberFormatter('en', \\NumberFormatter::DECIMAL);\n$value = $formatter->parse('2147483650', \\NumberFormatter::TYPE_INT64);\nvar_dump($value);\n?>")).toMatchSnapshot();
  });
});
