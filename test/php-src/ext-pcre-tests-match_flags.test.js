// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/match_flags.phpt
  it("preg_match_all() flags", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match_all('/(.)x/', 'zxax', $match, PREG_PATTERN_ORDER));\nvar_dump($match);\nvar_dump(preg_match_all('/(.)x/', 'zxyx', $match, PREG_SET_ORDER));\nvar_dump($match);\nvar_dump(preg_match_all('/(.)x/', 'zxyx', $match, PREG_OFFSET_CAPTURE));\nvar_dump($match);\nvar_dump(preg_match_all('/(.)x/', 'zxyx', $match, PREG_SET_ORDER | PREG_OFFSET_CAPTURE));\nvar_dump($match);\n?>")).toMatchSnapshot();
  });
});
