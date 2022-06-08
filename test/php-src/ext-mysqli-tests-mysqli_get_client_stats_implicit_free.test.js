// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_get_client_stats_implicit_free.phpt
  it("mysqli_get_client_stats() - implicit_free_result", function () {
    expect(parser.parseCode("<?php\n    require_once('connect.inc');\n    require_once('table.inc');\n    $stats = mysqli_get_client_stats();\n    printf(\"BEGINNING: implicit_free_result = %d\\n\",\t$stats['implicit_free_result']);\n    if (!$res = mysqli_query($link, 'SELECT id FROM test'))\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    mysqli_free_result($res);\n    mysqli_close($link);\n    $after = mysqli_get_client_stats();\n    if ($after['implicit_free_result'] != $stats['implicit_free_result'])\n        printf(\"[002] Where is the missing mysqli_free_result() call? implicit_free_result has changed by %d.\\n\",\n            $after['implicit_free_result'] - $stats['implicit_free_result']);\n    $stats = $after;\n    printf(\"END: implicit_free_result = %d\\n\",\t$stats['implicit_free_result']);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
