// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/005.phpt
  it("strcasecmp() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(strcasecmp(\"\", \"\"));\nvar_dump(strcasecmp(\"aef\", \"dfsgbdf\"));\nvar_dump(strcasecmp(\"qwe\", \"qwer\"));\nvar_dump(strcasecmp(\"qwerty\", \"QweRty\"));\nvar_dump(strcasecmp(\"qwErtY\", \"qwerty\"));\nvar_dump(strcasecmp(\"q123\", \"Q123\"));\nvar_dump(strcasecmp(\"01\", \"01\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
