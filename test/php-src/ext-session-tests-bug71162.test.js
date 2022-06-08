// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug71162.phpt
  it("updateTimestamp never called when session data is empty", function () {
    expect(parser.parseCode("<?php\nclass MySessionHandler extends SessionHandler implements SessionUpdateTimestampHandlerInterface\n{\n    public function open($path, $sessname): bool {\n        return TRUE;\n    }\n    public function close(): bool {\n        return TRUE;\n    }\n    public function read($sessid): string|false {\n        return '';\n    }\n    public function write($sessid, $sessdata): bool {\n        echo __FUNCTION__, PHP_EOL;\n        return TRUE;\n    }\n    public function destroy($sessid): bool {\n        return TRUE;\n    }\n    public function gc($maxlifetime): int|false {\n        return TRUE;\n    }\n    public function create_sid(): string {\n        return sha1(random_bytes(32));\n    }\n    public function validateId($sid): bool {\n        return TRUE;\n    }\n    public function updateTimestamp($sessid, $sessdata): bool {\n        echo __FUNCTION__, PHP_EOL;\n        return TRUE;\n    }\n}\nob_start();\n$handler = new MySessionHandler();\nsession_set_save_handler($handler);\nsession_id(sha1(''));\nvar_dump(session_id());\nvar_dump(session_start(['lazy_write'=>1]));\nsession_commit();\nsession_id(sha1(''));\nvar_dump(session_id());\nvar_dump(session_start(['lazy_write'=>1]));\nsession_commit();\nsession_id(sha1(''));\nvar_dump(session_id());\nvar_dump(session_start(['lazy_write'=>0]));\nsession_commit();\n?>")).toMatchSnapshot();
  });
});
