// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug65230.phpt
  it("Bug #65230 setting locale randomly broken", function () {
    expect(parser.parseCode("<?php\nfunction test($locale, $value)\n{\n    $newlocale = setlocale(LC_ALL, $locale);\n    $conv      = localeconv();\n    $sep       = $conv['decimal_point'];\n    printf(\"%s\\n--------------------------\\n\", $newlocale);\n    printf(\" sep: %s\\n\", $sep);\n    printf(\"  %%f: %f\\n\", $value);\n    printf(\"  %%F: %F\\n\", $value);\n    printf(\"date: %s\\n\", strftime('%x', mktime(0, 0, 0, 12, 5, 2014)));\n    printf(\"\\n\");\n}\ntest('german', 3.41);\ntest('english', 3.41);\ntest('french', 3.41);\ntest('german', 3.41);\n?>")).toMatchSnapshot();
  });
});
