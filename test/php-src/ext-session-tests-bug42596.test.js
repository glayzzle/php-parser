// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug42596.phpt
  it("Bug #42596 (session.save_path MODE option will not set \"write\" bit for group or world)", function () {
    expect(parser.parseCode("<?php\n$sessdir = __DIR__.'/bug42596/';\n@rmdir($sessdir);\nmkdir($sessdir);\n$save_path = '0;0777;'.$sessdir;\numask(0);\nsession_save_path($save_path);\nsession_start();\necho \"hello world\\n\";\nsession_write_close();\nforeach (glob($sessdir. \"*\") as $sessfile) {\n  var_dump(decoct(fileperms($sessfile)));\n  unlink($sessfile);\n}\nrmdir($sessdir);\n?>")).toMatchSnapshot();
  });
});
