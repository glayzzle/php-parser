// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug61780_2.phpt
  it("Bug #61780 (Inconsistent PCRE captures in match results): named subpatterns", function () {
    expect(parser.parseCode("<?php\npreg_match('/(?<a>4)?(?<b>2)?\\d/', '23456', $matches, PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\necho \"\\n\\n\";\npreg_match('/(?<a>4)?(?<b>2)?\\d/', '23456', $matches, PREG_OFFSET_CAPTURE | PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\necho \"\\n\\n\";\npreg_match_all('/(?<a>4)?(?<b>2)?\\d/', '123456', $matches, PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\necho \"\\n\\n\";\npreg_match_all('/(?<a>4)?(?<b>2)?\\d/', '123456', $matches, PREG_OFFSET_CAPTURE | PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\necho \"\\n\\n\";\npreg_match_all('/(?<a>4)?(?<b>2)?\\d/', '123456', $matches, PREG_SET_ORDER | PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\necho \"\\n\\n\";\npreg_match_all('/(?<a>4)?(?<b>2)?\\d/', '123456', $matches, PREG_SET_ORDER | PREG_OFFSET_CAPTURE | PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\n?>")).toMatchSnapshot();
  });
});
