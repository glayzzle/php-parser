// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/dirname_no_path_normalization-win32.phpt
  it("Test dirname() function : regression with path normalization", function () {
    expect(parser.parseCode("<?php\n$s = '/php_sanity/sanity.php?';\nwhile (dirname($s) == \"/php_sanity\" && strlen($s) < 10000) {\n    $s .= str_repeat('X', 250);\n}\nif (strlen($s) >= 10000) {\n    echo \"OK\\n\";\n} else {\n    print \"ERROR: \" . PHP_EOL;\n    var_dump(dirname($s));\n    var_dump(strlen($s));\n}\n?>")).toMatchSnapshot();
  });
});
