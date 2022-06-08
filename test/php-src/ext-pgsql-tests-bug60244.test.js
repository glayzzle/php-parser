// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug60244.phpt
  it("Bug #60244 (pg_fetch_* functions do not validate that row param is >0)", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n$result = pg_query($db, \"select 'a' union select 'b'\");\ntry {\n    var_dump(pg_fetch_array($result, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(pg_fetch_assoc($result, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(pg_fetch_object($result, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(pg_fetch_row($result, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(pg_fetch_array($result, 0));\nvar_dump(pg_fetch_assoc($result, 0));\nvar_dump(pg_fetch_object($result, 0));\nvar_dump(pg_fetch_row($result, 0));\npg_close($db);\n?>")).toMatchSnapshot();
  });
});
