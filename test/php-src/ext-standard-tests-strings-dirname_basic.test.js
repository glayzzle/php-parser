// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/dirname_basic.phpt
  it("Test dirname() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$file_paths = array (\n  /* simple paths */\n  \"bar\",\n  \"/foo/bar\",\n  \"foo/bar\",\n  \"/bar\",\n  \"bar/\",\n  \"/bar/\",\n  \"/foo/bar/\",\n  \"foo/bar/\",\n  \"/bar/\",\n  /* path with only files and trailing slashes*/\n  \"/foo/bar.gz\",\n  \"foo/bar.gz\",\n  \"bar.gz\",\n  \"bar.gz/\",\n  \"/bar.gz\",\n  \"/bar.gz/\",\n  \"/foo/bar.gz/\",\n  \"foo/bar.gz/\",\n  \"/bar.gz/\",\n  /* path with file extension and trailing slashes */\n  \"/.gz\",\n  \".gz\",\n  \"/foo/.gz\",\n  \".gz/\",\n  \"/foo/.gz/\",\n  \"foo/.gz/\",\n  /* paths with binary value to check if the function is binary safe*/\n  \"foo\".chr(0).\"bar\",\n  \"/foo\".chr(0).\"bar/\",\n  \"/foo\".chr(0).\"bar\",\n  \"foo\".chr(0).\"bar/\",\n  \"/foo\".chr(0).\"bar/t.gz\"\n);\nfunction check_dirname( $paths ) {\n   $loop_counter = 0;\n   $noOfPaths = count($paths);\n   for( ; $loop_counter < $noOfPaths; $loop_counter++ ) {\n     echo \"\\n--Iteration \";\n     echo $loop_counter + 1;\n     echo \" --\\n\";\n     var_dump( dirname($paths[$loop_counter]) );\n   }\n}\necho \"*** Testing basic operations ***\\n\";\ncheck_dirname( $file_paths );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
