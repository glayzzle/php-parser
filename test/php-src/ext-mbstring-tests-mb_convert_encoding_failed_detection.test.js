// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_convert_encoding_failed_detection.phpt
  it("mb_convert_encoding() when encoding detection fails", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_convert_encoding(\"\\xff\", \"ASCII\", [\"UTF-8\", \"UTF-16\"]));\n$str = \"\\xff\";\nvar_dump(mb_convert_variables(\"ASCII\", [\"UTF-8\", \"UTF-16\"], $str));\nvar_dump(bin2hex($str));\n?>")).toMatchSnapshot();
  });
});
