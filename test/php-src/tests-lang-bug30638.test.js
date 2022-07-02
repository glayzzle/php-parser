// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug30638.phpt
  it("Bug #30638 (localeconv returns wrong LC_NUMERIC settings) (ok to fail on MacOS X)", function () {
    expect(parser.parseCode("<?php\n# activate the german locale\nsetlocale(LC_NUMERIC, \"de_DE.UTF-8\", \"de_DE\", \"de\", \"german\", \"ge\", \"de_DE.ISO-8859-1\");\n$lc = localeconv();\nprintf(\"decimal_point: %s\\n\", $lc['decimal_point']);\nprintf(\"thousands_sep: %s\\n\", $lc['thousands_sep']);\n?>")).toMatchSnapshot();
  });
});
