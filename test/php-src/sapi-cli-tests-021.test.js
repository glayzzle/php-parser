// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/021.phpt
  it("CLI shell shebang", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$filename = __DIR__.'/021.tmp.php';\n$script = \"#!$php -n\\n\".\n          \"ola\\n\".\n          \"<?php echo 1+1,'\\n';\\n\".\n          \"?>\\n\".\n          \"adeus\\n\";\nfile_put_contents($filename, $script);\nchmod($filename, 0777);\necho `$filename`;\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
