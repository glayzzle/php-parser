// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_commit_variation5.phpt
  it("Test session_commit() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_commit() : variation ***\\n\";\n$id = md5(uniqid());\nvar_dump(session_id($id));\nvar_dump(session_start());\nvar_dump(session_id());\nvar_dump($id === session_id());\nvar_dump(session_commit());\nvar_dump($id === session_id());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump($id === session_id());\nvar_dump(session_id());\nvar_dump(session_commit());\nvar_dump($id === session_id());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump($id === session_id());\nvar_dump(session_id());\nvar_dump(session_commit());\nvar_dump($id === session_id());\nvar_dump(session_id());\nvar_dump(session_start());\nvar_dump(session_destroy());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
