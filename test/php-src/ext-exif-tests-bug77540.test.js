// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug77540.phpt
  it("Bug 77540 (Invalid Read on exif_process_SOFn)", function () {
    expect(parser.parseCode("<?php\n$width = $height = 42;\n$s = exif_thumbnail(__DIR__.\"/bug77540.jpg\", $width, $height);\necho \"Width \".$width.\"\\n\";\necho \"Height \".$height.\"\\n\";\n?>\nDONE")).toMatchSnapshot();
  });
});
