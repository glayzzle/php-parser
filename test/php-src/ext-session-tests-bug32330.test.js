// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug32330.phpt
  it("Bug #32330 (session_destroy, \"Failed to initialize storage module\", custom session handler)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nfunction sOpen($path, $name)\n{\n    echo \"open: path = {$path}, name = {$name}\\n\";\n    return TRUE;\n}\nfunction sClose()\n{\n    echo \"close\\n\";\n    return TRUE;\n}\nfunction sRead($id)\n{\n    echo \"read: id = {$id}\\n\";\n    return '';\n}\nfunction sWrite($id, $data)\n{\n    echo \"write: id = {$id}, data = {$data}\\n\";\n    return TRUE;\n}\nfunction sDestroy($id)\n{\n    echo \"destroy: id = {$id}\\n\";\n    return TRUE;\n}\nfunction sGC($maxlifetime)\n{\n    echo \"gc: maxlifetime = {$maxlifetime}\\n\";\n    return TRUE;\n}\nsession_set_save_handler( 'sOpen', 'sClose', 'sRead', 'sWrite', 'sDestroy', 'sGC' );\n// without output buffering, the debug messages will cause all manner of warnings\nob_start();\nsession_start();\n$_SESSION['A'] = 'B';\nsession_write_close();\nsession_start();\n$_SESSION['C'] = 'D';\nsession_destroy();\nsession_start();\n$_SESSION['E'] = 'F';\n// Don't try to destroy this time!\n?>")).toMatchSnapshot();
  });
});
