// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filesize_variation3.phpt
  it("Test filesize() function: usage variations - file size after truncate", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\necho \"*** Testing filesize(): usage variations ***\\n\";\n$filename =  $file_path.\"/filesize_variation3.tmp\";\n$file_handle = fopen($filename, \"w\");\nfwrite($file_handle, str_repeat(\"Hello,World \", 1000) ); // create file of size 12000 bytes\nfclose($file_handle);\necho \"-- Testing filesize() after truncating the file to a new length --\\n\";\n// truncate the file created earlier in subdir, the size of the file is 12000bytes\n// truncate the same file, in the loop , each time with the decrement in size by 1200 bytes,\n//  until -1200bytes size\nfor($size = filesize($filename); $size>=-1200; $size-=1200) {\n    $file_handle = fopen($filename, \"r+\");\n    try {\n        var_dump( ftruncate($file_handle, $size) );\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    fclose($file_handle);\n    var_dump( filesize($filename) );\n    clearstatcache();\n}\n?>")).toMatchSnapshot();
  });
});
