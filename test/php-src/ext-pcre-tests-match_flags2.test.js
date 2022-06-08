// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/match_flags2.phpt
  it("preg_match() flags", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/x(.)/', 'fjszxax', $match, PREG_OFFSET_CAPTURE));\nvar_dump($match);\nvar_dump(preg_match('/(.)x/', 'fjszxax', $match, PREG_OFFSET_CAPTURE, 4));\nvar_dump($match);\nvar_dump(preg_match('/(?P<capt1>.)(x)(?P<letsmix>\\S+)/', 'fjszxax', $match, PREG_OFFSET_CAPTURE));\nvar_dump($match);\n?>")).toMatchSnapshot();
  });
});
