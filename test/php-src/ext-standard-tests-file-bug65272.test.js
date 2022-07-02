// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug65272.phpt
  it("Bug #65272: flock() correctly sets wouldblock out param in windows", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.\"/flock_bug65272.dat\";\n$fp1 = fopen($file, \"w\");\nvar_dump(flock($fp1, LOCK_SH));\n$fp2 = fopen($file, \"r\");\nvar_dump(flock($fp2, LOCK_EX|LOCK_NB, $wouldblock));\nvar_dump($wouldblock);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
