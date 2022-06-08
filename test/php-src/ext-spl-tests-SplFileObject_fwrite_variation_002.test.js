// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fwrite_variation_002.phpt
  it("SplFileObject::fwrite function - writing with two parameters, length > input string length", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.'/SplFileObject_fwrite_variation_002.txt';\nif(file_exists($file)) {\n    unlink($file);\n}\n$obj = New SplFileObject($file,'w');\n$obj->fwrite('test_write',12);\nvar_dump(file_get_contents($file));\n?>")).toMatchSnapshot();
  });
});
