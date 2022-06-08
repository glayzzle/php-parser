// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/014.phpt
  it("syntax highlighting", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$filename = __DIR__.\"/014.test.php\";\n$code = '\n<?php\n$test = \"var\"; //var\n/* test class */\nclass test {\n    private $var = array();\n    public static function foo(Test $arg) {\n        echo \"hello\";\n        var_dump($this);\n    }\n}\n$o = new test;\n?>\n';\nfile_put_contents($filename, $code);\nvar_dump(`\"$php\" -n -s $filename`);\nvar_dump(`\"$php\" -n -s unknown`);\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
