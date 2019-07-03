interface LooseObject {
  [key: string]: any;
}

interface MapSchemaTypes {
  string: string;
  integer: number;
  // any others, like these?
  boolean: boolean;
  float: number;
  number: number;
  regexp: RegExp;
  any: any;
  object: LooseObject;
  function: (...props) => {};
  // more?
}

type MapSchema<T extends Record<string, keyof MapSchemaTypes>> = {
  [K in keyof T]: MapSchemaTypes[T[K]];
};

function asSchema<T extends Record<string, keyof MapSchemaTypes>>(t: T): T {
  return t;
}

function transformObject<T>(obj: T) {
  let newObj = {};
  let newSchema = {};

  Object.keys(obj).forEach(key => {
    let newKey = key.toLowerCase();
    newObj[newKey] = obj[key];
    newSchema[newKey] = 'string';
  });

  newSchema = asSchema(newSchema);
  type newType = MapSchema<typeof newSchema>;
  let newSchema2 = newSchema as newType;

  newObj = newObj as newType;

  return {
    obj: newObj,
    schema: newSchema,
  };
}

let obj = {
  BLAH: 'hi',
  ANOTHER_THING: 'Howdy',
};

let { obj: newObj, schema: newSchema } = transformObject(obj);
let newNewObj: MapSchema<typeof newSchema> = newObj;

console.log(newNewObj);

newObj['blah'];
newObj['blah2'];

/// use it
const personSchema = asSchema({ name: 'string', age: 'integer' });
type Person = MapSchema<typeof personSchema>;
const person: Person = {
  name: 'Fred',
  age: 35,
};

// export default person;
