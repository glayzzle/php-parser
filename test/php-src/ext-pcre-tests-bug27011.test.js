// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug27011.phpt
  it("Bug #27011 (segfault in preg_match_all())", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match_all('|(\\w+)://([^\\s\"<]*[\\w+#?/&=])|', \"This is a text string\", $matches, PREG_SET_ORDER));\nvar_dump($matches);\n?>")).toMatchSnapshot();
  });
});
