// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_rename_mb_names.phpt
  it("Test rename() with a dir for multibyte filenames", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$prefix = create_data(\"file2_mb\");\n$fw_orig = $prefix . DIRECTORY_SEPARATOR . \"Ελλάδα.txt\";\n$fw_copied = $prefix . DIRECTORY_SEPARATOR . \"Ελλάδα_copy.txt\";\n$fw_renamed = $prefix . DIRECTORY_SEPARATOR . \"測試多字節路徑17.txt\";\n$old_cp = get_active_cp();\nset_active_cp(65001);\nvar_dump(copy($fw_orig, $fw_copied));\nvar_dump(get_basename_with_cp($fw_copied, get_active_cp(), false));\nvar_dump(file_exists($fw_copied));\nvar_dump(rename($fw_copied, $fw_renamed));\nvar_dump(get_basename_with_cp($fw_renamed, get_active_cp(), false));\nvar_dump(file_exists($fw_renamed));\nvar_dump(unlink($fw_renamed));\nset_active_cp($old_cp);\nremove_data(\"file2_mb\");\n?>")).toMatchSnapshot();
  });
});
