// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/034.phpt
  it("Bug #12647 (Locale settings affecting float parsing)", function () {
    expect(parser.parseCode("<?php\n# activate the german locale\nsetlocale(LC_NUMERIC, \"de_DE.UTF-8\", \"de_DE\", \"de\", \"german\", \"ge\", \"de_DE.ISO-8859-1\");\necho (float)\"3.14\", \"\\n\";\n?>")).toMatchSnapshot();
  });
});
