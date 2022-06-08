// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagefilter_error1.phpt
  it("Testing wrong parameter passing in imagefilter() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(180, 30);\ntry {\n    var_dump(imagefilter($image));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
