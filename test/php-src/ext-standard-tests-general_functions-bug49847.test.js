// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug49847.phpt
  it("Bug #49847 (exec() fails on lines larger then 4095 bytes)", function () {
    expect(parser.parseCode("<?php\n$iswin =  substr(PHP_OS, 0, 3) == \"WIN\";\nif ($iswin) {\n    $f = __DIR__ . '\\\\bug49847.tmp';\n    $s = str_repeat(' ', 4097);\n    $s .= '1';\n    file_put_contents($f, $s);\n    exec('type ' . $f, $output);\n} else {\n    exec(\"printf %4098d 1\", $output);\n}\nvar_dump($output);\nif ($iswin) {\n    unlink($f);\n}\n?>")).toMatchSnapshot();
  });
});
