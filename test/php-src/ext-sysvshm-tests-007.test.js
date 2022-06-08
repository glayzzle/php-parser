// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvshm/tests/007.phpt
  it("shm_remove() tests", function () {
    expect(parser.parseCode("<?php\n$key = ftok(__FILE__, 't');\n$s = shm_attach($key, 1024);\nvar_dump(shm_remove($s));\nshm_detach($s);\ntry {\n    shm_remove($s);\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
