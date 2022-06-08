// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/xpm2gd.phpt
  it("xpm --> gd1/gd2 conversion test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"XPM to GD1 conversion: \";\n    echo imagegd(imagecreatefromxpm($cwd . \"/conv_test.xpm\"), $cwd . \"/test_xpm.gd1\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    echo \"XPM to GD2 conversion: \";\n    echo imagegd2(imagecreatefromxpm($cwd . \"/conv_test.xpm\"), $cwd . \"/test_xpm.gd2\") ? 'ok' : 'failed';\n    echo \"\\n\";\n    @unlink($cwd . \"/test_xpm.gd1\");\n    @unlink($cwd . \"/test_xpm.gd2\");\n?>")).toMatchSnapshot();
  });
});
