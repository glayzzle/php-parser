// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/realpath_cache_win32.phpt
  it("realpath_cache_size() and realpath_cache_get()", function () {
    expect(parser.parseCode("<?php\nvar_dump(realpath_cache_size());\n$data = realpath_cache_get();\nvar_dump($data[__FILE__]);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
