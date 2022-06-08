// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_stristr_basic.phpt
  it("Test mb_stristr() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mb_stristr() : basic functionality ***\\n\";\nmb_internal_encoding('UTF-8');\n$string_ascii = 'abcdef';\n$needle_ascii_upper = \"BCD\";\n$needle_ascii_mixed = \"bCd\";\n$needle_ascii_lower = \"bcd\";\n//Greek string in lower case UTF-8\n$string_mb = base64_decode('zrHOss6zzrTOtc62zrfOuM65zrrOu868zr3Ovs6/z4DPgc+Dz4TPhc+Gz4fPiM+J');\n$needle_mb_upper = base64_decode('zpzOnc6ezp8=');\n$needle_mb_lower = base64_decode('zrzOvc6+zr8=');\n$needle_mb_mixed = base64_decode('zpzOnc6+zr8=');\necho \"\\n-- ASCII string: needle exists --\\n\";\nvar_dump(bin2hex(mb_stristr($string_ascii, $needle_ascii_upper, false, 'ISO-8859-1')));\nvar_dump(bin2hex(mb_stristr($string_ascii, $needle_ascii_lower)));\nvar_dump(bin2hex(mb_stristr($string_ascii, $needle_ascii_mixed, true)));\necho \"\\n-- ASCII string: needle doesn't exist --\\n\";\nvar_dump(mb_stristr($string_ascii, '123'));\necho \"\\n-- Multibyte string: needle exists --\\n\";\nvar_dump(bin2hex(mb_stristr($string_mb, $needle_mb_upper)));\nvar_dump(bin2hex(mb_stristr($string_mb, $needle_mb_lower, false, 'utf-8')));\nvar_dump(bin2hex(mb_stristr($string_mb, $needle_mb_mixed, true)));\necho \"\\n-- Multibyte string: needle doesn't exist --\\n\";\n$needle2 = base64_decode(\"zrzOvs6/\");\nvar_dump(mb_stristr($string_mb, $needle2));\n?>")).toMatchSnapshot();
  });
});
