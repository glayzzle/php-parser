// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug41445.phpt
  it("Bug #41445 (parse_ini_file() function parses octal numbers in section names)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.\"/bug41445.ini\";\n$data = <<<DATA\n[001099030277]\noption1 = yes\n[011099030277]\noption2 = yes\nDATA;\nfile_put_contents($file, $data);\nvar_dump(parse_ini_file($file, TRUE));\nvar_dump(parse_ini_file($file));\n$data = <<<DATA\n[23.44]\noption1 = yes\n[9633337363542736472364]\noption2 = yes\nDATA;\nfile_put_contents($file, $data);\nvar_dump(parse_ini_file($file, TRUE));\nvar_dump(parse_ini_file($file));\n@unlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
