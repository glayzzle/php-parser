// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvshm/tests/shutdown_crash_0.phpt
  it("Shutdown crash when attached/removed same key segment multiple times", function () {
    expect(parser.parseCode("<?php\n/*$key = ftok(__FILE__, 't');\nvar_dump($key);*/\n$key = 42;\nvar_dump($s = shm_attach($key, 1024));\nshm_remove($s);\nvar_dump($s = shm_attach($key, 1024));\nshm_remove($s);\n?>")).toMatchSnapshot();
  });
});
