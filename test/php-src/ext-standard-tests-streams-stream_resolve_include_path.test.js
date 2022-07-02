// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_resolve_include_path.phpt
  it("stream_resolve_include_path(string path)", function () {
    expect(parser.parseCode("<?php\n$include_path = __DIR__ . '/test_path';\n$include_path_nested = $include_path . '/nested';\n$include_path_file = $include_path . DIRECTORY_SEPARATOR . 'file';\n$include_path_nested_file = $include_path_nested . DIRECTORY_SEPARATOR . 'file';\nmkdir($include_path);\nmkdir($include_path_nested);\nfile_put_contents($include_path_file, 'include_path');\nfile_put_contents($include_path_nested_file, 'include_path');\nset_include_path($include_path . PATH_SEPARATOR . $include_path_nested);\nvar_dump(stream_resolve_include_path('file-does-not-exist'));\nset_include_path($include_path . PATH_SEPARATOR . $include_path_nested);\nvar_dump(stream_resolve_include_path('file'));\nset_include_path($include_path_nested . PATH_SEPARATOR . $include_path);\nvar_dump(stream_resolve_include_path('file'));\n?>")).toMatchSnapshot();
  });
});
