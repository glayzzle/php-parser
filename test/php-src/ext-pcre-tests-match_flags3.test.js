// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/match_flags3.phpt
  it("preg_match() flags 3", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('', '', $match, 0xfff));\nvar_dump(preg_match('/\\d+/', '123 456 789 012', $match, 0, -8));\nvar_dump($match);\nvar_dump(preg_match('/\\d+/', '123 456 789 012', $match, 0, -500));\nvar_dump($match);\nvar_dump(preg_match_all('/\\d+/', '123 456 789 012', $match, 0, -8));\nvar_dump($match);\nvar_dump(preg_match('/(?P<3>)/', ''));\n?>")).toMatchSnapshot();
  });
});
