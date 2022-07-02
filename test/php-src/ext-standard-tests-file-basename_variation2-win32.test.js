// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/basename_variation2-win32.phpt
  it("Testing basename() with various values for the suffix parameter", function () {
    expect(parser.parseCode("<?php\n$paths = array (\n    \"foo\",\n    \"foo/\",\n    \"foo\\\\\",\n    \"foo.bar\",\n    \"foo.bar/\",\n    \"foo.bar\\\\\",\n    \"dir/foo.bar\",\n    \"dir\\\\foo.bar\",\n    \"dir with spaces/foo.bar\",\n    \"dir with spaces\\\\foo.bar\",\n);\n$suffixes = array (\n    \".bar\",\n    \".b\",\n    \".\",\n    \" \",\n    \"foo\",\n    \"foo.bar\",\n    \"foo/bar\",\n    \"foo\\\\bar\",\n    \"/\",\n    \"\\\\\",\n);\nforeach ($paths as $path) {\n    foreach ($suffixes as $suffix) {\n        echo \"basename for path $path, supplying suffix $suffix is:\\n\";\n        var_dump(basename($path, $suffix));\n    }\n}\necho \"\\ndone\\n\";\n?>")).toMatchSnapshot();
  });
});
