// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug37911.phpt
  it("Bug #37911 (preg_replace_callback ignores named groups)", function () {
    expect(parser.parseCode("<?php\nfunction callback($match)\n{\n    var_dump($match);\n    return $match[1].'/'.strlen($match['name']);\n}\nvar_dump(preg_replace_callback('|(?P<name>blub)|', 'callback', 'bla blub blah'));\nvar_dump(preg_match('|(?P<name>blub)|', 'bla blub blah', $m));\nvar_dump($m);\nvar_dump(preg_replace_callback('|(?P<1>blub)|', 'callback', 'bla blub blah'));\n?>")).toMatchSnapshot();
  });
});
