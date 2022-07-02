// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lstat_stat_variation20.phpt
  it("Test lstat() and stat() functions: usage variations - link names stored in array/object", function () {
    expect(parser.parseCode("<?php\n/* test for stats of link when their names are stored in object and array */\n$file_path = __DIR__;\nrequire \"$file_path/file.inc\";\n$fp = fopen(\"$file_path/lstat_stat_variation20.tmp\", \"w\");  // temp file\nfclose($fp);\n// temp link\nsymlink(\"$file_path/lstat_stat_variation20.tmp\", \"$file_path/lstat_stat_variation20_link.tmp\");\necho \"*** Testing lstat() with linkname stored inside an object/array ***\\n\";\nclass names {\n  public $var_name;\n  public function __construct($name) {\n    $this->var_name = $name;\n  }\n}\n// link name stored in an object\n$link_object = new names(\"$file_path/lstat_stat_variation20_link.tmp\");\n// link name stored in side an array\n// with default numeric key\n$link_array = array(\"$file_path/lstat_stat_variation20_link.tmp\");\n// with string key index\n$link_array_with_key = array(\"linkname\" => \"$file_path/lstat_stat_variation20_link.tmp\");\necho \"\\n-- Testing lstat() on link name stored inside an object --\\n\";\nvar_dump( lstat($link_object->var_name) );\necho \"\\n-- Testing stat() on link name stored inside an array --\\n\";\nvar_dump( stat($link_array[0]) ); // with default numeric index\nvar_dump( stat($link_array_with_key[\"linkname\"]) ); // with string key\nvar_dump( stat($link_array_with_key['linkname']) );\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
