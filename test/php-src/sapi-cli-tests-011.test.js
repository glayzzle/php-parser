// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/011.phpt
  it("syntax check", function () {
    expect(() => parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$filename = __DIR__.\"/011.test.php\";\n$code = '\n<?php\n$test = \"var\";\nclass test {\n    private $var;\n}\necho test::$var;\n?>\n';\nfile_put_contents($filename, $code);\nvar_dump(`\"$php\" -n -l $filename`);\nvar_dump(`\"$php\" -n -l some.unknown`);\n$code = '\n<?php\nclass test\n    private $var;\n}\n?>\n';\nfile_put_contents($filename, $code);\nvar_dump(`\"$php\" -n -l $filename`);\n@unlink($filename);\necho \"Done\\n\";\n?>")).toThrowErrorMatchingSnapshot();
  });
});
