// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/005_variation2-win32.phpt
  it("Test fileatime(), filemtime(), filectime() & touch() functions : usage variation", function () {
    expect(parser.parseCode("<?php\nfunction stat_fn( $filename ) {\n  echo \"\\n-- File '$filename' --\\n\";\n  echo \"-- File access time is => \";\n  echo fileatime($filename).\"\\n\";\n  clearstatcache();\n  echo \"-- File modification time is => \";\n  echo filemtime($filename).\"\\n\";\n  clearstatcache();\n  echo \"-- inode change time is => \";\n  echo filectime($filename).\"\\n\";\n  clearstatcache();\n}\necho \"*** Testing fileattime(), filemtime(), filectime() & touch() : usage variations ***\\n\";\necho \"\\n*** testing file info ***\";\nstat_fn(false);\nstat_fn('');\nstat_fn(' ');\nstat_fn('|');\necho \"\\n*** testing touch ***\\n\";\nvar_dump(touch(false));\nvar_dump(touch(''));\n//php generates permission denied, we generate No such file or dir.\nvar_dump(touch(' '));\nvar_dump(touch('|'));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
