const parser = require('../main');

describe("Test comments", function() {
  describe("issues", function() {
    it("fix #250 : Leading comments are treated as trailing comments", function() {
      expect(parser.parseEval(
        `
// leading
foo();
// bar
bar() /* inner */ ;
// trailing
        `,
        {
          parser: {
            extractDoc: true
            // debug: true
          },
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )).toMatchSnapshot();
    });

    it("fix #126 : new option", function() {
      const ast = parser.parseEval(
        `
        if (true) {
          $a = 1;
        }
        // Don't parsed :(
        else if (false) {
          $a = 2 /* trailing 2 */ ;
          // trailing assing
        }
        // trailing elseif
        `,
        {
          parser: {
            extractDoc: true
          }
        }
      );
      expect(ast).toMatchSnapshot();
    });
    it("fix #55", function() {
      const ast = parser.parseEval(
        `
        if (true):
          if (true):
          // inner statements
          endif; // another comment
        endif; // 2nd comment
        `,
        {
          parser: {
            extractDoc: true
            // debug: true
          }
        }
      );
      expect(ast).toMatchSnapshot();
    });

    it("fix #189", function() {
      const ast = parser.parseEval(
        `
      $var = 'string1'
      // Comment 1
      . 'string2' // Comment 2
      // Comment 3
      . 'string3';
      `,
        {
          parser: {
            extractDoc: true,
            // debug: true
          }
        }
      );
      expect(ast).toMatchSnapshot();
    });
    
    it("fix #193", function() {
      const ast = parser.parseEval(
        `
        $a = $var
          // Comment Before
          ->
          // Comment After
          each();
        `,
        {
          parser: {
            extractDoc: true,
            // debug: true
          }
        }
      );
      expect(ast).toMatchSnapshot();
    });

    it("impl #194", function() {
      const ast = parser.parseEval(
        `
        // lead assign
        $foo /* trail foo */ = /* lead 1 */ 1 /* trail 1 */;
        // lead call
        callback(/* lead arg */ "arg" /* trail arg */ ) /* trail call */ ;
        /* trail program */
        `,
        {
          parser: {
            extractDoc: true,
            // debug: true
          }
        }
      );
      expect(ast).toMatchSnapshot();
    });
  });

  it("test single line comments", function() {
    const ast = parser.parseEval(
      `
      # some information
      // another line
      $foo = 123 // 123
      ; /* done */
      `,
      {
        parser: {
          extractDoc: true
        }
      }
    );
    expect(ast).toMatchSnapshot();
  });

  describe("multi line comments", function() {
    it("test function", function() {
      const ast = parser.parseEval(
        `
        /**
         * Description
         */
        function /* ignore */ & /* ignore */ name(/* @var something */ $arg) {
          // inner
          return $arg /* ignore */;
        }
        `,
        {
          parser: {
            extractDoc: true
          }
        }
      );
      expect(ast).toMatchSnapshot();
    });
    it("test if statements", function() {
      const ast = parser.parseEval(
        `
        if /* ignore */ (/* */ true) /* ignore */ {
        # inner statement
        } /* ignore */ else /* ignore */
        // else with a inner if single statement :
          if (true /* ignore */) /* ignore */ {
          } /* ignore */ elseif /* ignore */ (/* ignore */ false /* ignore */ /* ignore */) /* ignore */ /* ignore */ {
          } /* ignore */ else /* ignore */ {
          }
        if (false) /* ignore */ : /* ignore */
        /* ignore */ endif /* ignore */;/* ignore */
        `,
        {
          parser: {
            extractDoc: true
          }
        }
      );
      expect(ast).toMatchSnapshot();
    });
    it("test try statements", function() {
      const ast = parser.parseEval(
        `
        try /* ignore */ {
        # inner statement
        } /* dd */ catch(/* zz */ \\Exception /* 1 */ | /* 2 */ \\Foo /* aa */ $e /* bb */) /* dd */ {
        /* ee */
        } /* zz */ finally /* yy */ {
        /* ignore */
        } // end
        `,
        {
          parser: {
            extractDoc: true
          }
        }
      );
      expect(ast).toMatchSnapshot();
    });
  });

  it("test classes", function() {
    const ast = parser.parseEval(
      `
      /**
       * Description
       */
      class /* ignore */ name /* hehe */ {
         // @var test
         protected $test, $toto;
         // ignored comment
         /** @var Class */
         static public $foo = 123;
         /** ignored also **/
         /**
          * @return void
          */
         public function void() { }
      }
      `,
      {
        parser: {
          extractDoc: true
        }
      }
    );
    expect(ast).toMatchSnapshot();
  });
});
