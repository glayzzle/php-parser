// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_256_ico.phpt
  it("GetImageSize() for ico format with 256px height", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getimagesize() : 256px ico ***\\n\";\nvar_dump(getimagesize(__DIR__ . \"/32x256.ico\"));\n?>\n===DONE===")).toMatchSnapshot();
  });
});
