// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_variation3.phpt
  it("Test getimagesize() function : variation - Passing non image files", function () {
    expect(parser.parseCode("<?php\n$file_types_array = array (\n    //File containing text string\n    \"File with text data\" => \"test.txt\",\n    //File containing forcibly corrupted bmp image\n    \"File with corrupted BMP data\" => \"200x100_unknown.unknown\",\n    //File which doesn't exist\n     \"Non-existent file\" => \"nofile.ext\",\n    //File having no data\n    \"Empty File\" => \"blank_file.bmp\"\n);\necho \"*** Testing getimagesize() : variation ***\\n\";\n//loop through each element of the array for filename\nforeach($file_types_array as $key => $filename) {\n      echo \"\\n-- $key ($filename) --\\n\";\n      var_dump( getimagesize(__DIR__.\"/$filename\" ) );\n      var_dump( getimagesize(__DIR__.\"/$filename\", $info) );\n      var_dump( $info );\n};\n?>")).toMatchSnapshot();
  });
});
