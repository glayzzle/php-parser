// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug44564.phpt
  it("Bug #44564 (escapeshellarg removes UTF-8 multi-byte characters)", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_CTYPE, \"UTF8\", \"en_US.UTF-8\");\nvar_dump(escapeshellcmd('f{o}<€>'));\nvar_dump(escapeshellarg('f~|;*Þ?'));\nvar_dump(escapeshellcmd('?€®đæ?'));\nvar_dump(escapeshellarg('aŊł€'));\n?>")).toMatchSnapshot();
  });
});
