// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fopen_variation12.phpt
  it("Test fopen() function : variation: use include path (path is bad) create a file (relative)", function () {
    expect(parser.parseCode("<?php\nset_include_path(\"rubbish\");\ntestme();\nfunction testme() {\n    $tmpfile = basename(__FILE__, \".php\") . \".tmp\";\n    $h = fopen($tmpfile, \"w\", true);\n    fwrite($h, \"This is the test file\");\n    fclose($h);\n    $h = @fopen($tmpfile, \"r\");\n    if ($h === false) {\n       echo \"Not created in working dir\\n\";\n    }\n    else {\n       echo \"created in working dir\\n\";\n       fclose($h);\n       unlink($tmpfile);\n    }\n    $scriptDirFile = __DIR__.'/'.$tmpfile;\n    $h = @fopen($scriptDirFile, \"r\");\n    if ($h === false) {\n       echo \"Not created in script dir\\n\";\n    }\n    else {\n       echo \"created in script dir\\n\";\n       fclose($h);\n       unlink($scriptDirFile);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
