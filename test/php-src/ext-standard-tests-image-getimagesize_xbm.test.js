// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_xbm.phpt
  it("GetImageSize() for xbm format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getimagesize() : xbm format ***\\n\";\nvar_dump(getimagesize(__DIR__ . \"/75x50.xbm\", $arr));\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
