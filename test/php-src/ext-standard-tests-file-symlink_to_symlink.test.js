// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/symlink_to_symlink.phpt
  it("symlink() using a relative path, and symlink() to a symlink", function () {
    expect(parser.parseCode("<?php\n$prefix = __FILE__;\ntouch($prefix . \"_file\");\n// symlink to a regular file using a relative dest\nsymlink(basename($prefix . \"_file\"), $prefix . \"_link1\");\n// symlink to a symlink using a relative path\nsymlink(basename($prefix . \"_link1\"), $prefix . \"_link2\");\n// symlink to a non-existent path\n@unlink($prefix . \"_nonexistent\");\nsymlink(basename($prefix . \"_nonexistent\"), $prefix . \"_link3\");\n// symlink to a regular file using an absolute path\nsymlink($prefix . \"_file\", $prefix . \"_link4\");\n// symlink to a symlink using an absolute path\nsymlink($prefix . \"_link4\", $prefix . \"_link5\");\nvar_dump(readlink($prefix . \"_link1\"));\nvar_dump(readlink($prefix . \"_link2\"));\nvar_dump(readlink($prefix . \"_link3\"));\nvar_dump(readlink($prefix . \"_link4\"));\nvar_dump(readlink($prefix . \"_link5\"));\nunlink($prefix . \"_link5\");\nunlink($prefix . \"_link4\");\nunlink($prefix . \"_link3\");\nunlink($prefix . \"_link2\");\nunlink($prefix . \"_link1\");\nunlink($prefix . \"_file\");\n?>")).toMatchSnapshot();
  });
});
