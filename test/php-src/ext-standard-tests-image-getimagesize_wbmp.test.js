// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_wbmp.phpt
  it("GetImageSize() for wbmp format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getimagesize() : wbmp format ***\\n\";\nvar_dump(getimagesize(__DIR__ . \"/75x50.wbmp\", $arr));\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
