// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/filestat.phpt
  it("various file stat func tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(fileinode(\".\"));\nvar_dump(fileowner(\".\"));\nvar_dump(filegroup(\".\"));\nvar_dump(fileatime(\".\"));\nvar_dump(filectime(\".\"));\nvar_dump(fileinode(\"./..\"));\nvar_dump(fileowner(\"./..\"));\nvar_dump(filegroup(\"./..\"));\nvar_dump(fileatime(\"./..\"));\nvar_dump(filectime(\"./..\"));\nvar_dump(fileinode(__FILE__));\nvar_dump(fileowner(__FILE__));\nvar_dump(filegroup(__FILE__));\nvar_dump(fileatime(__FILE__));\nvar_dump(filectime(__FILE__));\nvar_dump(fileinode(\"/no/such/file/or/dir\"));\nvar_dump(fileowner(\"/no/such/file/or/dir\"));\nvar_dump(filegroup(\"/no/such/file/or/dir\"));\nvar_dump(fileatime(\"/no/such/file/or/dir\"));\nvar_dump(filectime(\"/no/such/file/or/dir\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
