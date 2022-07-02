// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/ini_get_all.phpt
  it("ini_get_all() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gettype(ini_get_all()));\nvar_dump(ini_get_all(\"\"));\nvar_dump(ini_get_all(\"nosuchextension\"));\nvar_dump(ini_get_all(\"reflection\"));\nvar_dump(ini_get_all(\"pcre\"));\nvar_dump(ini_get_all(\"pcre\", false));\nvar_dump(ini_get_all(\"reflection\", false));\nvar_dump(ini_get_all(\"\", \"\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
