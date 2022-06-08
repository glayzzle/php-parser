// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug52971.phpt
  it("Bug #52971 (PCRE-Meta-Characters not working with utf-8)", function () {
    expect(parser.parseCode("<?php\n$message = 'Der ist ein Süßwasserpool Süsswasserpool ... verschiedene Wassersportmöglichkeiten bei ...';\n$pattern = '/\\bwasser/iu';\npreg_match_all($pattern, $message, $match, PREG_OFFSET_CAPTURE);\nvar_dump($match);\n$pattern = '/[^\\w]wasser/iu';\npreg_match_all($pattern, $message, $match, PREG_OFFSET_CAPTURE);\nvar_dump($match);\n?>")).toMatchSnapshot();
  });
});
