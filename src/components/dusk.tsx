export const obj = {
  THIS: {
    IS: {
      MY: {
        OBJECT: {
          DUDE: {
            specialKey: 'foo',
          },

          specialKey: 'bar',
        },
      },
    },
    CANNOT: {
      BE: {
        specialKey: 'baz',
      },
    },
  },
};

type newtype = typeof obj;

const parseObj = (obj: {}): newtype => {
  const root = {};

  const inner = (obj, prefix = ''): void => {
    Object.keys(obj).forEach(key => {
      if (key === 'specialKey') {
        root[prefix] = true;
      } else if (key === key.toUpperCase()) {
        inner(obj[key], prefix === '' ? key : `${prefix}_${key}`);
      }
    });
  };

  inner(obj);
  return root;
};

const result = parseObj(obj);
/*
  result = {
    THIS_CANNOT_BE: true,
    THIS_IS_MY_OBJECT: true,
    THIS_IS_MY_OBJECT_DUDE: true,
  }
*/
