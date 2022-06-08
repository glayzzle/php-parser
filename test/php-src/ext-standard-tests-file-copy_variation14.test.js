// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_variation14.phpt
  it("Test copy() function: usage variations - non existing src/dest", function () {
    expect(parser.parseCode("<?php\n/* Test copy(): Trying to create a copy of non-existing source in an existing destination\n     and an existing source in non-existing destination */\n$file_path = __DIR__;\necho \"*** Test copy() function: Trying to create a copy of non-existing source in existing destination ***\";\n$file = $file_path.\"/copy_variation14.tmp\";\n$file_handle =  fopen($file, \"w\");\nfwrite($file_handle, str_repeat(\"Hello2world...\\n\", 100));\nfclose($file_handle);\nvar_dump( copy($file_path.\"/nosuchfile.tmp\", $file_path.\"/copy_nosuchfile.tmp\") );  //With non-existing source\nvar_dump( file_exists($file_path.\"/copy_nosuchfile.tmp\") );\necho \"\\n*** Test copy() function: Trying to create copy of an existing source in non-existing destination ***\";\nvar_dump( copy($file, $file_path.\"/nodir/copy_nosuchfile.tmp\") );  //With non-existing dir path\nvar_dump( file_exists($file_path.\"/nodir/copy_nosuchfile.tmp\") );\nvar_dump( filesize($file) );  //size of the source\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
