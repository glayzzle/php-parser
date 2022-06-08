// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/006.phpt
  it("syntax check", function () {
    expect(() => parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$filename = __DIR__.\"/006.test.php\";\n$code = '\n<?php\n$test = \"var\";\nclass test {\n    private $var;\n}\necho test::$var;\n?>\n';\nfile_put_contents($filename, $code);\nvar_dump(`\"$php\" -n -l \"$filename\"`);\nvar_dump(`\"$php\" -n -l some.unknown`);\n$code = '\n<?php\nclass test\n    private $var;\n}\n?>\n';\nfile_put_contents($filename, $code);\nif (defined(\"PHP_WINDOWS_VERSION_MAJOR\")) {\n    var_dump(`\"$php\" -n -l \"$filename\"`);\n} else {\n    var_dump(`\"$php\" -n -l \"$filename\" 2>/dev/null`);\n}\n@unlink($filename);\necho \"Done\\n\";\n?>")).toThrowErrorMatchingSnapshot();
  });
});
