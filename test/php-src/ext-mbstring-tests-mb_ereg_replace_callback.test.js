// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace_callback.phpt
  it("mb_ereg_replace_callback()", function () {
    expect(parser.parseCode("<?php\n$str = 'abc 123 #\",; $foo';\necho mb_ereg_replace_callback('(\\S+)', function ($m) {\n    return $m[1].'('.strlen($m[1]).')';\n}, $str), \"\\n\";\necho mb_ereg_replace_callback('(?<word>\\w+) (?<digit>\\d+).*', function ($m) {\n    return sprintf(\"%s-%s\", $m['digit'], $m['word']);\n}, $str), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
