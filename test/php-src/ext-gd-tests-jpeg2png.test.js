// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/jpeg2png.phpt
  it("jpeg <--> png conversion test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"PNG to JPEG conversion: \";\n    echo imagejpeg(imagecreatefrompng($cwd . \"/conv_test.png\"), $cwd . \"/test_jpeg.jpeg\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"Generated JPEG to PNG conversion: \";\n    echo imagepng(imagecreatefromjpeg($cwd . \"/test_jpeg.jpeg\"), $cwd . \"/test_jpng.png\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"JPEG to PNG conversion: \";\n    echo imagepng(imagecreatefromjpeg($cwd . \"/conv_test.jpg\"), $cwd . \"/test_png.png\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"Generated PNG to JPEG conversion: \";\n    echo imagejpeg(imagecreatefrompng($cwd . \"/test_png.png\"), $cwd . \"/test_pjpeg.jpeg\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    @unlink($cwd . \"/test_jpeg.jpeg\");\n    @unlink($cwd . \"/test_jpng.png\");\n    @unlink($cwd . \"/test_png.png\");\n    @unlink($cwd . \"/test_pjpeg.jpeg\");\n?>")).toMatchSnapshot();
  });
});
