// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/shmop/tests/shmop_open_private.phpt
  it("shmop_open with IPC_PRIVATE creates private SHM", function () {
    expect(parser.parseCode("<?php\n$write = 'test';\n$shm1 = shmop_open(0, 'c', 0777, 1024);\nshmop_write($shm1, $write, 0);\n$shm2 = shmop_open(0, 'c', 0777, 1024);\n$read = shmop_read($shm2, 0, 4);\nvar_dump(is_string($read) && $read !== $write);\n?>")).toMatchSnapshot();
  });
});
