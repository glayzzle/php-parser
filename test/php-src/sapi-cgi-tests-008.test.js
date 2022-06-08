// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/008.phpt
  it("syntax highlighting", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$filename = __DIR__.\"/008.test.php\";\n$code = '\n<?php\n$test = \"var\"; //var\n/* test class */\nclass test {\n    private $var = array();\n    public static function foo(Test $arg) {\n        echo \"hello\";\n        var_dump($this);\n    }\n}\n$o = new test;\n?>\n';\nfile_put_contents($filename, $code);\nvar_dump(`\"$php\" -n -s \"$filename\"`);\nvar_dump(`\"$php\" -n -s \"unknown\"`);\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
