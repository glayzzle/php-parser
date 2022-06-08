// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug73294.phpt
  it("Bug #73294: DateTime wrong when date string is negative", function () {
    expect(parser.parseCode("<?php\nfor ( $i = -1050; $i <= -1000; $i++ )\n{\n    $M = \"06\";\n    $D = \"22\";\n    $dt = new DateTime(\"{$i}-{$M}-{$D} 00:00:00\");\n    $expected = \"{$i}-{$M}-{$D} 00:00:00\";\n    $result = $dt->format('Y-m-d H:i:s');\n    if ( $expected != $result )\n    {\n        echo \"Wrong: Should have been {$expected}, was {$result}\\n\";\n    }\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});
