// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzopen_variation5.phpt
  it("Test gzopen() function : variation: use include path and stream context create a file, relative path", function () {
    expect(parser.parseCode("<?php\nrequire_once('gzopen_include_path.inc');\necho \"*** Testing gzopen() : variation ***\\n\";\n$thisTestDir = \"gzopenVariation5.dir\";\nmkdir($thisTestDir);\nchdir($thisTestDir);\n$newpath = relative_include_path();\nset_include_path($newpath);\nruntest();\n$newpath = generate_next_rel_path();\nset_include_path($newpath);\nruntest();\nteardown_relative_path();\nchdir(\"..\");\nrmdir($thisTestDir);\nfunction runtest() {\n    $tmpfile = 'gzopen_variation5.tmp';\n    $h = gzopen($tmpfile, \"w\", true);\n    fwrite($h, \"This is the test file\");\n    fclose($h);\n    $h = @gzopen($tmpfile, \"r\");\n    if ($h === false) {\n       echo \"Not created in working dir\\n\";\n    }\n    else {\n       echo \"created in working dir\\n\";\n       gzclose($h);\n       unlink($tmpfile);\n    }\n    $h = @gzopen('dir1/'.$tmpfile, \"r\");\n    if ($h === false) {\n       echo \"Not created in dir1\\n\";\n    }\n    else {\n       echo \"created in dir1\\n\";\n       gzclose($h);\n       unlink('dir1/'.$tmpfile);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
