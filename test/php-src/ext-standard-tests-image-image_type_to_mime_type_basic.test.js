// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/image_type_to_mime_type_basic.phpt
  it("image_type_to_mime_type()", function () {
    expect(parser.parseCode("<?php\necho \"Starting image_type_to_mime_type() test\\n\\n\";\n$image_types = array (\n    IMAGETYPE_GIF,\n    IMAGETYPE_JPEG,\n    IMAGETYPE_PNG,\n    IMAGETYPE_SWF,\n    IMAGETYPE_PSD,\n    IMAGETYPE_BMP,\n    IMAGETYPE_TIFF_II,\n    IMAGETYPE_TIFF_MM,\n    IMAGETYPE_JPC,\n    IMAGETYPE_JP2,\n    IMAGETYPE_JPX,\n    IMAGETYPE_JB2,\n    IMAGETYPE_IFF,\n    IMAGETYPE_WBMP,\n    IMAGETYPE_JPEG2000,\n    IMAGETYPE_XBM,\n    IMAGETYPE_WEBP\n);\n    foreach($image_types as $image_type) {\n        var_dump(image_type_to_mime_type($image_type));\n    }\necho \"\\nDone image_type_to_mime_type() test\\n\";\n?>")).toMatchSnapshot();
  });
});
