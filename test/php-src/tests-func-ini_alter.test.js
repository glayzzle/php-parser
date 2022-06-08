// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/ini_alter.phpt
  it("ini_alter() check", function () {
    expect(parser.parseCode("<?php\nini_alter('error_reporting', 1);\n$var = ini_get('error_reporting');\nvar_dump($var);\nini_alter('error_reporting', 0);\n$var = ini_get('error_reporting');\nvar_dump($var);\n?>")).toMatchSnapshot();
  });
});
