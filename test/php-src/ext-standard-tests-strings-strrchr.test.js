// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrchr.phpt
  it("strrchr() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(strrchr(\"\", \"\"));\nvar_dump(strrchr(\"abc\", \"\"));\nvar_dump(strrchr(\"\", \"abc\"));\nvar_dump(strrchr(\"abc\", \"abc\"));\nvar_dump(strrchr(\"test \".chr(0).\" test\", \" \"));\nvar_dump(strrchr(\"test\".chr(0).\"string\", \"t\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
