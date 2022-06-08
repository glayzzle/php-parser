// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug70362.phpt
  it("Bug #70362 (Can't copy() large 'data://' with open_basedir)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . '/bug70362.txt';\n$data = str_repeat('0', 4096);\n$data = 'data://plain/text;base64,' . base64_encode($data);\nvar_dump(copy($data, $file));\necho file_get_contents($file);\n?>")).toMatchSnapshot();
  });
});
