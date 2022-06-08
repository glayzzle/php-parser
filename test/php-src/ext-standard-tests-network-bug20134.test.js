// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug20134.phpt
  it("Bug #20134 (UDP reads from invalid ports)", function () {
    expect(parser.parseCode("<?php\n$fp = fsockopen(\"udp://localhost\", 65534, $errno, $errstr);\nif (!$fp) {\n    /* UDP will never cause a connection error, as it is\n     * a connection-LESS protocol */\n    echo \"ERROR: $errno - $errstr<br>\\n\";\n}\nelse {\n    /* Likewise, writes will always appear to succeed */\n    $x = fwrite($fp,\"\\n\");\n    var_dump($x);\n    /* But reads should always fail */\n    $content = fread($fp, 40);\n    var_dump($content);\n    fclose($fp);\n}\n?>")).toMatchSnapshot();
  });
});
