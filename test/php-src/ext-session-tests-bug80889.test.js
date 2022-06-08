// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug80889.phpt
  it("Bug #80889 (Cannot set save handler when save_handler is invalid)", function () {
    expect(parser.parseCode("<?php\nclass DummyHandler implements SessionHandlerInterface {\n    public function open($savePath, $sessionName): bool {\n        return true;\n    }\n    public function close(): bool {\n        return true;\n    }\n    public function read($id): string|false {\n        return '';\n    }\n    public function write($id, $data): bool {\n        return true;\n    }\n    public function destroy($id): bool {\n        return true;\n    }\n    public function gc($maxlifetime): int|false {\n        return true;\n    }\n}\n$initHandler = ini_get('session.save_handler');\nsession_set_save_handler(new DummyHandler());\n$setHandler = ini_get('session.save_handler');\nvar_dump($initHandler, $setHandler);\n?>")).toMatchSnapshot();
  });
});
