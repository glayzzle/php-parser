// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug60306.phpt
  it("Bug #60306 (Characters lost while converting from cp936 to utf8)", function () {
    expect(parser.parseCode("<?php\n$s = \"洪仁玕\";\nvar_dump($s === mb_convert_encoding(mb_convert_encoding($s, \"cp936\", \"utf8\"), \"utf8\", \"cp936\"));\n?>")).toMatchSnapshot();
  });
});
