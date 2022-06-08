// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/deprecated_constants.phpt
  it("Deprecated constants", function () {
    expect(parser.parseCode("<?php\necho constant('MYSQLI_NO_DATA').\"\\n\";\necho constant('MYSQLI_DATA_TRUNCATED').\"\\n\";\necho constant('MYSQLI_SERVER_QUERY_NO_GOOD_INDEX_USED').\"\\n\";\necho constant('MYSQLI_SERVER_QUERY_NO_INDEX_USED').\"\\n\";\nif (stristr(mysqli_get_client_info(), 'mysqlnd')) {\n    echo constant('MYSQLI_SERVER_QUERY_WAS_SLOW').\"\\n\";\n    echo constant('MYSQLI_SERVER_PS_OUT_PARAMS').\"\\n\";\n} else {\n    print(\"\\nDeprecated: Constant MYSQLI_SERVER_QUERY_WAS_SLOW is deprecated in dummy\\n-1\\n\");\n    print(\"\\nDeprecated: Constant MYSQLI_SERVER_PS_OUT_PARAMS is deprecated in dummy\\n-1\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
