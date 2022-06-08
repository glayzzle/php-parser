// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtoupper.phpt
  it("Test strtoupper on non-ASCII characters", function () {
    expect(parser.parseCode("<?php\n$chars = \"���\";\n// Not sure which is most portable. BSD's answer to\n// this one. A small array based on PHP_OS should\n// cover a majority of systems and makes the problem\n// of locales transparent for the end user.\nsetlocale(LC_CTYPE, \"de_DE\", \"de\", \"german\", \"ge\", \"de_DE.ISO8859-1\", \"ISO8859-1\");\necho strtoupper($chars).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
