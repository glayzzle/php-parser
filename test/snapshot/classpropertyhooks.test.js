const parser = require("../main");
//
describe("classpropertyhooks", () => {
  const test_parser = parser.create({
    parser: {
      version: "8.4",
    },
  });

  it("not supported in php < 8.4", () => {
    expect(() => {
      parser.parseEval(
        `class BookViewModel {
            public string $credits {
              get => 'mailto:' . $this->email;
            }
        }`,
        {
          parser: {
            version: "8.3",
          },
        },
      );
    }).toThrowErrorMatchingSnapshot();
  });

  describe("getter", () => {
    it("arrow function", () => {
      expect(
        test_parser.parseEval(
          `class BookViewModel {
            public string $credits {
              get => 'mailto:' . $this->email;
            }
        }`,
        ),
      ).toMatchSnapshot();
    });

    it("block", () => {
      expect(
        test_parser.parseEval(
          `class BookViewModel {
          public string $credits {
            get {
              'mailto:' . $this->email;
            }
          }
        }`,
        ),
      ).toMatchSnapshot();
    });
  });

  describe("setter", () => {
    describe("expression form", () => {
      it("with implicit $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public string $credits {
            set => $this->credits = $value;
          }
        }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit untyped $value", () => {
        expect(
          test_parser.parseEval(
            `class Person {
            public $name {
              set($new_name) => $this->name = strtolower($new_name);
            }
          }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit typed $value", () => {
        expect(
          test_parser.parseEval(
            `class Person {
            public string $name {
              set(string $new_name) => $this->name = strtolower($new_name);
            }
          }`,
          ),
        ).toMatchSnapshot();
      });
    });

    describe("block form", () => {
      it("with implicit $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public string $credits {
            set {
                $tmp = $this->credits + 1;
              $this->propertyName = $value + $tmp;
            }
          }
        }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit untyped $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public $credits {
            set ($value) {
                $tmp = $this->credits + 1;
              $this->propertyName = $value + $tmp;
            }
          }
        }`,
          ),
        ).toMatchSnapshot();
      });

      it("with explicit typed $value", () => {
        expect(
          test_parser.parseEval(
            `class BookViewModel {
          public int $credits {
            set (int $value) {
                $tmp = $this->credits + 1;
              $this->propertyName = $value + $tmp;
            }
          }
        }`,
          ),
        ).toMatchSnapshot();
      });
    });
  });
});
