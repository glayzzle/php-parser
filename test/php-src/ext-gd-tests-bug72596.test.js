// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72596.phpt
  it("Bug #72596 (imagetypes function won't advertise WEBP support)", function () {
    expect(parser.parseCode("<?php\nvar_dump(function_exists('imagewebp') === (bool) (imagetypes() & IMG_WEBP));\n?>")).toMatchSnapshot();
  });
});
