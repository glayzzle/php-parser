// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/types.phpt
  it("PDO_DBLIB: Column data types, with or without stringifying", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\nfunction get_expected_float_string() {\n    global $db;\n    switch ($db->getAttribute(PDO::DBLIB_ATTR_TDS_VERSION)) {\n        case '5.0':\n        case '6.0':\n        case '7.0':\n        case '7.1':\n        case '7.2':\n        case '8.0':\n            return '10.500';\n        default:\n            return '10.5';\n    }\n}\n$sql = \"\n    SELECT\n        'foo' AS [char],\n        CAST('2030-01-01 23:59:59' AS DATETIME) AS [datetime],\n        CAST(0 AS BIT) AS [false],\n        10.500 AS [float],\n        1000 AS [int],\n        CAST(10.500 AS MONEY) AS [money],\n        CAST('1950-01-18 23:00:00' AS SMALLDATETIME) as [smalldatetime],\n        CAST(1 AS BIT) AS [true]\n\";\n$stmt = $db->query($sql);\n$row = $stmt->fetch(PDO::FETCH_ASSOC);\nvar_dump($row['char']);\nvar_dump($row['datetime']);\nvar_dump($row['false']);\nvar_dump($row['float']);\nvar_dump($row['int']);\nvar_dump($row['money']);\nvar_dump($row['smalldatetime']);\nvar_dump($row['true']);\n$db->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, true);\n$stmt = $db->query($sql);\n$row = $stmt->fetch(PDO::FETCH_ASSOC);\nvar_dump($row['char']);\nvar_dump($row['datetime']);\nvar_dump($row['false']);\nvar_dump($row['float'] === get_expected_float_string());\nvar_dump($row['int']);\n// var_dump($row['money']); -- the decimal precision varies and it's not clear why\nvar_dump($row['smalldatetime']);\nvar_dump($row['true']);\n?>")).toMatchSnapshot();
  });
});
