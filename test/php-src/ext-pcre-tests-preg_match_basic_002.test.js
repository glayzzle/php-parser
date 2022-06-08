// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_match_basic_002.phpt
  it("preg_match() single line match with multi-line input", function () {
    expect(parser.parseCode("<?php\n$string = \"My\\nName\\nIs\\nStrange\";\npreg_match(\"/M(.*)/\", $string, $matches);\nvar_dump($matches);\n?>")).toMatchSnapshot();
  });
});
