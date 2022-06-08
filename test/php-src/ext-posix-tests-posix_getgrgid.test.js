// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_getgrgid.phpt
  it("Test posix_getgrgid().", function () {
    expect(parser.parseCode("<?php\n$grp = posix_getgrgid(0);\nif (!isset($grp['name'])) {\n    die('Array index \"name\" does not exist.');\n}\nif (!isset($grp['passwd'])) {\n    die('Array index \"passwd\" does not exist.');\n}\nif (!isset($grp['members'])) {\n    die('Array index \"members\" does not exist.');\n} elseif (!is_array($grp['members'])) {\n    die('Array index \"members\" must be an array.');\n} else {\n    if (count($grp['members']) > 0) {\n        foreach ($grp['members'] as $idx => $username) {\n            if (!is_int($idx)) {\n                die('Index in members Array is not an int.');\n            }\n            if (!is_string($username)) {\n                die('Username in members Array is not of type string.');\n            }\n        }\n    }\n}\nif (!isset($grp['gid'])) {\n    die('Array index \"gid\" does not exist.');\n}\nvar_dump($grp['gid']);\n?>")).toMatchSnapshot();
  });
});
