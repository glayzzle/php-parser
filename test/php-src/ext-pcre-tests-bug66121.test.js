// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug66121.phpt
  it("Bug #66121 - UTF-8 lookbehinds match bytes instead of characters", function () {
    expect(parser.parseCode("<?php\n// Sinhala characters\nvar_dump(preg_replace('/(?<!ක)/u', '*', 'ක'));\nvar_dump(preg_replace('/(?<!ක)/u', '*', 'ම'));\n// English characters\nvar_dump(preg_replace('/(?<!k)/u', '*', 'k'));\nvar_dump(preg_replace('/(?<!k)/u', '*', 'm'));\n// Sinhala characters\npreg_match_all('/(?<!ක)/u', 'ම', $matches, PREG_OFFSET_CAPTURE);\nvar_dump($matches);\n// invalid UTF-8\nvar_dump(preg_replace('/(?<!ක)/u', '*', \"\\xFCක\"));\nvar_dump(preg_replace('/(?<!ක)/u', '*', \"ක\\xFC\"));\nvar_dump(preg_match_all('/(?<!ක)/u', \"\\xFCම\", $matches, PREG_OFFSET_CAPTURE));\nvar_dump(preg_match_all('/(?<!ක)/u', \"\\xFCම\", $matches, PREG_OFFSET_CAPTURE));\n?>")).toMatchSnapshot();
  });
});
