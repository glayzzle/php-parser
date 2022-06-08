// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_output_handler_shift_jis.phpt
  it("mb_output_handler() (Shift_JIS)", function () {
    expect(parser.parseCode("<?php\n// Shift_JIS\nvar_dump(\"�e�X�g�p���{�ꕶ����B���̃��W���[����PHP�Ƀ}���`�o�C�g�֐���񋟂��܂��B\");\n?>")).toMatchSnapshot();
  });
});
