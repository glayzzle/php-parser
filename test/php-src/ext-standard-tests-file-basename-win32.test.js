// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/basename-win32.phpt
  it("basename", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/string.c\n */\n$file_paths = array (\n  /* simple paths */\n  array(\"bar\"),\n  array(\"\\\\foo\\\\bar\"),\n  array(\"foo\\\\bar\"),\n  array(\"\\\\bar\"),\n  /* simple paths with trailing slashes */\n  array(\"bar\\\\\"),\n  array(\"\\\\bar\\\\\"),\n  array(\"\\\\foo\\\\bar\\\\\"),\n  array(\"foo\\\\bar\\\\\"),\n  array(\"\\\\bar\\\\\"),\n  /* paths with suffix removal */\n  array(\"bar.zip\", \".zip\"),\n  array(\"bar.zip\", \"bar.zip\"),\n  array(\"\\\\foo\\\\bar.zip\", \".zip\"),\n  array(\"foo\\\\bar.zip\", \".zip\"),\n  array(\"\\\\bar.zip\", \".zip\"),\n  /* paths with suffix and trailing slashes with suffix removal*/\n  array(\"bar.zip\\\\\", \".zip\"),\n  array(\"\\\\bar.zip\\\\\", \".zip\"),\n  array(\"\\\\foo\\\\bar.zip\\\\\", \".zip\"),\n  array(\"foo\\\\bar.zip\\\\\", \".zip\"),\n  array(\"\\\\bar.zip\\\\\", \".zip\"),\n  /* paths with basename only suffix, with suffix removal*/\n  array(\"\\\\.zip\", \".zip\"),\n  array(\".zip\", \".zip\"),\n  array(\"\\\\foo\\\\.zip\", \".zip\"),\n  /* paths with basename only suffix & trailing slashes, with suffix removal*/\n  array(\".zip\\\\\", \".zip\"),\n  array(\"\\\\foo\\\\.zip\\\\\", \".zip\"),\n  array(\"foo\\\\.zip\\\\\", \".zip\"),\n);\n$file_path_variations = array (\n  /* paths with shortcut home dir char, with suffix variation */\n  array(\"C:\\\\temp\\\\bar\"),\n  array(\"C:\\\\temp\\\\bar\", \"\"),\n  array(\"C:\\\\temp\\\\bar\", ' '),\n  array(\"C:\\\\temp\\\\bar.tar\", \".tar\"),\n  array(\"C:\\\\temp\\\\bar.tar\", \"~\"),\n  array(\"C:\\\\temp\\\\bar.tar\\\\\", \"~\"),\n  array(\"C:\\\\temp\\\\bar.tar\\\\\", \"\"),\n  array(\"C:\\\\temp\\\\bar.tar\", ''),\n  array(\"C:\\\\temp\\\\bar.tar\", \" \"),\n  /* paths with numeric strings */\n  array(\"10.5\"),\n  array(\"10.5\", \".5\"),\n  array(\"10.5\", \"10.5\"),\n  array(\"10\"),\n  array(\"105\", \"5\"),\n  array(\"/10.5\"),\n  array(\"10.5\\\\\"),\n  array(\"10/10.zip\"),\n  array(\"0\"),\n  array('0'),\n  /* paths and suffix given as same */\n  array(\"bar.zip\", \"bar.zip\"),\n  array(\"\\\\bar.zip\", \"\\\\bar.zip\"),\n  array(\"\\\\bar.zip\\\\\", \"\\\\bar.zip\\\\\"),\n  array(\" \", \" \"),\n  array(' ', ' '),\n  /* path with spaces */\n  array(\" \"),\n  array(' '),\n  /* empty paths */\n  array(\"\"),\n  array(''),\n);\nfunction check_basename( $path_arrays ) {\n   $loop_counter = 1;\n   foreach ($path_arrays as $path) {\n     echo \"\\n--Iteration $loop_counter--\\n\"; $loop_counter++;\n     if( 1 == count($path) ) { // no suffix provided\n       var_dump( basename($path[0]) );\n     } else { // path as well as suffix provided,\n       var_dump( basename($path[0], $path[1]) );\n     }\n   }\n}\necho \"*** Testing basic operations ***\\n\";\ncheck_basename( $file_paths );\necho \"\\n*** Testing possible variations in path and suffix ***\\n\";\ncheck_basename( $file_path_variations );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
