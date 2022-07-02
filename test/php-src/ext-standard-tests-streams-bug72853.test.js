// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug72853.phpt
  it("Bug #72853 (stream_set_blocking doesn't work)", function () {
    expect(parser.parseCode("<?php\n$descs = array(\n    0 => array('pipe', 'r'), // stdin\n    1 => array('pipe', 'w'), // stdout\n);\n$p = proc_open(\"ls\", $descs, $pipes, '.', NULL, NULL);\nstream_set_blocking($pipes[1], false);\nvar_dump(stream_get_meta_data($pipes[1]));\nstream_set_blocking($pipes[1], true);\nwhile ($outs = fgets($pipes[1], 1024)) {\n}\nvar_dump(stream_get_meta_data($pipes[1]));\nproc_close($p);\n?>")).toMatchSnapshot();
  });
});
