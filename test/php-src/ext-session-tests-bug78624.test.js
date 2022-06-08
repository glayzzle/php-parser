// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug78624.phpt
  it("Test session_set_save_handler() : session_gc() returns the number of deleted records.", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Test session_set_save_handler() : session_gc() returns the number of deleted records. ***\\n\";\nclass MySession implements SessionHandlerInterface {\n    public function open($path, $name): bool {\n        echo 'Open', \"\\n\";\n        return true;\n    }\n    public function read($key): string|false {\n        echo 'Read ', session_id(), \"\\n\";\n        return '';\n    }\n    public function write($key, $data): bool {\n        echo 'Write ', session_id(), \"\\n\";\n        return true;\n    }\n    public function close(): bool {\n        echo 'Close ', session_id(), \"\\n\";\n        return true;\n    }\n    public function destroy($key): bool {\n        echo 'Destroy ', session_id(), \"\\n\";\n        return true;\n    }\n    public function gc($ts): int|false {\n        echo 'Garbage collect', \"\\n\";\n        return 1;\n    }\n}\n$handler = new MySession;\nsession_set_save_handler($handler);\nsession_start();\nvar_dump(session_gc());\nsession_write_close();\n?>")).toMatchSnapshot();
  });
});
