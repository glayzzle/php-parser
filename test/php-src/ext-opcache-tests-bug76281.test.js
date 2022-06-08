// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76281.phpt
  it("Bug #76281: Opcache causes incorrect \"undefined variable\" errors", function () {
    expect(parser.parseCode("<?php\nfunction test($r, $action) {\n    $user_sub_resource = in_array($action, array('get_securityquestions', 'get_status', 'get_groupstats'));\n    $user_id = null;\n    if ($user_sub_resource && isset($r['user_id'])) {\n        $user_id = $r['user_id'];\n    }\n    else if (isset($r['id']))  {\n        $user_id = $r['id'];\n    }\n    if ($user_sub_resource) {\n        return 'foo';\n    }\n    return 'bar';\n}\nvar_dump(test(['user_id' => 1, 'id' => 2], 'foo'));\n?>")).toMatchSnapshot();
  });
});
