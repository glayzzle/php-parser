// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/004.phpt
  it("execute a file with -f", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$filename = __DIR__.'/004.test.php';\n$code ='\n<?php\nclass test {\n    private $pri;\n}\nvar_dump(test::$pri);\n?>\n';\nfile_put_contents($filename, $code);\nif (defined(\"PHP_WINDOWS_VERSION_MAJOR\")) {\n    var_dump(`$php -n -f \"$filename\"`);\n} else {\n    var_dump(`$php -n -f \"$filename\" 2>/dev/null`);\n}\nvar_dump(`$php -n -f \"wrong\"`);\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
