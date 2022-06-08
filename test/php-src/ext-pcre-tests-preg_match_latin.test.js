// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_match_latin.phpt
  it("preg_match() single line match with latin input", function () {
    expect(parser.parseCode("<?php\npreg_match('/^[\\w\\p{Cyrillic}\\s\\-\\']+$/u', 'latin', $test1);\npreg_match('/^[\\w\\p{Cyrillic}\\s\\-\\']+$/u', 'кириллица', $test2);\npreg_match('/^[\\w\\s\\-\\']+$/u', 'latin', $test3);\nvar_dump([$test1, $test2, $test3]);\n?>\n===Done===")).toMatchSnapshot();
  });
});
