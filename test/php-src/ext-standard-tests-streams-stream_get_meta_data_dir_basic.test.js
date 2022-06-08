// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_dir_basic.phpt
  it("stream_get_meta_data() on directories", function () {
    expect(parser.parseCode("<?php\n$dir = opendir(__DIR__);\nvar_dump(stream_get_meta_data($dir));\nclosedir($dir);\n$dirObject = dir(__DIR__);\nvar_dump(stream_get_meta_data($dirObject->handle));\n?>")).toMatchSnapshot();
  });
});
