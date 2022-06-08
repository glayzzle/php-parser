// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_get_client_stats_skipped.phpt
  it("mysqli_get_client_stats() - skipped rows", function () {
    expect(parser.parseCode("<?php\n    require_once('connect.inc');\n    require_once('table.inc');\n    if (!$res = mysqli_query($link, 'SELECT id FROM test', MYSQLI_STORE_RESULT))\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    $num_rows = mysqli_num_rows($res);\n    assert($num_rows > 2);\n    mysqli_free_result($res);\n    $before = mysqli_get_client_stats();\n    printf(\"BEFORE: rows_skipped_normal = %d\\n\", $before['rows_skipped_normal']);\n    if (!$res = mysqli_query($link, 'SELECT id FROM test', MYSQLI_USE_RESULT))\n        printf(\"[002] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    /* fetch all rows but the last one */\n    for ($i = 0; $i < $num_rows - 1; $i++)\n        $row = mysqli_fetch_assoc($res);\n    /* enforce implicit cleaning of the wire and skipping the last row */\n    mysqli_free_result($res);\n    $after = mysqli_get_client_stats();\n    printf(\"AFTER: rows_skipped_normal = %d\\n\", $after['rows_skipped_normal']);\n    if ($after['rows_skipped_normal'] != $before['rows_skipped_normal'] + 1)\n        printf(\"Statistics should show an increase of 1 for rows_skipped_normal, \".\n                \"but before=%d after=%d\\n\", $before['rows_skipped_normal'], $after['rows_skipped_normal']);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
