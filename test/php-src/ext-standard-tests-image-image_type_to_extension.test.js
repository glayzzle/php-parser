// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/image_type_to_extension.phpt
  it("image_type_to_extension()", function () {
    expect(parser.parseCode("<?php\n    $constants = array(\n        \"IMAGETYPE_GIF\"      => IMAGETYPE_GIF,\n        \"IMAGETYPE_JPEG\"     => IMAGETYPE_JPEG,\n        \"IMAGETYPE_PNG\"      => IMAGETYPE_PNG,\n        \"IMAGETYPE_SWF\"      => IMAGETYPE_SWF,\n        \"IMAGETYPE_PSD\"      => IMAGETYPE_PSD,\n        \"IMAGETYPE_BMP\"      => IMAGETYPE_BMP,\n        \"IMAGETYPE_TIFF_II\"  => IMAGETYPE_TIFF_II,\n        \"IMAGETYPE_TIFF_MM\"  => IMAGETYPE_TIFF_MM,\n        \"IMAGETYPE_JPC\"      => IMAGETYPE_JPC,\n        \"IMAGETYPE_JP2\"      => IMAGETYPE_JP2,\n        \"IMAGETYPE_JPX\"      => IMAGETYPE_JPX,\n        \"IMAGETYPE_JB2\"      => IMAGETYPE_JB2,\n        \"IMAGETYPE_IFF\"      => IMAGETYPE_IFF,\n        \"IMAGETYPE_WBMP\"     => IMAGETYPE_WBMP,\n        \"IMAGETYPE_JPEG2000\" => IMAGETYPE_JPEG2000,\n        \"IMAGETYPE_XBM\"      => IMAGETYPE_XBM,\n        \"IMAGETYPE_WEBP\"     => IMAGETYPE_WEBP,\n        \"IMAGETYPE_AVIF\"     => IMAGETYPE_AVIF,\n    );\n    foreach($constants as $name => $constant) {\n        printf(\"Constant: %s\\n\\tWith dot: %s\\n\\tWithout dot: %s\\n\", $name, image_type_to_extension($constant), image_type_to_extension($constant, false));\n    }\n    var_dump(image_type_to_extension(1000000, false));\n    var_dump(image_type_to_extension(0));\n?>\nDone")).toMatchSnapshot();
  });
});
