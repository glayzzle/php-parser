// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_33_createAggregate_notcallable.phpt
  it("SQLite3::createAggregate() Test whether a supplied PHP function is valid when using in an aggregate function", function () {
    expect(parser.parseCode("<?php\nfunction aggregate_step ($var) { return $var; }\nfunction aggregate_final ($var) { return $var; }\n$db = new SQLite3(':memory:');\ntry {\n    $db->createAggregate('TESTAGGREGATE', 'aggregate_test_step', 'aggregate_final');\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $db->createAggregate('TESTAGGREGATE2', 'aggregate_step', 'aggregate_test_final');\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($db->createAggregate ('TESTAGGREGATE3', 'aggregate_step', 'aggregate_final'));\n$db->close();\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
