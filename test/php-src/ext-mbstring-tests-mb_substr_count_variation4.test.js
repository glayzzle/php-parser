// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substr_count_variation4.phpt
  it("Test mb_substr_count() function : variation - pass a $needle that overlaps in $haystack", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass mb_substr_count() a $needle that overlaps in $haystack and see whether\n * it counts only the first occurrence or all other occurrences regardless whether they\n * were part of previous match\n */\necho \"*** Testing mb_substr_count() : usage variations ***\\n\";\necho \"\\n-- ASCII String --\\n\";\n$string_ascii = 'abcabcabc';\nvar_dump(mb_substr_count($string_ascii, 'abcabc')); //needle overlaps in haystack\necho \"\\n-- Multibyte String --\\n\";\n$string_mb = base64_decode('5pel5pys6Kqe5pel5pys6Kqe5pel5pys6Kqe');\n$needle_mb = base64_decode('5pel5pys6Kqe5pel5pys6Kqe');\nvar_dump(mb_substr_count($string_mb, $needle_mb, 'utf-8'));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
