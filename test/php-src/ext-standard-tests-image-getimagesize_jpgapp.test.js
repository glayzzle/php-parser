// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_jpgapp.phpt
  it("Test getimagesize() function : basic functionality - load APP info from jpeg.", function () {
    expect(parser.parseCode("<?php\n/*\n * Load APP info from jpeg\n */\n$arr['this'] = \"will\";\n$arr['all'] = \"be destroyed!\";\n$arr['APP1'] = \"and this too\";\ngetimagesize( __DIR__.\"/testAPP.jpg\", $arr);\nforeach ($arr as $key => $value) {\n    echo \"$key - length: \". strlen($value) .\"; md5: \" . md5($value) .  \"\\n\" ;\n}\n?>")).toMatchSnapshot();
  });
});
