// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/glob-wrapper.phpt
  it("Glob wrapper bypasses open_basedir", function () {
    expect(parser.parseCode("<?php\nforeach ( [ __DIR__, \"glob://\".__DIR__ ] as $spec) {\n  echo \"** Opening $spec\\n\";\n  $dir = opendir($spec);\n  if (!$dir) {\n    echo \"Failed to open $spec\\n\";\n    continue;\n  }\n  if (false === readdir($dir)) {\n    echo \"No files in $spec\\n\";\n    continue;\n  }\n}\n?>")).toMatchSnapshot();
  });
});
