// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/bug72154.phpt
  it("Bug #72154 (pcntl_wait/pcntl_waitpid array internal structure overwrite)", function () {
    expect(parser.parseCode("<?php\n$b = 666;\nvar_dump($b);\n$c = &$b;\n$var5 = pcntl_wait($b,0,$c);\nunset($b);\n$b = 666;\nvar_dump($b);\n$c = &$b;\n$var5 = pcntl_waitpid(0,$b,0,$c);\nunset($b);\n?>")).toMatchSnapshot();
  });
});
