// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug70133.phpt
  it("Bug #70133 (Extended SessionHandler::read is ignoring $session_id when calling parent)", function () {
    expect(parser.parseCode("<?php\nclass CustomReadHandler extends \\SessionHandler {\n    public function read($session_id): string|false {\n        return parent::read('mycustomsession');\n    }\n}\nob_start();\nsession_set_save_handler(new CustomReadHandler(), true);\nsession_id('mycustomsession');\nsession_start();\n$_SESSION['foo'] = 'hoge';\nvar_dump(session_id());\nsession_commit();\nsession_id('otherid');\nsession_start();\nvar_dump($_SESSION);\nvar_dump(session_id());\n?>")).toMatchSnapshot();
  });
});
