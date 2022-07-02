// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/bug78220.phpt
  it("Bug #78220 (Can't access OneDrive folder)", function () {
    expect(parser.parseCode("<?php\n$onedrive_dirs = array_unique([getenv('OneDrive'), getenv('OneDriveCommercial')]);\nforeach ($onedrive_dirs as $dir) {\n    if ($dir && scandir($dir) === FALSE) {\n        echo \"can't scan $dir\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
