// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/gif2jpg.phpt
  it("gif --> jpeg conversion test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"GIF to JPEG conversion: \";\n    echo imagejpeg(imagecreatefromgif($cwd . \"/conv_test.gif\"), $cwd . \"/test_gif.jpeg\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    @unlink($cwd . \"/test_gif.jpeg\");\n?>")).toMatchSnapshot();
  });
});
