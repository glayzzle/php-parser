// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/precedural_finfo_in_method.phpt
  it("Using procedural finfo API in a method", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function method() {\n        $finfo = finfo_open(FILEINFO_MIME);\n        var_dump(finfo_file($finfo, __FILE__));\n    }\n}\n$test = new Test;\n$test->method();\n?>")).toMatchSnapshot();
  });
});
