// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strstr_variation6.phpt
  it("Test mb_strstr() function : variation - case sensitivity", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mb_strstr() : variation ***\\n\";\nmb_internal_encoding('UTF-8');\n//ascii\n$string_ascii = 'abcdef';\n$needle_ascii_upper = \"BCD\";\n$needle_ascii_mixed = \"bCd\";\n$needle_ascii_lower = \"bcd\";\n//Greek string in lower case UTF-8\n$string_mb = base64_decode('zrHOss6zzrTOtc62zrfOuM65zrrOu868zr3Ovs6/z4DPgc+Dz4TPhc+Gz4fPiM+J');\n$needle_mb_upper = base64_decode('zpzOnc6ezp8=');\n$needle_mb_lower = base64_decode('zrzOvc6+zr8=');\n$needle_mb_mixed = base64_decode('zpzOnc6+zr8=');\necho \"-- Ascii data --\\n\";\n// needle should be found\nvar_dump(bin2hex(mb_strstr($string_ascii, $needle_ascii_lower)));\n// no needle should be found\nvar_dump(mb_strstr($string_ascii, $needle_ascii_upper));\nvar_dump(mb_strstr($string_ascii, $needle_ascii_mixed));\necho \"-- mb data in utf-8 --\\n\";\n// needle should be found\n$res = mb_strstr($string_mb, $needle_mb_lower, false);\nif ($res !== false) {\n    var_dump(bin2hex($res));\n}\nelse {\n   echo \"nothing found!\\n\";\n}\n// no needle should be found\nvar_dump(mb_strstr($string_mb, $needle_mb_upper));\nvar_dump(mb_strstr($string_mb, $needle_mb_mixed));\n?>")).toMatchSnapshot();
  });
});
