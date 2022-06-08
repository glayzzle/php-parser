// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/005_variation2.phpt
  it("Test fileatime(), filemtime(), filectime() & touch() functions : usage variation", function () {
    expect(parser.parseCode("<?php\nfunction stat_fn( $filename ) {\n  echo \"\\n-- File '$filename' --\\n\";\n  echo \"-- File access time is => \";\n  echo fileatime($filename).\"\\n\";\n  clearstatcache();\n  echo \"-- File modification time is => \";\n  echo filemtime($filename).\"\\n\";\n  clearstatcache();\n  echo \"-- inode change time is => \";\n  echo filectime($filename).\"\\n\";\n  clearstatcache();\n}\necho \"*** Testing fileattime(), filemtime(), filectime() & touch() : usage variations ***\\n\";\necho \"\\n*** testing touch ***\\n\";\n$b = touch(false);\n$c = touch('');\n$d = touch(' ');\n$e = touch('|');\nvar_dump($a);\nvar_dump($b);\nvar_dump($c);\nvar_dump($d);\nvar_dump($e);\necho \"\\n*** testing file info ***\";\nstat_fn(false);\nstat_fn('');\nstat_fn(' ');\nstat_fn('|');\nvar_dump(unlink(' '));\nvar_dump(unlink('|'));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
