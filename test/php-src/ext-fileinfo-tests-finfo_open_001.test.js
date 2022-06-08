// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_open_001.phpt
  it("finfo_open(): Testing magic_file names", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(finfo_open(FILEINFO_MIME, \"\\0\"));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(finfo_open(FILEINFO_MIME, NULL));\nvar_dump(finfo_open(FILEINFO_MIME, ''));\nvar_dump(finfo_open(FILEINFO_MIME, 123));\nvar_dump(finfo_open(FILEINFO_MIME, 1.0));\nvar_dump(finfo_open(FILEINFO_MIME, '/foo/bar/inexistent'));\n?>")).toMatchSnapshot();
  });
});
