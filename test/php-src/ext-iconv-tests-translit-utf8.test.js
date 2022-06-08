// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/translit-utf8.phpt
  it("Translit UTF-8 quotes", function () {
    expect(parser.parseCode("<?php\n//error_reporting(E_ALL);\n$utf = implode('', file(__DIR__.'/Quotes.UTF-8.data'));\nprint(iconv(\"UTF-8\", \"ISO-8859-1//TRANSLIT\", $utf));\nprint(iconv(\"UTF-8\", \"ASCII//TRANSLIT\", $utf));\n?>")).toMatchSnapshot();
  });
});
