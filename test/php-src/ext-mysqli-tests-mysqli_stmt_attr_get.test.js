// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stmt_attr_get.phpt
  it("mysqli_stmt_attr_get()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    $valid_attr = array(\n        \"max_length\" => MYSQLI_STMT_ATTR_UPDATE_MAX_LENGTH,\n        \"cursor_type\" => MYSQLI_STMT_ATTR_CURSOR_TYPE,\n        \"prefetch_rows\" => MYSQLI_STMT_ATTR_PREFETCH_ROWS,\n    );\n    $stmt = mysqli_stmt_init($link);\n    mysqli_stmt_prepare($stmt, 'SELECT * FROM test');\n    try {\n        mysqli_stmt_attr_get($stmt, -100);\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    foreach ($valid_attr as $k => $attr) {\n        /* This can't happen anymore as it only returns int */\n        if (false === ($tmp = mysqli_stmt_attr_get($stmt, $attr))) {\n            printf(\"[006] Expecting any type, but not boolean/false, got %s/%s for attribute %s/%s\\n\",\n                gettype($tmp), $tmp, $k, $attr);\n        }\n    }\n    $stmt->close();\n    foreach ($valid_attr as $k => $attr) {\n        try {\n            mysqli_stmt_attr_get($stmt, $attr);\n        } catch (Throwable $exception) {\n            echo $exception->getMessage() . \"\\n\";\n        }\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
