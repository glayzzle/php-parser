// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/req60524-win.phpt
  it("Req #60524 (Specify temporary directory)", function () {
    expect(parser.parseCode("<?php echo sys_get_temp_dir(); ?>")).toMatchSnapshot();
  });
});
