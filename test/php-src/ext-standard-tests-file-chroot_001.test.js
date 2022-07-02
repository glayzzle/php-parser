// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/chroot_001.phpt
  it("chroot()", function () {
    expect(parser.parseCode("<?php\nmkdir(\"chroot_001_x\");\nvar_dump(is_dir(\"chroot_001_x\"));\nvar_dump(chroot(\"chroot_001_x\"));\nvar_dump(is_dir(\"chroot_001_x\"));\nvar_dump(realpath(\".\"));\n?>")).toMatchSnapshot();
  });
});
