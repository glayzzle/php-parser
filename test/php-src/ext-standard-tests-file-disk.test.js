// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/disk.phpt
  it("disk_total_space() and disk_free_space() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(disk_free_space(-1));\nvar_dump(disk_total_space(-1));\nvar_dump(disk_free_space(\"/\"));\nvar_dump(disk_total_space(\"/\"));\nvar_dump(disk_free_space(\"/some/path/here\"));\nvar_dump(disk_total_space(\"/some/path/here\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
