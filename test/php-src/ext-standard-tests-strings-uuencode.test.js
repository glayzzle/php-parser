// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/uuencode.phpt
  it("uuencode family tests", function () {
    expect(parser.parseCode("<?php\nvar_dump($enc = convert_uuencode(\"\"));\nvar_dump(convert_uudecode($enc));\nvar_dump($enc = convert_uuencode(\"~!@#$%^&*()_}{POIUYTREWQQSDFGHJKL:<MNBVCXZ\"));\nvar_dump(convert_uudecode(\"!@#$%^YUGFDFGHJKLUYTFBNMLOYT\"));\nvar_dump(convert_uudecode($enc));\nvar_dump($enc = convert_uuencode(\"not very sophisticated\"));\nvar_dump(convert_uudecode($enc));\nvar_dump(convert_uudecode(\"\"));\nvar_dump(convert_uudecode(substr($enc, 0, -10)));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
