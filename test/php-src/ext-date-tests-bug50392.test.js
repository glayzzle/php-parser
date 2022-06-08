// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug50392.phpt
  it("Bug #50392 (date_create_from_format enforces 6 digits for 'u' format character)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('Europe/Bratislava');\n$base = '2009-03-01 18:00:00';\nfor ($i = 0; $i < 8; $i++) {\n    $string = $base . '.' . str_repeat($i, $i);\n    echo $string, \"\\n- \";\n    $result = date_parse_from_format('Y-m-d H:i:s.u', $string);\n    echo $result['fraction'] ? $result['fraction'] : 'X', \"\\n\";\n    foreach( $result['errors'] as $error ) {\n        echo \"- \", $error, \"\\n\";\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
