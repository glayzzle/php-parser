// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/request47456.phpt
  it("Request #47456 (Missing PCRE option 'J')", function () {
    expect(parser.parseCode("<?php\npreg_match_all('/(?J)(?<chr>[ac])(?<num>\\d)|(?<chr>[b])/', 'a1bc3', $m, PREG_SET_ORDER);\nvar_dump($m);\nunset($m);\npreg_match_all('/(?<chr>[ac])(?<num>\\d)|(?<chr>[b])/J', 'a1bc3', $m, PREG_SET_ORDER);\nvar_dump($m);\n?>")).toMatchSnapshot();
  });
});
