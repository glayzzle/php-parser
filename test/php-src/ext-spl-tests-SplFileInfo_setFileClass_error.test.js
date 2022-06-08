// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_setFileClass_error.phpt
  it("SplFileInfo::setFileClass() throws exception for invalid class", function () {
    expect(parser.parseCode("<?php\n$info = new SplFileInfo(__FILE__);\ntry {\n    $info->setFileClass('stdClass');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
