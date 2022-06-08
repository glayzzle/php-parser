// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzopen_basic2.phpt
  it("Test gzopen() function : basic functionality for writing", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gzopen() : basic functionality ***\\n\";\n// Initialise all required variables\n$filename = \"gzopen_basic2.txt.gz\";\n$modes = array('w', 'w+');\n$data = \"This was the information that was written\";\nforeach($modes as $mode) {\n   echo \"testing mode -- $mode --\\n\";\n   $h = gzopen($filename, $mode);\n   if ($h !== false) {\n      gzwrite($h, $data);\n      gzclose($h);\n      $h = gzopen($filename, 'r');\n      gzpassthru($h);\n      gzclose($h);\n      echo \"\\n\";\n      unlink($filename);\n   }\n   else {\n      var_dump($h);\n   }\n}\n?>")).toMatchSnapshot();
  });
});
