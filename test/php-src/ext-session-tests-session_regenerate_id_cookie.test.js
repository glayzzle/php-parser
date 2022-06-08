// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_regenerate_id_cookie.phpt
  it("Test session_regenerate_id() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing session_regenerate_id() : basic functionality for cookie ***\\n\";\nrequire __DIR__.'/../../../sapi/cgi/tests/include.inc';\n$php = get_cgi_path();\nreset_env_vars();\n$file = __DIR__.\"/session_regenerate_id_cookie.test.php\";\nfile_put_contents($file, '<?php\nob_start();\nfunction find_cookie_header() {\n    $headers = headers_list();\n    $target  = \"Set-Cookie: PHPSESSID=\";\n    foreach ($headers as $h) {\n        if (strstr($h, $target) !== FALSE) {\n            echo $h.\"\\n\";\n            return TRUE;\n        }\n    }\n    var_dump($headers);\n    return FALSE;\n}\nvar_dump(session_start());\nvar_dump(find_cookie_header());\n$id = session_id();\nvar_dump(session_regenerate_id());\nvar_dump(find_cookie_header());\nvar_dump($id !== session_id());\nvar_dump(session_id());\nvar_dump(session_destroy());\nob_end_flush();\n?>');\nvar_dump(`$php -n -d session.name=PHPSESSID $file`);\nunlink($file);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
