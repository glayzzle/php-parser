// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_aliases.phpt
  it("LOB method aliases", function () {
    expect(parser.parseCode("<?php\n// Function existence\necho \"Test 1\\n\";\nvar_dump(function_exists('oci_lob_load'));\nvar_dump(function_exists('oci_lob_tell'));\nvar_dump(function_exists('oci_lob_truncate'));\nvar_dump(function_exists('oci_lob_erase'));\nvar_dump(function_exists('oci_lob_flush'));\nvar_dump(function_exists('ocisetbufferinglob'));\nvar_dump(function_exists('ocigetbufferinglob'));\nvar_dump(function_exists('oci_lob_rewind'));\nvar_dump(function_exists('oci_lob_read'));\nvar_dump(function_exists('oci_lob_eof'));\nvar_dump(function_exists('oci_lob_seek'));\nvar_dump(function_exists('oci_lob_write'));\nvar_dump(function_exists('oci_lob_append'));\nvar_dump(function_exists('oci_lob_size'));\nvar_dump(function_exists('oci_lob_export'));\nvar_dump(function_exists('oci_lob_export'));\nvar_dump(function_exists('oci_lob_import'));\nvar_dump(function_exists('oci_lob_save'));\nvar_dump(function_exists('oci_lob_import'));\nvar_dump(function_exists('oci_free_descriptor'));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
