// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/010-2.phpt
  it("executing a code with -R", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$filename_txt = __DIR__.\"/010.test.txt\";\n$txt = '\ntest\nhello\n';\nfile_put_contents($filename_txt, $txt);\nvar_dump(`cat \"$filename_txt\" | \"$php\" -n -R \"var_dump(1);\"`);\n@unlink($filename_txt);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
