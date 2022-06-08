// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/pcre.constants.phpt
  it("Test for pre-defined pcre constants", function () {
    expect(parser.parseCode("<?php\necho \"PCRE constants test\\n\";\necho \"PREG_PATTERN_ORDER= \", PREG_PATTERN_ORDER, \"\\n\";\necho \"PREG_OFFSET_CAPTURE= \", PREG_OFFSET_CAPTURE, \"\\n\";\necho \"PREG_SPLIT_NO_EMPTY= \", PREG_SPLIT_NO_EMPTY, \"\\n\";\necho \"PREG_SPLIT_DELIM_CAPTURE= \", PREG_SPLIT_DELIM_CAPTURE, \"\\n\";\necho \"PREG_SPLIT_OFFSET_CAPTURE= \", PREG_SPLIT_OFFSET_CAPTURE, \"\\n\";\necho \"PREG_GREP_INVERT= \", PREG_GREP_INVERT, \"\\n\";\necho \"PREG_NO_ERROR= \", PREG_NO_ERROR, \"\\n\";\necho \"PREG_INTERNAL_ERROR= \", PREG_INTERNAL_ERROR, \"\\n\";\necho \"PREG_BACKTRACK_LIMIT_ERROR= \", PREG_BACKTRACK_LIMIT_ERROR, \"\\n\";\necho \"PREG_RECURSION_LIMIT_ERROR= \", PREG_RECURSION_LIMIT_ERROR, \"\\n\";\necho \"PREG_BAD_UTF8_ERROR= \", PREG_BAD_UTF8_ERROR, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
