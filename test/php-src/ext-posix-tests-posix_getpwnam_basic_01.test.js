// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getpwnam_basic_01.phpt
  it("Test posix_getpwnam() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  $uid = posix_geteuid();\n  $user = posix_getpwuid($uid);\n  $username = $user['name'];\n  $info = posix_getpwnam($username);\n  print_r($info);\n  var_dump($username == $info['name']);\n?>\n===DONE====")).toMatchSnapshot();
  });
});
