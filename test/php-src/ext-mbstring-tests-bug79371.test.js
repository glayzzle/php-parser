// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug79371.phpt
  it("Bug #79371 (mb_strtolower (UTF-32LE): stack-buffer-overflow)", function () {
    expect(parser.parseCode("<?php\n$bytes = array(0xef, 0xbf, 0xbd, 0xef);\n$str = implode(array_map(\"chr\", $bytes));\nvar_dump(bin2hex(mb_strtolower($str, \"UTF-32LE\")));\n?>")).toMatchSnapshot();
  });
});
