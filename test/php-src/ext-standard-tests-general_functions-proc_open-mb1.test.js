// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open-mb1.phpt
  it("proc_open without bypass_shell subprocess parameter passing", function () {
    expect(parser.parseCode("<?php\n$php = PHP_BINARY;\n$f = __DIR__ . DIRECTORY_SEPARATOR . \"proc_only_mb1.php\";\nfile_put_contents($f,'<?php var_dump($argv); ?>');\n$ds = array(\n        0 => array(\"pipe\", \"r\"),\n        1 => array(\"pipe\", \"w\"),\n        2 => array(\"pipe\", \"w\")\n        );\n$p = proc_open(\n        \"$php -n $f テストマルチバイト・パス füße карамба\",\n        $ds,\n        $pipes\n        );\n$out = \"\";\nwhile (!feof($pipes[1])) {\n    $out .= fread($pipes[1], 1024);\n}\nproc_close($p);\necho $out;\n?>")).toMatchSnapshot();
  });
});
