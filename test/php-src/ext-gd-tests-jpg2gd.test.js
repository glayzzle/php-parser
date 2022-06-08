// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/jpg2gd.phpt
  it("jpeg <--> gd1/gd2 conversion test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"JPEG to GD1 conversion: \";\n    echo imagegd(imagecreatefromjpeg($cwd . \"/conv_test.jpg\"), $cwd . \"/test_jpeg.gd1\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"JPEG to GD2 conversion: \";\n    echo imagegd2(imagecreatefromjpeg($cwd . \"/conv_test.jpg\"), $cwd . \"/test_jpeg.gd2\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"GD1 to JPEG conversion: \";\n    echo imagejpeg(imagecreatefromgd($cwd . \"/test_jpeg.gd1\"), $cwd . \"/test_gd1.jpeg\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"GD2 to JPEG conversion: \";\n    echo imagejpeg(imagecreatefromgd2($cwd . \"/test_jpeg.gd2\"), $cwd . \"/test_gd2.jpeg\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    @unlink($cwd . \"/test_jpeg.gd1\");\n    @unlink($cwd . \"/test_jpeg.gd2\");\n    @unlink($cwd . \"/test_gd1.jpeg\");\n    @unlink($cwd . \"/test_gd2.jpeg\");\n?>")).toMatchSnapshot();
  });
});
