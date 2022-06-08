// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/002.phpt
  it("Test nullsafe strict type check", function () {
    expect(parser.parseCode("<?php\ntry {\n    false?->bar();\n} catch (Throwable $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    []?->bar();\n} catch (Throwable $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    (0)?->bar();\n} catch (Throwable $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    (0.0)?->bar();\n} catch (Throwable $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    ''?->bar();\n} catch (Throwable $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
