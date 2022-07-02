// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug39032.phpt
  it("Bug #39032 (strcspn() stops on null character)", function () {
    expect(parser.parseCode("<?php\nvar_dump(strcspn(chr(0),\"x\"));\nvar_dump(strcspn(chr(0),\"\"));\nvar_dump(strcspn(chr(0),\"qweqwe\"));\nvar_dump(strcspn(chr(1),\"qweqwe\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
