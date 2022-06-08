// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug34790.phpt
  it("Bug #34790 (preg_match_all(), named capturing groups, variable assignment/return => crash)", function () {
    expect(parser.parseCode("<?php\nfunction func1(){\n        $string = 'what the word and the other word the';\n        preg_match_all('/(?P<word>the)/', $string, $matches);\n        return $matches['word'];\n}\n$words = func1();\nvar_dump($words);\n?>")).toMatchSnapshot();
  });
});
