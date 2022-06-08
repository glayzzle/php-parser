// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug79576.phpt
  it("Bug #79576 (\"TYPE *\" shows unhelpful message when type is not defined)", function () {
    expect(parser.parseCode("<?php\ntry {\n\tFFI::cdef('struct tree *get_tree(const oid *, size_t, struct tree *);');\n} catch (Throwable $e) {\n\techo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n\tFFI::cdef('struct tree *get_tree(oid, size_t, struct tree *);');\n} catch (Throwable $e) {\n\techo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\ntry {\n\tFFI::cdef('\ntypedef struct _simple_struct {\n        const some_not_declared_type **property;\n    } simple_struct;\n');\n} catch (Throwable $e) {\n\techo get_class($e) . \": \" . $e->getMessage().\"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
