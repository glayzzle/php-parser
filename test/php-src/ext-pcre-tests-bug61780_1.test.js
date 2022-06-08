// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug61780_1.phpt
  it("Bug #61780 (Inconsistent PCRE captures in match results): numeric subpatterns", function () {
    expect(parser.parseCode("<?php\npreg_match('/(4)?(2)?\\d/', '23456', $matches, PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\necho \"\\n\\n\";\npreg_match('/(4)?(2)?\\d/', '23456', $matches, PREG_OFFSET_CAPTURE | PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\necho \"\\n\\n\";\npreg_match_all('/(4)?(2)?\\d/', '123456', $matches, PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\necho \"\\n\\n\";\npreg_match_all('/(4)?(2)?\\d/', '123456', $matches, PREG_OFFSET_CAPTURE | PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\necho \"\\n\\n\";\npreg_match_all('/(4)?(2)?\\d/', '123456', $matches, PREG_SET_ORDER | PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\necho \"\\n\\n\";\npreg_match_all('/(4)?(2)?\\d/', '123456', $matches, PREG_SET_ORDER | PREG_OFFSET_CAPTURE | PREG_UNMATCHED_AS_NULL);\nvar_export($matches);\n?>")).toMatchSnapshot();
  });
});
