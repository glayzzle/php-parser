// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_encode_mimeheader_basic3.phpt
  it("Test mb_encode_mimeheader() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test mb_encode_header() with different strings\n */\necho \"*** Testing mb_encode_mimeheader() : basic3 ***\\n\";\n//All strings are the same when displayed in their respective encodings\n$sjis_string = base64_decode('k/qWe4zqg2WDTINYg2eCxYK3gUIwMTIzNIJUglWCVoJXgliBQg==');\n$jis_string = base64_decode('GyRCRnxLXDhsJUYlLSU5JUgkRyQ5ISMbKEIwMTIzNBskQiM1IzYjNyM4IzkhIxsoQg==');\n$euc_jp_string = base64_decode('xvzL3LjspcalraW5pcikx6S5oaMwMTIzNKO1o7ajt6O4o7mhow==');\n$inputs = array('SJIS' => $sjis_string,\n                'JIS' => $jis_string,\n                'EUC_JP' => $euc_jp_string);\nforeach ($inputs as $lang => $input) {\n    echo \"\\nLanguage: $lang\\n\";\n    echo \"-- Base 64: --\\n\";\n    mb_internal_encoding($lang);\n    $outEncoding = $lang;\n    var_dump(mb_encode_mimeheader($input, $outEncoding, 'B'));\n    echo \"-- Quoted-Printable --\\n\";\n    var_dump(mb_encode_mimeheader($input, $outEncoding, 'Q'));\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
