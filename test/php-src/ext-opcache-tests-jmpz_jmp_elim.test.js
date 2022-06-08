// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jmpz_jmp_elim.phpt
  it("Edge-cases in elimination of JMPZ JMP with same target", function () {
    expect(parser.parseCode("<?php\n$foo = \"foo\";\nif ($foo . \"bar\") { goto label; }\nlabel:\nif ($undef) { goto label2; }\nlabel2:\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
