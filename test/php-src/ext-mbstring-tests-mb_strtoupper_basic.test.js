// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strtoupper_basic.phpt
  it("Test mb_strtoupper() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of mb_strtoupper\n */\necho \"*** Testing mb_strtoupper() : basic functionality ***\\n\";\nmb_internal_encoding('utf-8');\n$ascii_lower = 'abcdefghijklmnopqrstuvwxyz';\n$ascii_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\n$greek_lower = base64_decode('zrHOss6zzrTOtc62zrfOuM65zrrOu868zr3Ovs6/z4DPgc+Dz4TPhc+Gz4fPiM+J');\n$greek_upper = base64_decode('zpHOks6TzpTOlc6WzpfOmM6ZzprOm86czp3Ons6fzqDOoc6jzqTOpc6mzqfOqM6p');\necho \"\\n-- ASCII String --\\n\";\n$ascii = mb_strtoupper($ascii_lower);\nvar_dump(base64_encode($ascii));\nif($ascii == $ascii_upper) {\n    echo \"Correctly converted\\n\";\n} else {\n    echo \"Incorrectly converted\\n\";\n}\necho \"\\n-- Multibyte String --\\n\";\n$mb = mb_strtoupper($greek_lower, 'UTF-8');\nvar_dump(base64_encode($mb));\nif ($mb == $greek_upper) {\n    echo \"Correctly converted\\n\";\n} else {\n    echo \"Incorrectly converted\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
