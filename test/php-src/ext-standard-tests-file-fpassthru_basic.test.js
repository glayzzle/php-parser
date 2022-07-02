// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fpassthru_basic.phpt
  it("Test fpassthru() function: Basic functionality", function () {
    expect(parser.parseCode("<?php\n$file_name = __DIR__.\"/passthru.tmp\";\n$write_handle = fopen($file_name, \"w\");\n$string = \"Hello, world\\n, abcdefg\\tadsdsfdf\\n8u2394723947\\t$%$%#$%#$%#^#%^\n          Hello, world\\n, abcdefg\\tadsdsfdf\\n8u2394723947\\t$%$%#$%#$%#^#%^\\n\";\nif(substr(PHP_OS, 0, 3) == \"WIN\")  {\n    $string = str_replace(\"\\r\",'', $string);\n}\nfwrite($write_handle, $string);\nfclose($write_handle);\n$read_handle = fopen($file_name, \"r\");\necho \"*** Test basic functionality of fpassthru() function ***\\n\";\necho \"\\n-- Before seek operation --\\n\";\nvar_dump( fpassthru($read_handle) );\necho \"\\n-- After seeking position to 0 --\\n\";\nfseek($read_handle, 0);\nvar_dump( fpassthru($read_handle) );\necho \"\\n-- After seeking position to 3 --\\n\";\nfseek($read_handle, 3);\nvar_dump( fpassthru($read_handle) );\necho \"\\n-- After seeking position to 13 --\\n\";\nfseek($read_handle, 13);\nvar_dump( fpassthru($read_handle) );\necho \"\\n-- After seeking position to 14 --\\n\";\nfseek($read_handle, 14);\nvar_dump( fpassthru($read_handle) );\necho \"\\n-- After seeking position to 23 --\\n\";\nfseek($read_handle, 23);\nvar_dump( fpassthru($read_handle) );\necho \"\\n-- After seeking position to 34 --\\n\";\nfseek($read_handle, 34);\nvar_dump( fpassthru($read_handle) );\necho \"\\n-- After seeking position to 1000 --\\n\";\nfseek($read_handle, 1000);\nvar_dump( fpassthru($read_handle) );\nfclose($read_handle);\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
