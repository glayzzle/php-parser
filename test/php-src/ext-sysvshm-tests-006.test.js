// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvshm/tests/006.phpt
  it("shm_remove_var() tests", function () {
    expect(parser.parseCode("<?php\n$key = ftok(__FILE__, 't');\n$s = shm_attach($key, 1024);\ntry {\n    shm_put_var($s, 1, \"test string\");\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(shm_remove_var($s, -10));\nvar_dump(shm_get_var($s, 1));\nvar_dump(shm_remove_var($s, 1));\nvar_dump(shm_get_var($s, 1));\nvar_dump(shm_remove_var($s, 1));\nvar_dump(shm_get_var($s, 1));\nshm_remove($s);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
