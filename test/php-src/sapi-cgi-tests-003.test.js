// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/003.phpt
  it("strip comments and whitespace with -w", function () {
    expect(parser.parseCode("<?php\ninclude \"include.inc\";\n$php = get_cgi_path();\nreset_env_vars();\n$filename = __DIR__.'/003.test.php';\n$code ='\n<?php\n/* some test script */\nclass test { /* {{{ */\n    public $var = \"test\"; //test var\n#perl style comment\n    private $pri; /* private attr */\n    function foo(/* void */) {\n    }\n}\n/* }}} */\n?>\n';\nfile_put_contents($filename, $code);\nvar_dump(`$php -n -w \"$filename\"`);\nvar_dump(`$php -n -w \"wrong\"`);\nvar_dump(`echo \"<?php /* comment */ class test {\\n // comment \\n function foo() {} } ?>\" | $php -n -w`);\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
