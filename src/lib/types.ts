// @ts-ignore
interface Dict<T> {
  [key: string]: T;
}

// per https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
type JSONSerializable = string | number | boolean | JSONSerializableObject | JSONSerializableArray | null;

interface JSONSerializableObject {
  [x: string]: JSONSerializable;
}

interface JSONSerializableArray extends Array<JSONSerializable> {}

type AppErrorType = 'Unauthorized' | 'INTERNAL_SERVER_ERROR' | null;
