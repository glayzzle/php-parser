// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/basename_variation1.phpt
  it("basename() with various inputs", function () {
    expect(parser.parseCode("<?php\n$prefixes = array (\n    // drive letters\n    \"A:/\",\n    \"Z:/\",\n    \"A:\\\\\",\n    // other prefixes\n    \"http://\",\n    \"blah://\",\n    \"blah:\\\\\",\n    \"hostname:\",\n    // home directory ~\n    \"~/\",\n    \"~\\\\\",\n);\n$paths = array (\n    \"foo\",\n    \"foo/\",\n    \"foo\\\\\",\n    \"foo.bar\",\n    \"foo.bar/\",\n    \"foo.bar\\\\\",\n    \"dir/foo.bar\",\n    \"dir\\\\foo.bar\",\n    \"dir with spaces/foo.bar\",\n    \"dir with spaces\\\\foo.bar\",\n);\nforeach ($prefixes as $prefix) {\n    foreach ($paths as $path) {\n        $input = $prefix . $path;\n        echo \"basename for path $input is:\\n\";\n        var_dump(basename($input));\n    }\n}\necho \"\\ndone\\n\";\n?>")).toMatchSnapshot();
  });
});
