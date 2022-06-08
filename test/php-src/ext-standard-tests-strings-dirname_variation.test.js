// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/dirname_variation.phpt
  it("Test dirname() function : usage variations", function () {
    expect(parser.parseCode("<?php\nclass temp\n{\n   function __toString() {\n     return \"Object\";\n   }\n}\n$file_path_variations = array (\n  /* home dir shortcut char */\n  \"~/home/user/bar\",\n  \"~/home/user/bar/\",\n  \"~/home/user/bar.tar\",\n  \"~/home/user/bar.tar/\",\n  /* with hotname:dir notation */\n  \"hostname:/home/user/bar.tar\",\n  \"hostname:/home/user/tbar.gz/\",\n  \"hostname:/home/user/My Pics.gz\",\n  \"hostname:/home/user/My Pics.gz/\",\n  \"hostname:/home/user/My Pics/\",\n  \"hostname:/home/user/My Pics\",\n  /* path containing numeric string */\n  \"10.5\",\n  \"/10.5\",\n  \"/10.5/\",\n  \"10.5/\",\n  \"10/10.gz\",\n  '0',\n  \"0\",\n  /* object */\n  new temp,\n  /* path as spaces */\n  \" \",\n  ' ',\n  /* empty path */\n  \"\",\n  '',\n);\nfunction check_dirname( $paths ) {\n   $loop_counter = 0;\n   $noOfPaths = count($paths);\n   for( ; $loop_counter < $noOfPaths; $loop_counter++ ) {\n     echo \"\\n--Iteration \";\n     echo $loop_counter +1;\n     echo \" --\\n\";\n     var_dump( dirname($paths[$loop_counter]) );\n   }\n}\necho \"*** Testing possible variations in path ***\\n\";\ncheck_dirname( $file_path_variations );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
