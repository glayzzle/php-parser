// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/010.phpt
  it("executing a file with -F", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$filename = __DIR__.\"/010.test.php\";\n$filename_txt = __DIR__.\"/010.test.txt\";\n$code = '\n<?php\nvar_dump(fread(STDIN, 10));\n?>\n';\nfile_put_contents($filename, $code);\n$txt = '\ntest\nhello';\nfile_put_contents($filename_txt, $txt);\nvar_dump(`cat \"$filename_txt\" | \"$php\" -n -F \"$filename\"`);\n?>")).toMatchSnapshot();
  });
});
