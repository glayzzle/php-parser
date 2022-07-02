// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_variation2-win32.phpt
  it("Test copy() function: usage variations - destination file names(special chars)", function () {
    expect(parser.parseCode("<?php\n/* Test copy() function: In creation of destination file names containing special characters\n     and checking the existence and size of destination files\n*/\necho \"*** Test copy() function: destination file names containing special characters ***\\n\";\n$file_path = __DIR__;\n$src_file_name = $file_path.\"/copy_variation2.tmp\";\n$file_handle = fopen($src_file_name, \"w\");\nfwrite( $file_handle, str_repeat(\"Hello2World...\\n\", 100) );\nfclose($file_handle);\n/* array of destination file names */\n$dest_files = array(\n  /* File names containing special(non-alpha numeric) characters */\n  \"_copy_variation2.tmp\",\n  \"@copy_variation2.tmp\",\n  \"#copy_variation2.tmp\",\n  \"+copy_variation2.tmp\",\n  \"?copy_variation2.tmp\",\n  \">copy_variation2.tmp\",\n  \"!copy_variation2.tmp\",\n  \"&copy_variation2.tmp\",\n  \"(copy_variation2.tmp\",\n  \":copy_variation2.tmp\",\n  \";copy_variation2.tmp\",\n  \"=copy_variation2.tmp\",\n  \"[copy_variation2.tmp\",\n  \"^copy_variation2.tmp\",\n  \"{copy_variation2.tmp\",\n  \"|copy_variation2.tmp\",\n  \"~copy_variation2.tmp\",\n  \"\\$copy_variation2.tmp\"\n);\necho \"Size of the source file before copy operation => \";\nvar_dump( filesize(\"$src_file_name\") );\nclearstatcache();\necho \"\\n--- Now applying copy() on source file to create copies ---\";\n$count = 1;\nforeach($dest_files as $dest_file) {\n  echo \"\\n-- Iteration $count --\\n\";\n  $dest_file_name = $file_path.\"/$dest_file\";\n  echo \"Copy operation => \";\n  var_dump( copy($src_file_name, $dest_file_name) );\n  echo \"Existence of destination file => \";\n  var_dump( file_exists($dest_file_name) );\n  if( file_exists($dest_file_name) ) {\n    echo \"Destination file name => \";\n    print($dest_file_name);\n    echo \"\\n\";\n    echo \"Size of source file => \";\n    var_dump( filesize($src_file_name) );\n    clearstatcache();\n    echo \"Size of destination file => \";\n    var_dump( filesize($dest_file_name) );\n    clearstatcache();\n    unlink($dest_file_name);\n  }\n  $count++;\n}\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
