// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_dsn_containing_credentials.phpt
  it("PDO Common: Pass credentials in dsn instead of constructor params", function () {
    expect(parser.parseCode("<?php\n    require_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n    $orgDsn = getenv('PDOTEST_DSN');\n    $orgUser = getenv('PDOTEST_USER');\n    $orgPass = getenv('PDOTEST_PASS');\n    try\n    {\n        putenv(\"PDOTEST_DSN=$orgDsn;user=$orgUser;password=$orgPass\");\n        putenv(\"PDOTEST_USER\");\n        putenv(\"PDOTEST_PASS\");\n        $link = PDOTest::factory();\n        echo \"using credentials in dsn: done\\n\";\n        // test b/c - credentials in DSN are ignored when user/pass passed as separate params\n        putenv(\"PDOTEST_DSN=$orgDsn;user=incorrect;password=ignored\");\n        putenv(\"PDOTEST_USER=$orgUser\");\n        putenv(\"PDOTEST_PASS=$orgPass\");\n        $link = PDOTest::factory();\n        echo \"ignoring credentials in dsn: done\\n\";\n    }\n    finally\n    {\n        putenv(\"PDOTEST_DSN=$orgDsn\");\n        putenv(\"PDOTEST_USER=$orgUser\");\n        putenv(\"PDOTEST_PASS=$orgPass\");\n    }\n?>")).toMatchSnapshot();
  });
});
