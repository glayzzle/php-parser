// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/008.phpt
  it("execute a file with -f", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$filename = __DIR__.'/008.test.php';\n$code ='\n<?php\nclass test {\n    private $pri;\n}\nvar_dump(test::$pri);\n?>\n';\nfile_put_contents($filename, $code);\nvar_dump(`$php -n -f \"$filename\"`);\nvar_dump(`$php -n -f \"wrong\"`);\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
