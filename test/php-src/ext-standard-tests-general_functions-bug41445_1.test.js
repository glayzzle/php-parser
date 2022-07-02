// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug41445_1.phpt
  it("Bug #41445 (parse_ini_file() function parses octal numbers in section names) - 2", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.\"/bug41445_1.ini\";\n$data = <<<DATA\n[2454.33]\n09 = yes\n[9876543]\n098765434567876543 = yes\n[09876543]\n987654345678765432456798765434567876543 = yes\nDATA;\nfile_put_contents($file, $data);\nvar_dump(parse_ini_file($file, TRUE));\nvar_dump(parse_ini_file($file));\n@unlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
