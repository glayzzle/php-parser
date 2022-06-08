// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvshm/tests/004.phpt
  it("shm_put_var() tests", function () {
    expect(parser.parseCode("<?php\n$key = ftok(__FILE__, 't');\n$s = shm_attach($key, 1024);\nvar_dump(shm_put_var($s, -1, \"qwerty\"));\nvar_dump(shm_put_var($s, 10, \"qwerty\"));\nvar_dump(shm_put_var($s, 10, \"qwerty\"));\n$string = str_repeat(\"test\", 512);\nvar_dump(shm_put_var($s, 11, $string));\nshm_remove($s);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
