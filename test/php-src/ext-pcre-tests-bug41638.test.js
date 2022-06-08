// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug41638.phpt
  it("Bug #41638 (pcre 7.0 regression)", function () {
    expect(parser.parseCode("<?php\n$str = \"repeater id='loopt' dataSrc=subject columns=2\";\npreg_match_all(\"/(['\\\"])((.*(\\\\\\\\\\\\1)*)*)\\\\1/sU\",$str,$str_instead);\nprint_r($str_instead);\n// these two are from Magnus Holmgren (extracted from a pcre-dev mailing list post)\npreg_match_all(\"/(['\\\"])((?:\\\\\\\\\\\\1|.)*)\\\\1/sU\", $str, $str_instead);\nprint_r($str_instead);\npreg_match_all(\"/(['\\\"])(.*)(?<!\\\\\\\\)\\\\1/sU\", $str, $str_instead);\nprint_r($str_instead);\n?>")).toMatchSnapshot();
  });
});
