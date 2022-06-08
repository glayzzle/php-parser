// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug80763.phpt
  it("Bug #80763 (msgfmt_format() does not accept DateTime references)", function () {
    expect(parser.parseCode("<?php\n$today = new DateTime('2021-02-17 12:00:00');\n$formatter = new \\MessageFormatter('en_US', 'Today is {today, date, full}.');\n$params = ['today' => $today];\narray_walk($params, fn() => 1);\nvar_dump($formatter->format($params));\n?>")).toMatchSnapshot();
  });
});
