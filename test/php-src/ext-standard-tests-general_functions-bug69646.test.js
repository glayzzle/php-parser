// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug69646.phpt
  it("Bug #69646 OS command injection vulnerability in escapeshellarg()", function () {
    expect(parser.parseCode("<?php\n$a = 'a\\\\';\n$b = 'b -c d\\\\';\nvar_dump( $a, escapeshellarg($a) );\nvar_dump( $b, escapeshellarg($b) );\n$helper_script = <<<SCRIPT\n<?php\nprint( \"--- ARG INFO ---\\n\" );\nvar_dump( \\$argv );\nSCRIPT;\n$script = __DIR__ . DIRECTORY_SEPARATOR . \"arginfo.php\";\nfile_put_contents($script, $helper_script);\n$cmd =  PHP_BINARY . \" \" . $script . \" \"  . escapeshellarg($a) . \" \" . escapeshellarg($b);\nsystem($cmd);\nunlink($script);\n?>")).toMatchSnapshot();
  });
});
