// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv_basic.phpt
  it("Test iconv() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of iconv()\n */\necho \"*** Testing iconv() : basic functionality ***\\n\";\n//All strings are the same when displayed in their respective encodings\n$sjis_string = base64_decode('k/qWe4zqg2WDTINYg2eCxYK3gUIwMTIzNIJUglWCVoJXgliBQg==');\n$euc_jp_string = base64_decode('xvzL3LjspcalraW5pcikx6S5oaMwMTIzNKO1o7ajt6O4o7mhow==');\n$utf8_string = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\necho \"\\n-- Convert to EUC-JP --\\n\";\necho \"Expected EUC-JP encoded string in base64:\\n\";\nvar_dump(bin2hex($euc_jp_string));\necho \"Converted Strings:\\n\";\nvar_dump(bin2hex(iconv('SJIS', 'EUC-JP', $sjis_string )));\nvar_dump(bin2hex(iconv('UTF-8', 'EUC-JP', $utf8_string)));\necho \"\\n-- Convert to SJIS --\\n\";\necho \"Expected SJIS encoded string in base64:\\n\";\nvar_dump(bin2hex($sjis_string));\necho \"Converted Strings:\\n\";\nvar_dump(bin2hex(iconv('EUC-JP', 'SJIS', $euc_jp_string)));\nvar_dump(bin2hex(iconv('UTF-8', 'SJIS', $utf8_string)));\necho \"\\n-- Convert to UTF-8 --\\n\";\necho \"Expected UTF-8 encoded string in base64:\\n\";\nvar_dump(bin2hex($utf8_string));\necho \"Converted Strings:\\n\";\nvar_dump(bin2hex(iconv('SJIS', 'UTF-8', $sjis_string)));\nvar_dump(bin2hex(iconv('EUC-JP', 'UTF-8', $euc_jp_string)));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
