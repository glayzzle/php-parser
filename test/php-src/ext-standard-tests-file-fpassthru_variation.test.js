// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fpassthru_variation.phpt
  it("Test fpassthru() function: Variations", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fpassthru() function with files ***\\n\\n\";\necho \"--- Testing with different offsets ---\\n\";\n$file_name = __DIR__.\"/passthru_variation.tmp\";\n$file_write = fopen($file_name, \"w\");\nfwrite($file_write, \"1234567890abcdefghijklmnopqrstuvwxyz\");\nfclose($file_write);\n$file_read = fopen($file_name, \"r\");\n$offset_arr = array(\n  /* Positive offsets */\n  0,\n  1,\n  5,\n  10,\n  20,\n  30,\n  35,\n  36,\n  70,\n  /* Negative offsets, the file pointer should be at the end of file\n  to get data */\n  -1,\n  -5,\n  -10,\n  -20,\n  -35,\n  -36,\n  -70\n);\nfor( $i=0; $i<count($offset_arr); $i++ ) {\n  echo \"-- Iteration $i --\\n\";\n  if( $offset_arr[$i] >= 0 ) {\n    fseek($file_read, $offset_arr[$i], SEEK_SET);\n    var_dump(fpassthru($file_read) );\n    rewind( $file_read );\n  }else\n    {\n      fseek($file_read, $offset_arr[$i], SEEK_END);\n      var_dump( fpassthru($file_read) );\n      rewind( $file_read );\n    }\n}\nfclose($file_read);  // closing the handle\necho \"\\n--- Testing with binary mode file ---\\n\";\n/* Opening the file in binary read mode */\n$file_read = fopen($file_name, \"rb\");\nfseek($file_read, 12, SEEK_SET);\nvar_dump(fpassthru($file_read) );\nrewind( $file_read );\nfclose($file_read);\nunlink($file_name);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
