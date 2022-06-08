// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug79986.phpt
  it("Bug #79986 (str_ireplace bug with diacritics characters)", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_ALL, 'de_DE.ISO-8859-1', 'de-DE');\necho str_ireplace([\"\\xE4\", \"\\xF6\", \"\\xFC\"], ['1', '2', '3'], \"\\xE4\\xC4 \\xF6\\xD6 \\xFC\\xDC\") . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
