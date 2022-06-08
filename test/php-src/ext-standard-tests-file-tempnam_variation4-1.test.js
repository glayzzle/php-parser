// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/tempnam_variation4-1.phpt
  it("Test tempnam() function: usage variations - permissions(0351 to 0777) of dir", function () {
    expect(parser.parseCode("<?php\n/* Trying to create the file in a dir with permissions from 0351 to 0777,\n     Allowable permissions: files are expected to be created in the input dir\n     Non-allowable permissions: files are expected to be created in '/tmp' dir\n*/\necho \"*** Testing tempnam() with dir of permissions from 0351 to 0777 ***\\n\";\n$file_path = __DIR__;\n$dir_name = $file_path.\"/tempnam_variation4-1\";\n$prefix = \"tempnamVar4.\";\nmkdir($dir_name);\nfor($mode = 0351; $mode <= 0777; $mode++) {\n  chmod($dir_name, $mode);\n  $file_name = tempnam($dir_name, $prefix);\n  if(file_exists($file_name) ) {\n    if (dirname($file_name) != $dir_name) {\n      /* Either there's a notice or error */\n       printf(\"%o\\n\", $mode);\n      if (realpath(dirname($file_name)) != realpath(sys_get_temp_dir())) {\n         echo \" created in unexpected dir\\n\";\n      }\n    }\n    unlink($file_name);\n  }\n  else {\n    print(\"FAILED: File is not created\\n\");\n  }\n}\nrmdir($dir_name);\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
