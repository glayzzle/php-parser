// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/013.phpt
  it("running PHP code before and after processing input lines with -B and -E", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$filename_txt = __DIR__.\"/013.test.txt\";\nfile_put_contents($filename_txt, \"test\\nfile\\ncontents\\n\");\nvar_dump(`cat \"$filename_txt\" | \"$php\" -n -B 'var_dump(\"start\");'`);\nvar_dump(`cat \"$filename_txt\" | \"$php\" -n -E 'var_dump(\"end\");'`);\nvar_dump(`cat \"$filename_txt\" | \"$php\" -n -B 'var_dump(\"start\");' -E 'var_dump(\"end\");'`);\n@unlink($filename_txt);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
