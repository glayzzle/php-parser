// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug79091.phpt
  it("Bug #79091 (heap use-after-free in session_create_id())", function () {
    expect(parser.parseCode("<?php\nclass MySessionHandler implements SessionHandlerInterface, SessionIdInterface, SessionUpdateTimestampHandlerInterface\n{\n    public function close(): bool\n    {\n        return true;\n    }\n    public function destroy($session_id): bool\n    {\n        return true;\n    }\n    public function gc($maxlifetime): int|false\n    {\n        return true;\n    }\n    public function open($save_path, $session_name): bool\n    {\n        return true;\n    }\n    public function read($session_id): string|false\n    {\n        return '';\n    }\n    public function write($session_id, $session_data): bool\n    {\n        return true;\n    }\n    public function create_sid(): string\n    {\n        return uniqid();\n    }\n    public function updateTimestamp($key, $val): bool\n    {\n        return true;\n    }\n    public function validateId($key): bool\n    {\n        return true;\n    }\n}\nob_start();\nvar_dump(session_set_save_handler(new MySessionHandler()));\nvar_dump(session_start());\nob_flush();\nsession_create_id();\n?>")).toMatchSnapshot();
  });
});
