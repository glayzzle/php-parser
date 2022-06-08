// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagewebp_nullbyte_injection.phpt
  it("Testing null byte injection in imagewebp", function () {
    expect(parser.parseCode("<?php\n$image = imagecreate(1,1);// 1px image\ntry {\n    imagewebp($image, \"./foo\\0bar\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
