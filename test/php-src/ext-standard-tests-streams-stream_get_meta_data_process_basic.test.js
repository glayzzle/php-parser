// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_process_basic.phpt
  it("Testing stream_get_meta_data() on a process stream.", function () {
    expect(parser.parseCode("<?php\n$output_file = __FILE__.'.tmp';\n$cmd = \"echo here is some output\";\n$mode = 'rb';\n$handle = popen($cmd, $mode);\n$data = fread($handle, 100);\nvar_dump(stream_get_meta_data($handle));\npclose($handle);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
