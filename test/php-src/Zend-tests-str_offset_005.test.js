// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/str_offset_005.phpt
  it("string offset 005 indirect string modification by error handler", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function(){$GLOBALS['a']=8;});\n$a='a';\nvar_dump($a[$b]);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
