// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug40752.phpt
  it("Bug #40752 (parse_ini_file() segfaults when a scalar setting is redeclared as an array)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.\"/bug40752.ini\";\nfile_put_contents($file, '\nfoo   = 1;\nfoo[] = 1;\n');\nvar_dump(parse_ini_file($file));\nfile_put_contents($file, '\nfoo[] = 1;\nfoo   = 1;\n');\nvar_dump(parse_ini_file($file));\nunlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
