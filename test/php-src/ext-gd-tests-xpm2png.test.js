// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/xpm2png.phpt
  it("xpm --> png conversion test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"XPM to PNG conversion: \";\n    echo imagepng(imagecreatefromxpm($cwd . \"/conv_test.xpm\"), $cwd . \"/test_xpm.png\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    @unlink($cwd . \"/test_xpm.png\");\n?>")).toMatchSnapshot();
  });
});
