// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug53854.phpt
  it("Bug #53854 (Missing constants for compression type)", function () {
    expect(parser.parseCode("<?php\nvar_dump(ZipArchive::CM_DEFAULT);\nvar_dump(ZipArchive::CM_STORE);\nvar_dump(ZipArchive::CM_SHRINK);\nvar_dump(ZipArchive::CM_REDUCE_1);\nvar_dump(ZipArchive::CM_REDUCE_2);\nvar_dump(ZipArchive::CM_REDUCE_3);\nvar_dump(ZipArchive::CM_REDUCE_4);\nvar_dump(ZipArchive::CM_IMPLODE);\nvar_dump(ZipArchive::CM_DEFLATE);\nvar_dump(ZipArchive::CM_DEFLATE64);\nvar_dump(ZipArchive::CM_PKWARE_IMPLODE);\nvar_dump(ZipArchive::CM_BZIP2);\nvar_dump(ZipArchive::CM_LZMA);\nvar_dump(ZipArchive::CM_TERSE);\nvar_dump(ZipArchive::CM_LZ77);\nvar_dump(ZipArchive::CM_WAVPACK);\nvar_dump(ZipArchive::CM_PPMD);\n?>")).toMatchSnapshot();
  });
});
