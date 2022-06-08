// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/glob_variation4.phpt
  it("Test glob() function: ensure no platform difference, variation 2", function () {
    expect(parser.parseCode("<?php\n$path = __DIR__;\nini_set('open_basedir', $path);\nvar_dump(glob(\"$path/*.none\"));\nvar_dump(glob(\"$path/?.none\"));\nvar_dump(glob(\"$path/*{hello,world}.none\"));\nvar_dump(glob(\"$path/*/nothere\"));\nvar_dump(glob(\"$path/[aoeu]*.none\"));\nvar_dump(glob(\"$path/directly_not_exists\"));\nvar_dump($path == ini_get('open_basedir'));\n?>")).toMatchSnapshot();
  });
});
