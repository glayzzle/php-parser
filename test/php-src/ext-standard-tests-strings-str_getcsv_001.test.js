// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_getcsv_001.phpt
  it("str_getcsv(): Testing using various arguments", function () {
    expect(parser.parseCode("<?php\n// string input[, string delimiter[, string enclosure[, string escape]]]\nvar_dump(str_getcsv('\"f\", \"o\", \"\"'));\nprint \"-----\\n\";\nvar_dump(str_getcsv('foo||bar', '|'));\nprint \"-----\\n\";\nvar_dump(str_getcsv('foo|bar', '|'));\nprint \"-----\\n\";\nvar_dump(str_getcsv('|foo|-|bar|', '-', '|'));\nprint \"-----\\n\";\nvar_dump(str_getcsv('|f.|.|bar|.|-|-.|', '.', '|', '-'));\nprint \"-----\\n\";\nvar_dump(str_getcsv('.foo..bar.', '.', '.', '.'));\nprint \"-----\\n\";\nvar_dump(str_getcsv('.foo. .bar.', '   ', '.', '.'));\nprint \"-----\\n\";\nvar_dump(str_getcsv('1foo1 1bar111', '   ', '1   ', '\\  '));\nprint \"-----\\n\";\nvar_dump(str_getcsv('.foo  . .  bar  .', ' ', '.', ''));\nprint \"-----\\n\";\nvar_dump(str_getcsv('\" \"\" \"', ' '));\nprint \"-----\\n\";\nvar_dump(str_getcsv(''));\nprint \"-----\\n\";\n?>")).toMatchSnapshot();
  });
});
