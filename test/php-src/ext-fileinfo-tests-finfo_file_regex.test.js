// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_file_regex.phpt
  it("Test finfo_file() function : regex rules", function () {
    expect(parser.parseCode("<?php\n/**\n * Works with the unix file command:\n * $ file -m magic resources/test.awk\n * resources/test.awk: awk script, ASCII text\n */\n$magicFile = __DIR__ . DIRECTORY_SEPARATOR . 'magic';\n$finfo = finfo_open( FILEINFO_MIME, $magicFile );\necho \"*** Testing finfo_file() : regex rules ***\\n\";\n// Calling finfo_file() with all possible arguments\n$file = __DIR__ . '/resources/test.awk';\nvar_dump( finfo_file( $finfo, $file ) );\nvar_dump( finfo_file( $finfo, $file, FILEINFO_CONTINUE ) );\n?>")).toMatchSnapshot();
  });
});
