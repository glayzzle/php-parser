// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strtoupper_variation3.phpt
  it("Test mb_strtoupper() function : usage varitations - pass mixed ASCII and non-ASCII strings", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass a Japanese string and a mixed Japanese and ASCII string to mb_strtolower\n * to check correct conversion is occurring (Japanese characters should not be converted).\n */\necho \"*** Testing mb_strtoupper() : usage variations ***\\n\";\n$string_mixed_upper = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCUEhQLiAwMTIzNO+8le+8lu+8l++8mO+8meOAgg==');\n$string_mixed_lower = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCcGhwLiAwMTIzNO+8le+8lu+8l++8mO+8meOAgg==');\n$string_all_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CC');\necho \"\\n-- Mixed string (mulitbyte and ASCII characters) --\\n\";\n$a = mb_strtoupper($string_mixed_lower, 'UTF-8');\nvar_dump(base64_encode($a));\nif ($a == $string_mixed_upper) {\n    echo \"Correctly Converted\\n\";\n} else {\n    echo \"Incorrectly Converted\\n\";\n}\necho \"\\n-- Multibyte Only String--\\n\";\n$b = mb_strtoupper($string_all_mb, 'UTF-8');\nvar_dump(base64_encode($b));\nif ($b == $string_all_mb) { // Japanese characters only - should not be any conversion\n    echo \"Correctly Converted\\n\";\n} else {\n    echo \"Incorrectly Converted\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
