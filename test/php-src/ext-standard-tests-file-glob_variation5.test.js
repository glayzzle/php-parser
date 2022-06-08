// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/glob_variation5.phpt
  it("Test glob() function: ensure no platform difference, variation 3", function () {
    expect(parser.parseCode("<?php\n$path = __DIR__;\n$open_basedir = '/some_directory_we_are_hopefully_not_running_tests_from';\nini_set('open_basedir', $open_basedir);\nvar_dump(glob(\"$path/*.none\"));\nvar_dump(glob(\"$path/?.none\"));\nvar_dump(glob(\"$path/*{hello,world}.none\"));\nvar_dump(glob(\"$path/*/nothere\"));\nvar_dump(glob(\"$path/[aoeu]*.none\"));\nvar_dump(glob(\"$path/directly_not_exists\"));\nvar_dump($open_basedir == ini_get('open_basedir'));\n?>")).toMatchSnapshot();
  });
});
