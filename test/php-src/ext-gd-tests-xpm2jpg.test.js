// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/xpm2jpg.phpt
  it("xpm --> jpeg conversion test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"XPM to JPEG conversion: \";\n    echo imagejpeg(imagecreatefromxpm($cwd . \"/conv_test.xpm\"), $cwd . \"/test_xpm.jpeg\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    @unlink($cwd . \"/test_xpm.jpeg\");\n?>")).toMatchSnapshot();
  });
});
