// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_25_create_aggregate.phpt
  it("SQLite3::createAggregate() test", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\nfunction sum_list_step($context, $rows, $string) {\n    if (empty($context))\n    {\n        $context = array('total' => 0, 'values' => array());\n    }\n    $context['total'] += intval($string);\n    $context['values'][] = $context['total'];\n    return $context;\n}\nfunction sum_list_finalize($context) {\n    return implode(',', $context['values']);\n}\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (a INTEGER, b INTEGER)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO test (a, b) VALUES (1, -1)\"));\nvar_dump($db->exec(\"INSERT INTO test (a, b) VALUES (2, -2)\"));\nvar_dump($db->exec(\"INSERT INTO test (a, b) VALUES (3, -3)\"));\nvar_dump($db->exec(\"INSERT INTO test (a, b) VALUES (4, -4)\"));\nvar_dump($db->exec(\"INSERT INTO test (a, b) VALUES (4, -4)\"));\n$db->createAggregate('S', 'sum_list_step', 'sum_list_finalize', 1);\nprint_r($db->querySingle(\"SELECT S(a), S(b) FROM test\", true));\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
