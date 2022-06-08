// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug70018.phpt
  it("Bug #70018 (exec does not strip all whitespace)", function () {
    expect(parser.parseCode("<?php\n$output = array();\n$test_fl = __DIR__ . DIRECTORY_SEPARATOR . md5(uniqid());\nfile_put_contents($test_fl, '<?php echo \"abc\\f\\n \\n\";');\nexec(PHP_BINARY . \" -n $test_fl\", $output);\nvar_dump($output);\n@unlink($test_fl);\n?>")).toMatchSnapshot();
  });
});
