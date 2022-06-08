// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_seek_error_001.phpt
  it("SplFileObject::seek function - test parameters", function () {
    expect(parser.parseCode("<?php\n$obj = new SplFileObject(__FILE__);\ntry {\n    $obj->seek(-1);\n} catch (\\ValueError $e) {\n    echo($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
