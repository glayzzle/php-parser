// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/dollar_endonly.phpt
  it("D (PCRE_DOLLAR_ENDONLY) modifier", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match_all('/^\\S+.+$/', \"aeiou\\n\", $m));\nvar_dump($m);\nvar_dump(preg_match_all('/^\\S+.+$/D', \"aeiou\\n\", $m));\nvar_dump($m);\nvar_dump(preg_match_all('/^\\S+\\s$/D', \"aeiou\\n\", $m));\nvar_dump($m);\n?>")).toMatchSnapshot();
  });
});
