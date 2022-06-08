// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_setInfoClass_error.phpt
  it("SplFileInfo::setInfoClass() throws exception for invalid class", function () {
    expect(parser.parseCode("<?php\n$info = new SplFileInfo(__FILE__);\ntry {\n    $info->setInfoClass('stdClass');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
