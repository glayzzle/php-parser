// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_basic.phpt
  it("Test getimagesize() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$imagetype_filenames = array(\n      // GIF file\n      \"GIF image file\" => \"200x100.gif\",\n      //JPEG file\n      \"JPEG image file\" => \"200x100.jpg\",\n      //PNG file\n      \"PNG image file\" => \"200x100.png\",\n      //SWF file\n      \"SWF image file\" => \"200x100.swf\",\n      //BMP file\n      \"BMP image file\" => \"200x100.bmp\",\n      //TIFF intel byte order\n      \"TIFF intel byte order image file\" => \"200x100.tiff\",\n      //JPC file\n      \"JPC image file\" => \"test1pix.jpc\",\n      //JP2 file\n      \"JP2 image file\" => \"test1pix.jp2\",\n      //IFF file\n      \"IFF image file\" => \"test4pix.iff\"\n);\necho \"*** Testing getimagesize() : basic functionality ***\\n\";\n// loop through each element of the array for imagetype\nforeach($imagetype_filenames as $key => $filename) {\n      echo \"\\n-- $key ($filename) --\\n\";\n      var_dump( getimagesize(__DIR__.\"/$filename\", $info) );\n      var_dump( $info );\n};\n?>")).toMatchSnapshot();
  });
});
