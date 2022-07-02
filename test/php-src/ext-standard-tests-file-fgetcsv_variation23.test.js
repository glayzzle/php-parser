// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgetcsv_variation23.phpt
  it("Test fgetcsv() : usage variations - empty file", function () {
    expect(parser.parseCode("<?php\n/* Testing fgetcsv() to read from an empty file */\necho \"*** Testing fgetcsv() : reading from file which is having zero content ***\\n\";\n// try reading from file which is having zero content\n// create the file and then open in read mode and try reading\n$filename = __DIR__ . '/fgetcsv_variation23.tmp';\n$fp = fopen ($filename, \"w\");\nfclose($fp);\n$fp = fopen ($filename, \"r\");\nif (!$fp) {\n  echo \"Error: failed to create file $filename!\\n\";\n  exit();\n}\nvar_dump( fgetcsv($fp) );\nvar_dump( ftell($fp) );\nvar_dump( fgetcsv($fp, 1024) );\nvar_dump( ftell($fp) );\nvar_dump( fgetcsv($fp, 1024, \"+\" ) );\nvar_dump( ftell($fp) );\nvar_dump( fgetcsv($fp, 1024, \"+\", \"%\") );\nvar_dump( ftell($fp) );\n// close and delete the file\nfclose($fp);\nunlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
