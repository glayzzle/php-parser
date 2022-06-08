// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/png2gd.phpt
  it("png <--> gd1/gd2 conversion test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"PNG to GD1 conversion: \";\n    echo imagegd(imagecreatefrompng($cwd . \"/conv_test.png\"), $cwd . \"/test_png.gd1\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"PNG to GD2 conversion: \";\n    echo imagegd2(imagecreatefrompng($cwd . \"/conv_test.png\"), $cwd . \"/test_png.gd2\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"GD1 to PNG conversion: \";\n    echo imagepng(imagecreatefromgd($cwd . \"/test_png.gd1\"), $cwd . \"/test_gd1.png\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"GD2 to PNG conversion: \";\n    echo imagepng(imagecreatefromgd2($cwd . \"/test_png.gd2\"), $cwd . \"/test_gd2.png\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    @unlink($cwd . \"/test_png.gd1\");\n    @unlink($cwd . \"/test_png.gd2\");\n    @unlink($cwd . \"/test_gd1.png\");\n    @unlink($cwd . \"/test_gd2.png\");\n?>")).toMatchSnapshot();
  });
});
