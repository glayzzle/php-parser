// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug42945.phpt
  it("Bug #42945 (preg_split() swallows part of the string)", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match_all('/\\b/', \"a'\", $m, PREG_OFFSET_CAPTURE));\nvar_dump($m);\nvar_dump(preg_split('/\\b/', \"a'\"));\nvar_dump(preg_split('/\\b/', \"a'\", -1, PREG_SPLIT_OFFSET_CAPTURE));\nvar_dump(preg_split('/\\b/', \"a'\", -1, PREG_SPLIT_NO_EMPTY));\nvar_dump(preg_split('/\\b/', \"a'\", -1, PREG_SPLIT_NO_EMPTY|PREG_SPLIT_OFFSET_CAPTURE));\n?>")).toMatchSnapshot();
  });
});
