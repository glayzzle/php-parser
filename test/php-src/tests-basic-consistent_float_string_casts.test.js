// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/consistent_float_string_casts.phpt
  it("Test that float to string and string to float casts are consistent", function () {
    expect(parser.parseCode("<?php\nsetlocale(\n    LC_ALL,\n    \"german\", \"de\", \"de_DE\", \"de_DE.ISO8859-1\", \"de_DE.ISO_8859-1\", \"de_DE.UTF-8\",\n    \"french\", \"fr\", \"fr_FR\", \"fr_FR.ISO8859-1\", \"fr_FR.ISO_8859-1\", \"fr_FR.UTF-8\",\n);\n$float = 1/3;\n$string = (string) $float;\n$float = (float) $string;\nprintf(\"%.2f\", $float);\n?>")).toMatchSnapshot();
  });
});
