// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvshm/tests/003.phpt
  it("shm_detach() tests", function () {
    expect(parser.parseCode("<?php\n$key = ftok(__DIR__.\"/003.phpt\", 'q');\n$s = shm_attach($key);\nvar_dump(shm_detach($s));\ntry {\n    shm_detach($s);\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    shm_remove($s);\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
