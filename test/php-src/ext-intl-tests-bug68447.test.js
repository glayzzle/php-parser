// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug68447.phpt
  it("Bug #68447: grapheme_extract take an extra trailing character", function () {
    expect(parser.parseCode("<?php\n$katsushikaku = \"葛󠄁飾区\";\necho grapheme_extract($katsushikaku, 1) . \"\\n\";\n$haiyore = \"這󠄀いよれ\";\necho grapheme_extract($haiyore, 1, GRAPHEME_EXTR_COUNT) . \"\\n\";\necho grapheme_extract($haiyore, 2, GRAPHEME_EXTR_COUNT) . \"\\n\";\necho grapheme_extract($haiyore, 6, GRAPHEME_EXTR_MAXBYTES) . \"\\n\";\necho grapheme_extract($haiyore, 9, GRAPHEME_EXTR_MAXBYTES) . \"\\n\";\necho grapheme_extract($haiyore, 12, GRAPHEME_EXTR_MAXBYTES) . \"\\n\";\necho grapheme_extract($haiyore, 1, GRAPHEME_EXTR_MAXCHARS) . \"\\n\";\necho grapheme_extract($haiyore, 2, GRAPHEME_EXTR_MAXCHARS) . \"\\n\";\necho grapheme_extract($haiyore, 3, GRAPHEME_EXTR_MAXCHARS) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
