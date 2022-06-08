// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug26615.phpt
  it("Bug #26615 (exec crash on long input lines)", function () {
    expect(parser.parseCode("<?php\n$out = array();\n$status = -1;\nif (substr(PHP_OS, 0, 3) != 'WIN') {\n    exec($_ENV['TEST_PHP_EXECUTABLE'].' -n -r \\'for($i=1;$i<=5000;$i++) print \"$i\\n\";\\' | tr \\'\\n\\' \\' \\'', $out, $status);\n} else {\n    exec($_ENV['TEST_PHP_EXECUTABLE'].' -n -r \"for($i=1;$i<=5000;$i++) echo $i,\\' \\';\"', $out, $status);\n}\nprint_r($out);\n?>")).toMatchSnapshot();
  });
});
