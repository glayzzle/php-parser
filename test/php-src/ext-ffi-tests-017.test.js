// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/017.phpt
  it("FFI 017: Structure constraints & tags cleanup", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(FFI::new(\"struct X {void x();}\"));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    var_dump(FFI::new(\"struct X {struct X x;}\"));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n    var_dump(FFI::new(\"struct X {struct X *ptr;}\"));\n} catch (Throwable $e) {\n    echo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>\nok")).toMatchSnapshot();
  });
});
