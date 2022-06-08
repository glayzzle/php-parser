// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvshm/tests/005.phpt
  it("shm_get_var() tests", function () {
    expect(parser.parseCode("<?php\n$key = ftok(__FILE__, 't');\n$s = shm_attach($key, 1024);\nshm_put_var($s, -1, \"test string\");\nshm_put_var($s, 0, new stdclass);\nshm_put_var($s, 1, array(1,2,3));\nshm_put_var($s, 2, false);\nshm_put_var($s, 3, null);\nvar_dump(shm_get_var($s, 1000));\nvar_dump(shm_get_var($s, -10000));\nvar_dump(shm_get_var($s, -1));\nvar_dump(shm_get_var($s, 0));\nvar_dump(shm_get_var($s, 1));\nvar_dump(shm_get_var($s, 2));\nvar_dump(shm_get_var($s, 3));\nshm_put_var($s, 3, \"test\");\nshm_put_var($s, 3, 1);\nshm_put_var($s, 3, null);\nvar_dump(shm_get_var($s, 3));\nshm_remove($s);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
