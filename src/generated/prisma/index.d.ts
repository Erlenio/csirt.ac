
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model PostTag
 * 
 */
export type PostTag = $Result.DefaultSelection<Prisma.$PostTagPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Arquivo
 * 
 */
export type Arquivo = $Result.DefaultSelection<Prisma.$ArquivoPayload>
/**
 * Model Incidente
 * 
 */
export type Incidente = $Result.DefaultSelection<Prisma.$IncidentePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const IncidentPriority: {
  BAIXA: 'BAIXA',
  MEDIA: 'MEDIA',
  ALTA: 'ALTA',
  CRITICA: 'CRITICA'
};

export type IncidentPriority = (typeof IncidentPriority)[keyof typeof IncidentPriority]


export const IncidentStatus: {
  ABERTO: 'ABERTO',
  EM_ANDAMENTO: 'EM_ANDAMENTO',
  RESOLVIDO: 'RESOLVIDO',
  ARQUIVADO: 'ARQUIVADO'
};

export type IncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus]


export const PostStatus: {
  RASCUNHO: 'RASCUNHO',
  PUBLICADO: 'PUBLICADO',
  ARQUIVADO: 'ARQUIVADO'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const UsuarioTipo: {
  ADMIN: 'ADMIN',
  AUTOR: 'AUTOR',
  EDITOR: 'EDITOR',
  LEITOR: 'LEITOR'
};

export type UsuarioTipo = (typeof UsuarioTipo)[keyof typeof UsuarioTipo]


export const TipoLogicoArquivo: {
  IMAGEM: 'IMAGEM',
  DOCUMENTO: 'DOCUMENTO',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  ARQUIVO: 'ARQUIVO',
  OUTRO: 'OUTRO'
};

export type TipoLogicoArquivo = (typeof TipoLogicoArquivo)[keyof typeof TipoLogicoArquivo]

}

export type IncidentPriority = $Enums.IncidentPriority

export const IncidentPriority: typeof $Enums.IncidentPriority

export type IncidentStatus = $Enums.IncidentStatus

export const IncidentStatus: typeof $Enums.IncidentStatus

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type UsuarioTipo = $Enums.UsuarioTipo

export const UsuarioTipo: typeof $Enums.UsuarioTipo

export type TipoLogicoArquivo = $Enums.TipoLogicoArquivo

export const TipoLogicoArquivo: typeof $Enums.TipoLogicoArquivo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postTag`: Exposes CRUD operations for the **PostTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTags
    * const postTags = await prisma.postTag.findMany()
    * ```
    */
  get postTag(): Prisma.PostTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arquivo`: Exposes CRUD operations for the **Arquivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arquivos
    * const arquivos = await prisma.arquivo.findMany()
    * ```
    */
  get arquivo(): Prisma.ArquivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidente`: Exposes CRUD operations for the **Incidente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidentes
    * const incidentes = await prisma.incidente.findMany()
    * ```
    */
  get incidente(): Prisma.IncidenteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    Categoria: 'Categoria',
    Tag: 'Tag',
    PostTag: 'PostTag',
    Comentario: 'Comentario',
    Usuario: 'Usuario',
    Arquivo: 'Arquivo',
    Incidente: 'Incidente'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "categoria" | "tag" | "postTag" | "comentario" | "usuario" | "arquivo" | "incidente"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      PostTag: {
        payload: Prisma.$PostTagPayload<ExtArgs>
        fields: Prisma.PostTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          findFirst: {
            args: Prisma.PostTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          findMany: {
            args: Prisma.PostTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[]
          }
          create: {
            args: Prisma.PostTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          createMany: {
            args: Prisma.PostTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          update: {
            args: Prisma.PostTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          deleteMany: {
            args: Prisma.PostTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>
          }
          aggregate: {
            args: Prisma.PostTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostTag>
          }
          groupBy: {
            args: Prisma.PostTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostTagCountArgs<ExtArgs>
            result: $Utils.Optional<PostTagCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Arquivo: {
        payload: Prisma.$ArquivoPayload<ExtArgs>
        fields: Prisma.ArquivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArquivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArquivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          findFirst: {
            args: Prisma.ArquivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArquivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          findMany: {
            args: Prisma.ArquivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>[]
          }
          create: {
            args: Prisma.ArquivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          createMany: {
            args: Prisma.ArquivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArquivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          update: {
            args: Prisma.ArquivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          deleteMany: {
            args: Prisma.ArquivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArquivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArquivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          aggregate: {
            args: Prisma.ArquivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArquivo>
          }
          groupBy: {
            args: Prisma.ArquivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArquivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArquivoCountArgs<ExtArgs>
            result: $Utils.Optional<ArquivoCountAggregateOutputType> | number
          }
        }
      }
      Incidente: {
        payload: Prisma.$IncidentePayload<ExtArgs>
        fields: Prisma.IncidenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentePayload>
          }
          findFirst: {
            args: Prisma.IncidenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentePayload>
          }
          findMany: {
            args: Prisma.IncidenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentePayload>[]
          }
          create: {
            args: Prisma.IncidenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentePayload>
          }
          createMany: {
            args: Prisma.IncidenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IncidenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentePayload>
          }
          update: {
            args: Prisma.IncidenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentePayload>
          }
          deleteMany: {
            args: Prisma.IncidenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IncidenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentePayload>
          }
          aggregate: {
            args: Prisma.IncidenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidente>
          }
          groupBy: {
            args: Prisma.IncidenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidenteCountArgs<ExtArgs>
            result: $Utils.Optional<IncidenteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    categoria?: CategoriaOmit
    tag?: TagOmit
    postTag?: PostTagOmit
    comentario?: ComentarioOmit
    usuario?: UsuarioOmit
    arquivo?: ArquivoOmit
    incidente?: IncidenteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    tags: number
    comentarios: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | PostCountOutputTypeCountTagsArgs
    comentarios?: boolean | PostCountOutputTypeCountComentariosArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    posts: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoriaCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    posts: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | TagCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    posts: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UsuarioCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type ArquivoCountOutputType
   */

  export type ArquivoCountOutputType = {
    postImagemCapa: number
    usuarioFoto: number
  }

  export type ArquivoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postImagemCapa?: boolean | ArquivoCountOutputTypeCountPostImagemCapaArgs
    usuarioFoto?: boolean | ArquivoCountOutputTypeCountUsuarioFotoArgs
  }

  // Custom InputTypes
  /**
   * ArquivoCountOutputType without action
   */
  export type ArquivoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArquivoCountOutputType
     */
    select?: ArquivoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArquivoCountOutputType without action
   */
  export type ArquivoCountOutputTypeCountPostImagemCapaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * ArquivoCountOutputType without action
   */
  export type ArquivoCountOutputTypeCountUsuarioFotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type IncidenteCountOutputType
   */

  export type IncidenteCountOutputType = {
    anexos: number
  }

  export type IncidenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | IncidenteCountOutputTypeCountAnexosArgs
  }

  // Custom InputTypes
  /**
   * IncidenteCountOutputType without action
   */
  export type IncidenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidenteCountOutputType
     */
    select?: IncidenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IncidenteCountOutputType without action
   */
  export type IncidenteCountOutputTypeCountAnexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArquivoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    slug: string | null
    conteudo: string | null
    resumo: string | null
    publicado_em: Date | null
    atualizado_em: Date | null
    status: $Enums.PostStatus | null
    imagem_capa_id: string | null
    autor_id: string | null
    categoria_id: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    slug: string | null
    conteudo: string | null
    resumo: string | null
    publicado_em: Date | null
    atualizado_em: Date | null
    status: $Enums.PostStatus | null
    imagem_capa_id: string | null
    autor_id: string | null
    categoria_id: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    titulo: number
    slug: number
    conteudo: number
    resumo: number
    publicado_em: number
    atualizado_em: number
    status: number
    imagem_capa_id: number
    autor_id: number
    categoria_id: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    titulo?: true
    slug?: true
    conteudo?: true
    resumo?: true
    publicado_em?: true
    atualizado_em?: true
    status?: true
    imagem_capa_id?: true
    autor_id?: true
    categoria_id?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    titulo?: true
    slug?: true
    conteudo?: true
    resumo?: true
    publicado_em?: true
    atualizado_em?: true
    status?: true
    imagem_capa_id?: true
    autor_id?: true
    categoria_id?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    titulo?: true
    slug?: true
    conteudo?: true
    resumo?: true
    publicado_em?: true
    atualizado_em?: true
    status?: true
    imagem_capa_id?: true
    autor_id?: true
    categoria_id?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    titulo: string
    slug: string
    conteudo: string
    resumo: string | null
    publicado_em: Date | null
    atualizado_em: Date
    status: $Enums.PostStatus
    imagem_capa_id: string
    autor_id: string
    categoria_id: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    slug?: boolean
    conteudo?: boolean
    resumo?: boolean
    publicado_em?: boolean
    atualizado_em?: boolean
    status?: boolean
    imagem_capa_id?: boolean
    autor_id?: boolean
    categoria_id?: boolean
    imagem_capa?: boolean | ArquivoDefaultArgs<ExtArgs>
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    comentarios?: boolean | Post$comentariosArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    titulo?: boolean
    slug?: boolean
    conteudo?: boolean
    resumo?: boolean
    publicado_em?: boolean
    atualizado_em?: boolean
    status?: boolean
    imagem_capa_id?: boolean
    autor_id?: boolean
    categoria_id?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "slug" | "conteudo" | "resumo" | "publicado_em" | "atualizado_em" | "status" | "imagem_capa_id" | "autor_id" | "categoria_id", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imagem_capa?: boolean | ArquivoDefaultArgs<ExtArgs>
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    comentarios?: boolean | Post$comentariosArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      imagem_capa: Prisma.$ArquivoPayload<ExtArgs>
      autor: Prisma.$UsuarioPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      tags: Prisma.$PostTagPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      slug: string
      conteudo: string
      resumo: string | null
      publicado_em: Date | null
      atualizado_em: Date
      status: $Enums.PostStatus
      imagem_capa_id: string
      autor_id: string
      categoria_id: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imagem_capa<T extends ArquivoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArquivoDefaultArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Post$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Post$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Post$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly titulo: FieldRef<"Post", 'String'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly conteudo: FieldRef<"Post", 'String'>
    readonly resumo: FieldRef<"Post", 'String'>
    readonly publicado_em: FieldRef<"Post", 'DateTime'>
    readonly atualizado_em: FieldRef<"Post", 'DateTime'>
    readonly status: FieldRef<"Post", 'PostStatus'>
    readonly imagem_capa_id: FieldRef<"Post", 'String'>
    readonly autor_id: FieldRef<"Post", 'String'>
    readonly categoria_id: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.tags
   */
  export type Post$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    cursor?: PostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * Post.comentarios
   */
  export type Post$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    slug: string | null
    descricao: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    slug: string | null
    descricao: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    slug: number
    descricao: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    slug?: true
    descricao?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    slug?: true
    descricao?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    slug?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    nome: string
    slug: string
    descricao: string | null
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    slug?: boolean
    descricao?: boolean
    posts?: boolean | Categoria$postsArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    slug?: boolean
    descricao?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "slug" | "descricao", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Categoria$postsArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      slug: string
      descricao: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Categoria$postsArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly nome: FieldRef<"Categoria", 'String'>
    readonly slug: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.posts
   */
  export type Categoria$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    nome: string | null
    slug: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    slug: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    nome: number
    slug: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    nome?: true
    slug?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    nome?: true
    slug?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    nome?: true
    slug?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    nome: string
    slug: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    slug?: boolean
    posts?: boolean | Tag$postsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type TagSelectScalar = {
    id?: boolean
    nome?: boolean
    slug?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "slug", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Tag$postsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      posts: Prisma.$PostTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      slug: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Tag$postsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly nome: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.posts
   */
  export type Tag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    cursor?: PostTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model PostTag
   */

  export type AggregatePostTag = {
    _count: PostTagCountAggregateOutputType | null
    _min: PostTagMinAggregateOutputType | null
    _max: PostTagMaxAggregateOutputType | null
  }

  export type PostTagMinAggregateOutputType = {
    post_id: string | null
    tag_id: string | null
  }

  export type PostTagMaxAggregateOutputType = {
    post_id: string | null
    tag_id: string | null
  }

  export type PostTagCountAggregateOutputType = {
    post_id: number
    tag_id: number
    _all: number
  }


  export type PostTagMinAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type PostTagMaxAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type PostTagCountAggregateInputType = {
    post_id?: true
    tag_id?: true
    _all?: true
  }

  export type PostTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTag to aggregate.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTags
    **/
    _count?: true | PostTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTagMaxAggregateInputType
  }

  export type GetPostTagAggregateType<T extends PostTagAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTag[P]>
      : GetScalarType<T[P], AggregatePostTag[P]>
  }




  export type PostTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagWhereInput
    orderBy?: PostTagOrderByWithAggregationInput | PostTagOrderByWithAggregationInput[]
    by: PostTagScalarFieldEnum[] | PostTagScalarFieldEnum
    having?: PostTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTagCountAggregateInputType | true
    _min?: PostTagMinAggregateInputType
    _max?: PostTagMaxAggregateInputType
  }

  export type PostTagGroupByOutputType = {
    post_id: string
    tag_id: string
    _count: PostTagCountAggregateOutputType | null
    _min: PostTagMinAggregateOutputType | null
    _max: PostTagMaxAggregateOutputType | null
  }

  type GetPostTagGroupByPayload<T extends PostTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostTagGroupByOutputType[P]>
            : GetScalarType<T[P], PostTagGroupByOutputType[P]>
        }
      >
    >


  export type PostTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    tag_id?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTag"]>



  export type PostTagSelectScalar = {
    post_id?: boolean
    tag_id?: boolean
  }

  export type PostTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "tag_id", ExtArgs["result"]["postTag"]>
  export type PostTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $PostTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostTag"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: string
      tag_id: string
    }, ExtArgs["result"]["postTag"]>
    composites: {}
  }

  type PostTagGetPayload<S extends boolean | null | undefined | PostTagDefaultArgs> = $Result.GetResult<Prisma.$PostTagPayload, S>

  type PostTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostTagCountAggregateInputType | true
    }

  export interface PostTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTag'], meta: { name: 'PostTag' } }
    /**
     * Find zero or one PostTag that matches the filter.
     * @param {PostTagFindUniqueArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTagFindUniqueArgs>(args: SelectSubset<T, PostTagFindUniqueArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTagFindUniqueOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTagFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTagFindFirstArgs>(args?: SelectSubset<T, PostTagFindFirstArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTagFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTags
     * const postTags = await prisma.postTag.findMany()
     * 
     * // Get first 10 PostTags
     * const postTags = await prisma.postTag.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postTagWithPost_idOnly = await prisma.postTag.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends PostTagFindManyArgs>(args?: SelectSubset<T, PostTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostTag.
     * @param {PostTagCreateArgs} args - Arguments to create a PostTag.
     * @example
     * // Create one PostTag
     * const PostTag = await prisma.postTag.create({
     *   data: {
     *     // ... data to create a PostTag
     *   }
     * })
     * 
     */
    create<T extends PostTagCreateArgs>(args: SelectSubset<T, PostTagCreateArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostTags.
     * @param {PostTagCreateManyArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostTagCreateManyArgs>(args?: SelectSubset<T, PostTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostTag.
     * @param {PostTagDeleteArgs} args - Arguments to delete one PostTag.
     * @example
     * // Delete one PostTag
     * const PostTag = await prisma.postTag.delete({
     *   where: {
     *     // ... filter to delete one PostTag
     *   }
     * })
     * 
     */
    delete<T extends PostTagDeleteArgs>(args: SelectSubset<T, PostTagDeleteArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostTag.
     * @param {PostTagUpdateArgs} args - Arguments to update one PostTag.
     * @example
     * // Update one PostTag
     * const postTag = await prisma.postTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostTagUpdateArgs>(args: SelectSubset<T, PostTagUpdateArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostTags.
     * @param {PostTagDeleteManyArgs} args - Arguments to filter PostTags to delete.
     * @example
     * // Delete a few PostTags
     * const { count } = await prisma.postTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostTagDeleteManyArgs>(args?: SelectSubset<T, PostTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostTagUpdateManyArgs>(args: SelectSubset<T, PostTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostTag.
     * @param {PostTagUpsertArgs} args - Arguments to update or create a PostTag.
     * @example
     * // Update or create a PostTag
     * const postTag = await prisma.postTag.upsert({
     *   create: {
     *     // ... data to create a PostTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTag we want to update
     *   }
     * })
     */
    upsert<T extends PostTagUpsertArgs>(args: SelectSubset<T, PostTagUpsertArgs<ExtArgs>>): Prisma__PostTagClient<$Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagCountArgs} args - Arguments to filter PostTags to count.
     * @example
     * // Count the number of PostTags
     * const count = await prisma.postTag.count({
     *   where: {
     *     // ... the filter for the PostTags we want to count
     *   }
     * })
    **/
    count<T extends PostTagCountArgs>(
      args?: Subset<T, PostTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostTagAggregateArgs>(args: Subset<T, PostTagAggregateArgs>): Prisma.PrismaPromise<GetPostTagAggregateType<T>>

    /**
     * Group by PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTagGroupByArgs['orderBy'] }
        : { orderBy?: PostTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostTag model
   */
  readonly fields: PostTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostTag model
   */
  interface PostTagFieldRefs {
    readonly post_id: FieldRef<"PostTag", 'String'>
    readonly tag_id: FieldRef<"PostTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostTag findUnique
   */
  export type PostTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag findUniqueOrThrow
   */
  export type PostTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag findFirst
   */
  export type PostTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag findFirstOrThrow
   */
  export type PostTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag findMany
   */
  export type PostTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter, which PostTags to fetch.
     */
    where?: PostTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTags.
     */
    cursor?: PostTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[]
  }

  /**
   * PostTag create
   */
  export type PostTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The data needed to create a PostTag.
     */
    data: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>
  }

  /**
   * PostTag createMany
   */
  export type PostTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostTag update
   */
  export type PostTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The data needed to update a PostTag.
     */
    data: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>
    /**
     * Choose, which PostTag to update.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag updateMany
   */
  export type PostTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to update.
     */
    limit?: number
  }

  /**
   * PostTag upsert
   */
  export type PostTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * The filter to search for the PostTag to update in case it exists.
     */
    where: PostTagWhereUniqueInput
    /**
     * In case the PostTag found by the `where` argument doesn't exist, create a new PostTag with this data.
     */
    create: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>
    /**
     * In case the PostTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>
  }

  /**
   * PostTag delete
   */
  export type PostTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
    /**
     * Filter which PostTag to delete.
     */
    where: PostTagWhereUniqueInput
  }

  /**
   * PostTag deleteMany
   */
  export type PostTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTags to delete
     */
    where?: PostTagWhereInput
    /**
     * Limit how many PostTags to delete.
     */
    limit?: number
  }

  /**
   * PostTag without action
   */
  export type PostTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: string | null
    post_id: string | null
    nome: string | null
    email: string | null
    mensagem: string | null
    criado_em: Date | null
    aprovado: boolean | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: string | null
    post_id: string | null
    nome: string | null
    email: string | null
    mensagem: string | null
    criado_em: Date | null
    aprovado: boolean | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    post_id: number
    nome: number
    email: number
    mensagem: number
    criado_em: number
    aprovado: number
    _all: number
  }


  export type ComentarioMinAggregateInputType = {
    id?: true
    post_id?: true
    nome?: true
    email?: true
    mensagem?: true
    criado_em?: true
    aprovado?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    post_id?: true
    nome?: true
    email?: true
    mensagem?: true
    criado_em?: true
    aprovado?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    post_id?: true
    nome?: true
    email?: true
    mensagem?: true
    criado_em?: true
    aprovado?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: string
    post_id: string
    nome: string
    email: string
    mensagem: string
    criado_em: Date
    aprovado: boolean
    _count: ComentarioCountAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    nome?: boolean
    email?: boolean
    mensagem?: boolean
    criado_em?: boolean
    aprovado?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>



  export type ComentarioSelectScalar = {
    id?: boolean
    post_id?: boolean
    nome?: boolean
    email?: boolean
    mensagem?: boolean
    criado_em?: boolean
    aprovado?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "post_id" | "nome" | "email" | "mensagem" | "criado_em" | "aprovado", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      post_id: string
      nome: string
      email: string
      mensagem: string
      criado_em: Date
      aprovado: boolean
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'String'>
    readonly post_id: FieldRef<"Comentario", 'String'>
    readonly nome: FieldRef<"Comentario", 'String'>
    readonly email: FieldRef<"Comentario", 'String'>
    readonly mensagem: FieldRef<"Comentario", 'String'>
    readonly criado_em: FieldRef<"Comentario", 'DateTime'>
    readonly aprovado: FieldRef<"Comentario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    tipo: $Enums.UsuarioTipo | null
    bio: string | null
    foto_id: string | null
    criado_em: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    tipo: $Enums.UsuarioTipo | null
    bio: string | null
    foto_id: string | null
    criado_em: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha_hash: number
    tipo: number
    bio: number
    foto_id: number
    criado_em: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    tipo?: true
    bio?: true
    foto_id?: true
    criado_em?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    tipo?: true
    bio?: true
    foto_id?: true
    criado_em?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    tipo?: true
    bio?: true
    foto_id?: true
    criado_em?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha_hash: string
    tipo: $Enums.UsuarioTipo
    bio: string | null
    foto_id: string | null
    criado_em: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    tipo?: boolean
    bio?: boolean
    foto_id?: boolean
    criado_em?: boolean
    foto?: boolean | Usuario$fotoArgs<ExtArgs>
    posts?: boolean | Usuario$postsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    tipo?: boolean
    bio?: boolean
    foto_id?: boolean
    criado_em?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha_hash" | "tipo" | "bio" | "foto_id" | "criado_em", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foto?: boolean | Usuario$fotoArgs<ExtArgs>
    posts?: boolean | Usuario$postsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      foto: Prisma.$ArquivoPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha_hash: string
      tipo: $Enums.UsuarioTipo
      bio: string | null
      foto_id: string | null
      criado_em: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foto<T extends Usuario$fotoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$fotoArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends Usuario$postsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha_hash: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'UsuarioTipo'>
    readonly bio: FieldRef<"Usuario", 'String'>
    readonly foto_id: FieldRef<"Usuario", 'String'>
    readonly criado_em: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.foto
   */
  export type Usuario$fotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    where?: ArquivoWhereInput
  }

  /**
   * Usuario.posts
   */
  export type Usuario$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Arquivo
   */

  export type AggregateArquivo = {
    _count: ArquivoCountAggregateOutputType | null
    _avg: ArquivoAvgAggregateOutputType | null
    _sum: ArquivoSumAggregateOutputType | null
    _min: ArquivoMinAggregateOutputType | null
    _max: ArquivoMaxAggregateOutputType | null
  }

  export type ArquivoAvgAggregateOutputType = {
    tamanho: number | null
  }

  export type ArquivoSumAggregateOutputType = {
    tamanho: number | null
  }

  export type ArquivoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    tipo: string | null
    caminho: string | null
    tamanho: number | null
    criado_em: Date | null
    tipo_logico: $Enums.TipoLogicoArquivo | null
    incidenteId: string | null
  }

  export type ArquivoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    tipo: string | null
    caminho: string | null
    tamanho: number | null
    criado_em: Date | null
    tipo_logico: $Enums.TipoLogicoArquivo | null
    incidenteId: string | null
  }

  export type ArquivoCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    caminho: number
    tamanho: number
    criado_em: number
    tipo_logico: number
    incidenteId: number
    _all: number
  }


  export type ArquivoAvgAggregateInputType = {
    tamanho?: true
  }

  export type ArquivoSumAggregateInputType = {
    tamanho?: true
  }

  export type ArquivoMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    caminho?: true
    tamanho?: true
    criado_em?: true
    tipo_logico?: true
    incidenteId?: true
  }

  export type ArquivoMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    caminho?: true
    tamanho?: true
    criado_em?: true
    tipo_logico?: true
    incidenteId?: true
  }

  export type ArquivoCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    caminho?: true
    tamanho?: true
    criado_em?: true
    tipo_logico?: true
    incidenteId?: true
    _all?: true
  }

  export type ArquivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arquivo to aggregate.
     */
    where?: ArquivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arquivos to fetch.
     */
    orderBy?: ArquivoOrderByWithRelationInput | ArquivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArquivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arquivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arquivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arquivos
    **/
    _count?: true | ArquivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArquivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArquivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArquivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArquivoMaxAggregateInputType
  }

  export type GetArquivoAggregateType<T extends ArquivoAggregateArgs> = {
        [P in keyof T & keyof AggregateArquivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArquivo[P]>
      : GetScalarType<T[P], AggregateArquivo[P]>
  }




  export type ArquivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArquivoWhereInput
    orderBy?: ArquivoOrderByWithAggregationInput | ArquivoOrderByWithAggregationInput[]
    by: ArquivoScalarFieldEnum[] | ArquivoScalarFieldEnum
    having?: ArquivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArquivoCountAggregateInputType | true
    _avg?: ArquivoAvgAggregateInputType
    _sum?: ArquivoSumAggregateInputType
    _min?: ArquivoMinAggregateInputType
    _max?: ArquivoMaxAggregateInputType
  }

  export type ArquivoGroupByOutputType = {
    id: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em: Date
    tipo_logico: $Enums.TipoLogicoArquivo
    incidenteId: string | null
    _count: ArquivoCountAggregateOutputType | null
    _avg: ArquivoAvgAggregateOutputType | null
    _sum: ArquivoSumAggregateOutputType | null
    _min: ArquivoMinAggregateOutputType | null
    _max: ArquivoMaxAggregateOutputType | null
  }

  type GetArquivoGroupByPayload<T extends ArquivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArquivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArquivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArquivoGroupByOutputType[P]>
            : GetScalarType<T[P], ArquivoGroupByOutputType[P]>
        }
      >
    >


  export type ArquivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    caminho?: boolean
    tamanho?: boolean
    criado_em?: boolean
    tipo_logico?: boolean
    incidenteId?: boolean
    incidente?: boolean | Arquivo$incidenteArgs<ExtArgs>
    postImagemCapa?: boolean | Arquivo$postImagemCapaArgs<ExtArgs>
    usuarioFoto?: boolean | Arquivo$usuarioFotoArgs<ExtArgs>
    _count?: boolean | ArquivoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arquivo"]>



  export type ArquivoSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    caminho?: boolean
    tamanho?: boolean
    criado_em?: boolean
    tipo_logico?: boolean
    incidenteId?: boolean
  }

  export type ArquivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "caminho" | "tamanho" | "criado_em" | "tipo_logico" | "incidenteId", ExtArgs["result"]["arquivo"]>
  export type ArquivoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidente?: boolean | Arquivo$incidenteArgs<ExtArgs>
    postImagemCapa?: boolean | Arquivo$postImagemCapaArgs<ExtArgs>
    usuarioFoto?: boolean | Arquivo$usuarioFotoArgs<ExtArgs>
    _count?: boolean | ArquivoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArquivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arquivo"
    objects: {
      incidente: Prisma.$IncidentePayload<ExtArgs> | null
      postImagemCapa: Prisma.$PostPayload<ExtArgs>[]
      usuarioFoto: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      tipo: string
      caminho: string
      tamanho: number
      criado_em: Date
      tipo_logico: $Enums.TipoLogicoArquivo
      incidenteId: string | null
    }, ExtArgs["result"]["arquivo"]>
    composites: {}
  }

  type ArquivoGetPayload<S extends boolean | null | undefined | ArquivoDefaultArgs> = $Result.GetResult<Prisma.$ArquivoPayload, S>

  type ArquivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArquivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArquivoCountAggregateInputType | true
    }

  export interface ArquivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arquivo'], meta: { name: 'Arquivo' } }
    /**
     * Find zero or one Arquivo that matches the filter.
     * @param {ArquivoFindUniqueArgs} args - Arguments to find a Arquivo
     * @example
     * // Get one Arquivo
     * const arquivo = await prisma.arquivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArquivoFindUniqueArgs>(args: SelectSubset<T, ArquivoFindUniqueArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Arquivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArquivoFindUniqueOrThrowArgs} args - Arguments to find a Arquivo
     * @example
     * // Get one Arquivo
     * const arquivo = await prisma.arquivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArquivoFindUniqueOrThrowArgs>(args: SelectSubset<T, ArquivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arquivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoFindFirstArgs} args - Arguments to find a Arquivo
     * @example
     * // Get one Arquivo
     * const arquivo = await prisma.arquivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArquivoFindFirstArgs>(args?: SelectSubset<T, ArquivoFindFirstArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arquivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoFindFirstOrThrowArgs} args - Arguments to find a Arquivo
     * @example
     * // Get one Arquivo
     * const arquivo = await prisma.arquivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArquivoFindFirstOrThrowArgs>(args?: SelectSubset<T, ArquivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Arquivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arquivos
     * const arquivos = await prisma.arquivo.findMany()
     * 
     * // Get first 10 Arquivos
     * const arquivos = await prisma.arquivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arquivoWithIdOnly = await prisma.arquivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArquivoFindManyArgs>(args?: SelectSubset<T, ArquivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Arquivo.
     * @param {ArquivoCreateArgs} args - Arguments to create a Arquivo.
     * @example
     * // Create one Arquivo
     * const Arquivo = await prisma.arquivo.create({
     *   data: {
     *     // ... data to create a Arquivo
     *   }
     * })
     * 
     */
    create<T extends ArquivoCreateArgs>(args: SelectSubset<T, ArquivoCreateArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Arquivos.
     * @param {ArquivoCreateManyArgs} args - Arguments to create many Arquivos.
     * @example
     * // Create many Arquivos
     * const arquivo = await prisma.arquivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArquivoCreateManyArgs>(args?: SelectSubset<T, ArquivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Arquivo.
     * @param {ArquivoDeleteArgs} args - Arguments to delete one Arquivo.
     * @example
     * // Delete one Arquivo
     * const Arquivo = await prisma.arquivo.delete({
     *   where: {
     *     // ... filter to delete one Arquivo
     *   }
     * })
     * 
     */
    delete<T extends ArquivoDeleteArgs>(args: SelectSubset<T, ArquivoDeleteArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Arquivo.
     * @param {ArquivoUpdateArgs} args - Arguments to update one Arquivo.
     * @example
     * // Update one Arquivo
     * const arquivo = await prisma.arquivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArquivoUpdateArgs>(args: SelectSubset<T, ArquivoUpdateArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Arquivos.
     * @param {ArquivoDeleteManyArgs} args - Arguments to filter Arquivos to delete.
     * @example
     * // Delete a few Arquivos
     * const { count } = await prisma.arquivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArquivoDeleteManyArgs>(args?: SelectSubset<T, ArquivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arquivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arquivos
     * const arquivo = await prisma.arquivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArquivoUpdateManyArgs>(args: SelectSubset<T, ArquivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Arquivo.
     * @param {ArquivoUpsertArgs} args - Arguments to update or create a Arquivo.
     * @example
     * // Update or create a Arquivo
     * const arquivo = await prisma.arquivo.upsert({
     *   create: {
     *     // ... data to create a Arquivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arquivo we want to update
     *   }
     * })
     */
    upsert<T extends ArquivoUpsertArgs>(args: SelectSubset<T, ArquivoUpsertArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Arquivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoCountArgs} args - Arguments to filter Arquivos to count.
     * @example
     * // Count the number of Arquivos
     * const count = await prisma.arquivo.count({
     *   where: {
     *     // ... the filter for the Arquivos we want to count
     *   }
     * })
    **/
    count<T extends ArquivoCountArgs>(
      args?: Subset<T, ArquivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArquivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arquivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArquivoAggregateArgs>(args: Subset<T, ArquivoAggregateArgs>): Prisma.PrismaPromise<GetArquivoAggregateType<T>>

    /**
     * Group by Arquivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArquivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArquivoGroupByArgs['orderBy'] }
        : { orderBy?: ArquivoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArquivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArquivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arquivo model
   */
  readonly fields: ArquivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arquivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArquivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incidente<T extends Arquivo$incidenteArgs<ExtArgs> = {}>(args?: Subset<T, Arquivo$incidenteArgs<ExtArgs>>): Prisma__IncidenteClient<$Result.GetResult<Prisma.$IncidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    postImagemCapa<T extends Arquivo$postImagemCapaArgs<ExtArgs> = {}>(args?: Subset<T, Arquivo$postImagemCapaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarioFoto<T extends Arquivo$usuarioFotoArgs<ExtArgs> = {}>(args?: Subset<T, Arquivo$usuarioFotoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Arquivo model
   */
  interface ArquivoFieldRefs {
    readonly id: FieldRef<"Arquivo", 'String'>
    readonly nome: FieldRef<"Arquivo", 'String'>
    readonly tipo: FieldRef<"Arquivo", 'String'>
    readonly caminho: FieldRef<"Arquivo", 'String'>
    readonly tamanho: FieldRef<"Arquivo", 'Int'>
    readonly criado_em: FieldRef<"Arquivo", 'DateTime'>
    readonly tipo_logico: FieldRef<"Arquivo", 'TipoLogicoArquivo'>
    readonly incidenteId: FieldRef<"Arquivo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Arquivo findUnique
   */
  export type ArquivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    /**
     * Filter, which Arquivo to fetch.
     */
    where: ArquivoWhereUniqueInput
  }

  /**
   * Arquivo findUniqueOrThrow
   */
  export type ArquivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    /**
     * Filter, which Arquivo to fetch.
     */
    where: ArquivoWhereUniqueInput
  }

  /**
   * Arquivo findFirst
   */
  export type ArquivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    /**
     * Filter, which Arquivo to fetch.
     */
    where?: ArquivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arquivos to fetch.
     */
    orderBy?: ArquivoOrderByWithRelationInput | ArquivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arquivos.
     */
    cursor?: ArquivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arquivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arquivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arquivos.
     */
    distinct?: ArquivoScalarFieldEnum | ArquivoScalarFieldEnum[]
  }

  /**
   * Arquivo findFirstOrThrow
   */
  export type ArquivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    /**
     * Filter, which Arquivo to fetch.
     */
    where?: ArquivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arquivos to fetch.
     */
    orderBy?: ArquivoOrderByWithRelationInput | ArquivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arquivos.
     */
    cursor?: ArquivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arquivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arquivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arquivos.
     */
    distinct?: ArquivoScalarFieldEnum | ArquivoScalarFieldEnum[]
  }

  /**
   * Arquivo findMany
   */
  export type ArquivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    /**
     * Filter, which Arquivos to fetch.
     */
    where?: ArquivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arquivos to fetch.
     */
    orderBy?: ArquivoOrderByWithRelationInput | ArquivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arquivos.
     */
    cursor?: ArquivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arquivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arquivos.
     */
    skip?: number
    distinct?: ArquivoScalarFieldEnum | ArquivoScalarFieldEnum[]
  }

  /**
   * Arquivo create
   */
  export type ArquivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    /**
     * The data needed to create a Arquivo.
     */
    data: XOR<ArquivoCreateInput, ArquivoUncheckedCreateInput>
  }

  /**
   * Arquivo createMany
   */
  export type ArquivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arquivos.
     */
    data: ArquivoCreateManyInput | ArquivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arquivo update
   */
  export type ArquivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    /**
     * The data needed to update a Arquivo.
     */
    data: XOR<ArquivoUpdateInput, ArquivoUncheckedUpdateInput>
    /**
     * Choose, which Arquivo to update.
     */
    where: ArquivoWhereUniqueInput
  }

  /**
   * Arquivo updateMany
   */
  export type ArquivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arquivos.
     */
    data: XOR<ArquivoUpdateManyMutationInput, ArquivoUncheckedUpdateManyInput>
    /**
     * Filter which Arquivos to update
     */
    where?: ArquivoWhereInput
    /**
     * Limit how many Arquivos to update.
     */
    limit?: number
  }

  /**
   * Arquivo upsert
   */
  export type ArquivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    /**
     * The filter to search for the Arquivo to update in case it exists.
     */
    where: ArquivoWhereUniqueInput
    /**
     * In case the Arquivo found by the `where` argument doesn't exist, create a new Arquivo with this data.
     */
    create: XOR<ArquivoCreateInput, ArquivoUncheckedCreateInput>
    /**
     * In case the Arquivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArquivoUpdateInput, ArquivoUncheckedUpdateInput>
  }

  /**
   * Arquivo delete
   */
  export type ArquivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    /**
     * Filter which Arquivo to delete.
     */
    where: ArquivoWhereUniqueInput
  }

  /**
   * Arquivo deleteMany
   */
  export type ArquivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arquivos to delete
     */
    where?: ArquivoWhereInput
    /**
     * Limit how many Arquivos to delete.
     */
    limit?: number
  }

  /**
   * Arquivo.incidente
   */
  export type Arquivo$incidenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
    where?: IncidenteWhereInput
  }

  /**
   * Arquivo.postImagemCapa
   */
  export type Arquivo$postImagemCapaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Arquivo.usuarioFoto
   */
  export type Arquivo$usuarioFotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Arquivo without action
   */
  export type ArquivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
  }


  /**
   * Model Incidente
   */

  export type AggregateIncidente = {
    _count: IncidenteCountAggregateOutputType | null
    _min: IncidenteMinAggregateOutputType | null
    _max: IncidenteMaxAggregateOutputType | null
  }

  export type IncidenteMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    localizacao: string | null
    prioridade: $Enums.IncidentPriority | null
    status: $Enums.IncidentStatus | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type IncidenteMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    localizacao: string | null
    prioridade: $Enums.IncidentPriority | null
    status: $Enums.IncidentStatus | null
    criado_em: Date | null
    atualizado_em: Date | null
  }

  export type IncidenteCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    localizacao: number
    prioridade: number
    status: number
    criado_em: number
    atualizado_em: number
    _all: number
  }


  export type IncidenteMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    localizacao?: true
    prioridade?: true
    status?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type IncidenteMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    localizacao?: true
    prioridade?: true
    status?: true
    criado_em?: true
    atualizado_em?: true
  }

  export type IncidenteCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    localizacao?: true
    prioridade?: true
    status?: true
    criado_em?: true
    atualizado_em?: true
    _all?: true
  }

  export type IncidenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidente to aggregate.
     */
    where?: IncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidentes to fetch.
     */
    orderBy?: IncidenteOrderByWithRelationInput | IncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidentes
    **/
    _count?: true | IncidenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidenteMaxAggregateInputType
  }

  export type GetIncidenteAggregateType<T extends IncidenteAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidente[P]>
      : GetScalarType<T[P], AggregateIncidente[P]>
  }




  export type IncidenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidenteWhereInput
    orderBy?: IncidenteOrderByWithAggregationInput | IncidenteOrderByWithAggregationInput[]
    by: IncidenteScalarFieldEnum[] | IncidenteScalarFieldEnum
    having?: IncidenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidenteCountAggregateInputType | true
    _min?: IncidenteMinAggregateInputType
    _max?: IncidenteMaxAggregateInputType
  }

  export type IncidenteGroupByOutputType = {
    id: string
    titulo: string
    descricao: string
    localizacao: string
    prioridade: $Enums.IncidentPriority
    status: $Enums.IncidentStatus
    criado_em: Date
    atualizado_em: Date
    _count: IncidenteCountAggregateOutputType | null
    _min: IncidenteMinAggregateOutputType | null
    _max: IncidenteMaxAggregateOutputType | null
  }

  type GetIncidenteGroupByPayload<T extends IncidenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidenteGroupByOutputType[P]>
            : GetScalarType<T[P], IncidenteGroupByOutputType[P]>
        }
      >
    >


  export type IncidenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    localizacao?: boolean
    prioridade?: boolean
    status?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
    anexos?: boolean | Incidente$anexosArgs<ExtArgs>
    _count?: boolean | IncidenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidente"]>



  export type IncidenteSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    localizacao?: boolean
    prioridade?: boolean
    status?: boolean
    criado_em?: boolean
    atualizado_em?: boolean
  }

  export type IncidenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "localizacao" | "prioridade" | "status" | "criado_em" | "atualizado_em", ExtArgs["result"]["incidente"]>
  export type IncidenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anexos?: boolean | Incidente$anexosArgs<ExtArgs>
    _count?: boolean | IncidenteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $IncidentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incidente"
    objects: {
      anexos: Prisma.$ArquivoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string
      localizacao: string
      prioridade: $Enums.IncidentPriority
      status: $Enums.IncidentStatus
      criado_em: Date
      atualizado_em: Date
    }, ExtArgs["result"]["incidente"]>
    composites: {}
  }

  type IncidenteGetPayload<S extends boolean | null | undefined | IncidenteDefaultArgs> = $Result.GetResult<Prisma.$IncidentePayload, S>

  type IncidenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidenteCountAggregateInputType | true
    }

  export interface IncidenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incidente'], meta: { name: 'Incidente' } }
    /**
     * Find zero or one Incidente that matches the filter.
     * @param {IncidenteFindUniqueArgs} args - Arguments to find a Incidente
     * @example
     * // Get one Incidente
     * const incidente = await prisma.incidente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidenteFindUniqueArgs>(args: SelectSubset<T, IncidenteFindUniqueArgs<ExtArgs>>): Prisma__IncidenteClient<$Result.GetResult<Prisma.$IncidentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incidente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidenteFindUniqueOrThrowArgs} args - Arguments to find a Incidente
     * @example
     * // Get one Incidente
     * const incidente = await prisma.incidente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidenteFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidenteClient<$Result.GetResult<Prisma.$IncidentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incidente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteFindFirstArgs} args - Arguments to find a Incidente
     * @example
     * // Get one Incidente
     * const incidente = await prisma.incidente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidenteFindFirstArgs>(args?: SelectSubset<T, IncidenteFindFirstArgs<ExtArgs>>): Prisma__IncidenteClient<$Result.GetResult<Prisma.$IncidentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incidente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteFindFirstOrThrowArgs} args - Arguments to find a Incidente
     * @example
     * // Get one Incidente
     * const incidente = await prisma.incidente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidenteFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidenteClient<$Result.GetResult<Prisma.$IncidentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidentes
     * const incidentes = await prisma.incidente.findMany()
     * 
     * // Get first 10 Incidentes
     * const incidentes = await prisma.incidente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidenteWithIdOnly = await prisma.incidente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidenteFindManyArgs>(args?: SelectSubset<T, IncidenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incidente.
     * @param {IncidenteCreateArgs} args - Arguments to create a Incidente.
     * @example
     * // Create one Incidente
     * const Incidente = await prisma.incidente.create({
     *   data: {
     *     // ... data to create a Incidente
     *   }
     * })
     * 
     */
    create<T extends IncidenteCreateArgs>(args: SelectSubset<T, IncidenteCreateArgs<ExtArgs>>): Prisma__IncidenteClient<$Result.GetResult<Prisma.$IncidentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidentes.
     * @param {IncidenteCreateManyArgs} args - Arguments to create many Incidentes.
     * @example
     * // Create many Incidentes
     * const incidente = await prisma.incidente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidenteCreateManyArgs>(args?: SelectSubset<T, IncidenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Incidente.
     * @param {IncidenteDeleteArgs} args - Arguments to delete one Incidente.
     * @example
     * // Delete one Incidente
     * const Incidente = await prisma.incidente.delete({
     *   where: {
     *     // ... filter to delete one Incidente
     *   }
     * })
     * 
     */
    delete<T extends IncidenteDeleteArgs>(args: SelectSubset<T, IncidenteDeleteArgs<ExtArgs>>): Prisma__IncidenteClient<$Result.GetResult<Prisma.$IncidentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incidente.
     * @param {IncidenteUpdateArgs} args - Arguments to update one Incidente.
     * @example
     * // Update one Incidente
     * const incidente = await prisma.incidente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidenteUpdateArgs>(args: SelectSubset<T, IncidenteUpdateArgs<ExtArgs>>): Prisma__IncidenteClient<$Result.GetResult<Prisma.$IncidentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidentes.
     * @param {IncidenteDeleteManyArgs} args - Arguments to filter Incidentes to delete.
     * @example
     * // Delete a few Incidentes
     * const { count } = await prisma.incidente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidenteDeleteManyArgs>(args?: SelectSubset<T, IncidenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidentes
     * const incidente = await prisma.incidente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidenteUpdateManyArgs>(args: SelectSubset<T, IncidenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Incidente.
     * @param {IncidenteUpsertArgs} args - Arguments to update or create a Incidente.
     * @example
     * // Update or create a Incidente
     * const incidente = await prisma.incidente.upsert({
     *   create: {
     *     // ... data to create a Incidente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incidente we want to update
     *   }
     * })
     */
    upsert<T extends IncidenteUpsertArgs>(args: SelectSubset<T, IncidenteUpsertArgs<ExtArgs>>): Prisma__IncidenteClient<$Result.GetResult<Prisma.$IncidentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteCountArgs} args - Arguments to filter Incidentes to count.
     * @example
     * // Count the number of Incidentes
     * const count = await prisma.incidente.count({
     *   where: {
     *     // ... the filter for the Incidentes we want to count
     *   }
     * })
    **/
    count<T extends IncidenteCountArgs>(
      args?: Subset<T, IncidenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incidente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidenteAggregateArgs>(args: Subset<T, IncidenteAggregateArgs>): Prisma.PrismaPromise<GetIncidenteAggregateType<T>>

    /**
     * Group by Incidente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidenteGroupByArgs['orderBy'] }
        : { orderBy?: IncidenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incidente model
   */
  readonly fields: IncidenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incidente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anexos<T extends Incidente$anexosArgs<ExtArgs> = {}>(args?: Subset<T, Incidente$anexosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incidente model
   */
  interface IncidenteFieldRefs {
    readonly id: FieldRef<"Incidente", 'String'>
    readonly titulo: FieldRef<"Incidente", 'String'>
    readonly descricao: FieldRef<"Incidente", 'String'>
    readonly localizacao: FieldRef<"Incidente", 'String'>
    readonly prioridade: FieldRef<"Incidente", 'IncidentPriority'>
    readonly status: FieldRef<"Incidente", 'IncidentStatus'>
    readonly criado_em: FieldRef<"Incidente", 'DateTime'>
    readonly atualizado_em: FieldRef<"Incidente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incidente findUnique
   */
  export type IncidenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
    /**
     * Filter, which Incidente to fetch.
     */
    where: IncidenteWhereUniqueInput
  }

  /**
   * Incidente findUniqueOrThrow
   */
  export type IncidenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
    /**
     * Filter, which Incidente to fetch.
     */
    where: IncidenteWhereUniqueInput
  }

  /**
   * Incidente findFirst
   */
  export type IncidenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
    /**
     * Filter, which Incidente to fetch.
     */
    where?: IncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidentes to fetch.
     */
    orderBy?: IncidenteOrderByWithRelationInput | IncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidentes.
     */
    cursor?: IncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidentes.
     */
    distinct?: IncidenteScalarFieldEnum | IncidenteScalarFieldEnum[]
  }

  /**
   * Incidente findFirstOrThrow
   */
  export type IncidenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
    /**
     * Filter, which Incidente to fetch.
     */
    where?: IncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidentes to fetch.
     */
    orderBy?: IncidenteOrderByWithRelationInput | IncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidentes.
     */
    cursor?: IncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidentes.
     */
    distinct?: IncidenteScalarFieldEnum | IncidenteScalarFieldEnum[]
  }

  /**
   * Incidente findMany
   */
  export type IncidenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
    /**
     * Filter, which Incidentes to fetch.
     */
    where?: IncidenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidentes to fetch.
     */
    orderBy?: IncidenteOrderByWithRelationInput | IncidenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidentes.
     */
    cursor?: IncidenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidentes.
     */
    skip?: number
    distinct?: IncidenteScalarFieldEnum | IncidenteScalarFieldEnum[]
  }

  /**
   * Incidente create
   */
  export type IncidenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Incidente.
     */
    data: XOR<IncidenteCreateInput, IncidenteUncheckedCreateInput>
  }

  /**
   * Incidente createMany
   */
  export type IncidenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidentes.
     */
    data: IncidenteCreateManyInput | IncidenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incidente update
   */
  export type IncidenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Incidente.
     */
    data: XOR<IncidenteUpdateInput, IncidenteUncheckedUpdateInput>
    /**
     * Choose, which Incidente to update.
     */
    where: IncidenteWhereUniqueInput
  }

  /**
   * Incidente updateMany
   */
  export type IncidenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidentes.
     */
    data: XOR<IncidenteUpdateManyMutationInput, IncidenteUncheckedUpdateManyInput>
    /**
     * Filter which Incidentes to update
     */
    where?: IncidenteWhereInput
    /**
     * Limit how many Incidentes to update.
     */
    limit?: number
  }

  /**
   * Incidente upsert
   */
  export type IncidenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Incidente to update in case it exists.
     */
    where: IncidenteWhereUniqueInput
    /**
     * In case the Incidente found by the `where` argument doesn't exist, create a new Incidente with this data.
     */
    create: XOR<IncidenteCreateInput, IncidenteUncheckedCreateInput>
    /**
     * In case the Incidente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidenteUpdateInput, IncidenteUncheckedUpdateInput>
  }

  /**
   * Incidente delete
   */
  export type IncidenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
    /**
     * Filter which Incidente to delete.
     */
    where: IncidenteWhereUniqueInput
  }

  /**
   * Incidente deleteMany
   */
  export type IncidenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidentes to delete
     */
    where?: IncidenteWhereInput
    /**
     * Limit how many Incidentes to delete.
     */
    limit?: number
  }

  /**
   * Incidente.anexos
   */
  export type Incidente$anexosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArquivoInclude<ExtArgs> | null
    where?: ArquivoWhereInput
    orderBy?: ArquivoOrderByWithRelationInput | ArquivoOrderByWithRelationInput[]
    cursor?: ArquivoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArquivoScalarFieldEnum | ArquivoScalarFieldEnum[]
  }

  /**
   * Incidente without action
   */
  export type IncidenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incidente
     */
    select?: IncidenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incidente
     */
    omit?: IncidenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidenteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    slug: 'slug',
    conteudo: 'conteudo',
    resumo: 'resumo',
    publicado_em: 'publicado_em',
    atualizado_em: 'atualizado_em',
    status: 'status',
    imagem_capa_id: 'imagem_capa_id',
    autor_id: 'autor_id',
    categoria_id: 'categoria_id'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    slug: 'slug',
    descricao: 'descricao'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    slug: 'slug'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const PostTagScalarFieldEnum: {
    post_id: 'post_id',
    tag_id: 'tag_id'
  };

  export type PostTagScalarFieldEnum = (typeof PostTagScalarFieldEnum)[keyof typeof PostTagScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    post_id: 'post_id',
    nome: 'nome',
    email: 'email',
    mensagem: 'mensagem',
    criado_em: 'criado_em',
    aprovado: 'aprovado'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    tipo: 'tipo',
    bio: 'bio',
    foto_id: 'foto_id',
    criado_em: 'criado_em'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ArquivoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    caminho: 'caminho',
    tamanho: 'tamanho',
    criado_em: 'criado_em',
    tipo_logico: 'tipo_logico',
    incidenteId: 'incidenteId'
  };

  export type ArquivoScalarFieldEnum = (typeof ArquivoScalarFieldEnum)[keyof typeof ArquivoScalarFieldEnum]


  export const IncidenteScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    localizacao: 'localizacao',
    prioridade: 'prioridade',
    status: 'status',
    criado_em: 'criado_em',
    atualizado_em: 'atualizado_em'
  };

  export type IncidenteScalarFieldEnum = (typeof IncidenteScalarFieldEnum)[keyof typeof IncidenteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PostOrderByRelevanceFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    slug: 'slug',
    conteudo: 'conteudo',
    resumo: 'resumo',
    imagem_capa_id: 'imagem_capa_id',
    autor_id: 'autor_id',
    categoria_id: 'categoria_id'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const CategoriaOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    slug: 'slug',
    descricao: 'descricao'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const TagOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    slug: 'slug'
  };

  export type TagOrderByRelevanceFieldEnum = (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]


  export const PostTagOrderByRelevanceFieldEnum: {
    post_id: 'post_id',
    tag_id: 'tag_id'
  };

  export type PostTagOrderByRelevanceFieldEnum = (typeof PostTagOrderByRelevanceFieldEnum)[keyof typeof PostTagOrderByRelevanceFieldEnum]


  export const ComentarioOrderByRelevanceFieldEnum: {
    id: 'id',
    post_id: 'post_id',
    nome: 'nome',
    email: 'email',
    mensagem: 'mensagem'
  };

  export type ComentarioOrderByRelevanceFieldEnum = (typeof ComentarioOrderByRelevanceFieldEnum)[keyof typeof ComentarioOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    bio: 'bio',
    foto_id: 'foto_id'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const ArquivoOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    caminho: 'caminho',
    incidenteId: 'incidenteId'
  };

  export type ArquivoOrderByRelevanceFieldEnum = (typeof ArquivoOrderByRelevanceFieldEnum)[keyof typeof ArquivoOrderByRelevanceFieldEnum]


  export const IncidenteOrderByRelevanceFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    localizacao: 'localizacao'
  };

  export type IncidenteOrderByRelevanceFieldEnum = (typeof IncidenteOrderByRelevanceFieldEnum)[keyof typeof IncidenteOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UsuarioTipo'
   */
  export type EnumUsuarioTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsuarioTipo'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'TipoLogicoArquivo'
   */
  export type EnumTipoLogicoArquivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoLogicoArquivo'>
    


  /**
   * Reference to a field of type 'IncidentPriority'
   */
  export type EnumIncidentPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentPriority'>
    


  /**
   * Reference to a field of type 'IncidentStatus'
   */
  export type EnumIncidentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    titulo?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    conteudo?: StringFilter<"Post"> | string
    resumo?: StringNullableFilter<"Post"> | string | null
    publicado_em?: DateTimeNullableFilter<"Post"> | Date | string | null
    atualizado_em?: DateTimeFilter<"Post"> | Date | string
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    imagem_capa_id?: StringFilter<"Post"> | string
    autor_id?: StringFilter<"Post"> | string
    categoria_id?: StringFilter<"Post"> | string
    imagem_capa?: XOR<ArquivoScalarRelationFilter, ArquivoWhereInput>
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    tags?: PostTagListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    slug?: SortOrder
    conteudo?: SortOrder
    resumo?: SortOrderInput | SortOrder
    publicado_em?: SortOrderInput | SortOrder
    atualizado_em?: SortOrder
    status?: SortOrder
    imagem_capa_id?: SortOrder
    autor_id?: SortOrder
    categoria_id?: SortOrder
    imagem_capa?: ArquivoOrderByWithRelationInput
    autor?: UsuarioOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    tags?: PostTagOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    titulo?: StringFilter<"Post"> | string
    conteudo?: StringFilter<"Post"> | string
    resumo?: StringNullableFilter<"Post"> | string | null
    publicado_em?: DateTimeNullableFilter<"Post"> | Date | string | null
    atualizado_em?: DateTimeFilter<"Post"> | Date | string
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    imagem_capa_id?: StringFilter<"Post"> | string
    autor_id?: StringFilter<"Post"> | string
    categoria_id?: StringFilter<"Post"> | string
    imagem_capa?: XOR<ArquivoScalarRelationFilter, ArquivoWhereInput>
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    tags?: PostTagListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    slug?: SortOrder
    conteudo?: SortOrder
    resumo?: SortOrderInput | SortOrder
    publicado_em?: SortOrderInput | SortOrder
    atualizado_em?: SortOrder
    status?: SortOrder
    imagem_capa_id?: SortOrder
    autor_id?: SortOrder
    categoria_id?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    titulo?: StringWithAggregatesFilter<"Post"> | string
    slug?: StringWithAggregatesFilter<"Post"> | string
    conteudo?: StringWithAggregatesFilter<"Post"> | string
    resumo?: StringNullableWithAggregatesFilter<"Post"> | string | null
    publicado_em?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    atualizado_em?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    status?: EnumPostStatusWithAggregatesFilter<"Post"> | $Enums.PostStatus
    imagem_capa_id?: StringWithAggregatesFilter<"Post"> | string
    autor_id?: StringWithAggregatesFilter<"Post"> | string
    categoria_id?: StringWithAggregatesFilter<"Post"> | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    nome?: StringFilter<"Categoria"> | string
    slug?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    posts?: PostListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    descricao?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    posts?: PostListRelationFilter
  }, "id" | "slug">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    nome?: StringWithAggregatesFilter<"Categoria"> | string
    slug?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    nome?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    posts?: PostTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    posts?: PostTagOrderByRelationAggregateInput
    _relevance?: TagOrderByRelevanceInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    nome?: StringFilter<"Tag"> | string
    posts?: PostTagListRelationFilter
  }, "id" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    nome?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type PostTagWhereInput = {
    AND?: PostTagWhereInput | PostTagWhereInput[]
    OR?: PostTagWhereInput[]
    NOT?: PostTagWhereInput | PostTagWhereInput[]
    post_id?: StringFilter<"PostTag"> | string
    tag_id?: StringFilter<"PostTag"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type PostTagOrderByWithRelationInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
    post?: PostOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
    _relevance?: PostTagOrderByRelevanceInput
  }

  export type PostTagWhereUniqueInput = Prisma.AtLeast<{
    post_id_tag_id?: PostTagPost_idTag_idCompoundUniqueInput
    AND?: PostTagWhereInput | PostTagWhereInput[]
    OR?: PostTagWhereInput[]
    NOT?: PostTagWhereInput | PostTagWhereInput[]
    post_id?: StringFilter<"PostTag"> | string
    tag_id?: StringFilter<"PostTag"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "post_id_tag_id">

  export type PostTagOrderByWithAggregationInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
    _count?: PostTagCountOrderByAggregateInput
    _max?: PostTagMaxOrderByAggregateInput
    _min?: PostTagMinOrderByAggregateInput
  }

  export type PostTagScalarWhereWithAggregatesInput = {
    AND?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[]
    OR?: PostTagScalarWhereWithAggregatesInput[]
    NOT?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[]
    post_id?: StringWithAggregatesFilter<"PostTag"> | string
    tag_id?: StringWithAggregatesFilter<"PostTag"> | string
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: StringFilter<"Comentario"> | string
    post_id?: StringFilter<"Comentario"> | string
    nome?: StringFilter<"Comentario"> | string
    email?: StringFilter<"Comentario"> | string
    mensagem?: StringFilter<"Comentario"> | string
    criado_em?: DateTimeFilter<"Comentario"> | Date | string
    aprovado?: BoolFilter<"Comentario"> | boolean
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    post_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    mensagem?: SortOrder
    criado_em?: SortOrder
    aprovado?: SortOrder
    post?: PostOrderByWithRelationInput
    _relevance?: ComentarioOrderByRelevanceInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    post_id?: StringFilter<"Comentario"> | string
    nome?: StringFilter<"Comentario"> | string
    email?: StringFilter<"Comentario"> | string
    mensagem?: StringFilter<"Comentario"> | string
    criado_em?: DateTimeFilter<"Comentario"> | Date | string
    aprovado?: BoolFilter<"Comentario"> | boolean
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    post_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    mensagem?: SortOrder
    criado_em?: SortOrder
    aprovado?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comentario"> | string
    post_id?: StringWithAggregatesFilter<"Comentario"> | string
    nome?: StringWithAggregatesFilter<"Comentario"> | string
    email?: StringWithAggregatesFilter<"Comentario"> | string
    mensagem?: StringWithAggregatesFilter<"Comentario"> | string
    criado_em?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    aprovado?: BoolWithAggregatesFilter<"Comentario"> | boolean
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha_hash?: StringFilter<"Usuario"> | string
    tipo?: EnumUsuarioTipoFilter<"Usuario"> | $Enums.UsuarioTipo
    bio?: StringNullableFilter<"Usuario"> | string | null
    foto_id?: StringNullableFilter<"Usuario"> | string | null
    criado_em?: DateTimeFilter<"Usuario"> | Date | string
    foto?: XOR<ArquivoNullableScalarRelationFilter, ArquivoWhereInput> | null
    posts?: PostListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo?: SortOrder
    bio?: SortOrderInput | SortOrder
    foto_id?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    foto?: ArquivoOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha_hash?: StringFilter<"Usuario"> | string
    tipo?: EnumUsuarioTipoFilter<"Usuario"> | $Enums.UsuarioTipo
    bio?: StringNullableFilter<"Usuario"> | string | null
    foto_id?: StringNullableFilter<"Usuario"> | string | null
    criado_em?: DateTimeFilter<"Usuario"> | Date | string
    foto?: XOR<ArquivoNullableScalarRelationFilter, ArquivoWhereInput> | null
    posts?: PostListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo?: SortOrder
    bio?: SortOrderInput | SortOrder
    foto_id?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha_hash?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: EnumUsuarioTipoWithAggregatesFilter<"Usuario"> | $Enums.UsuarioTipo
    bio?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    foto_id?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    criado_em?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ArquivoWhereInput = {
    AND?: ArquivoWhereInput | ArquivoWhereInput[]
    OR?: ArquivoWhereInput[]
    NOT?: ArquivoWhereInput | ArquivoWhereInput[]
    id?: StringFilter<"Arquivo"> | string
    nome?: StringFilter<"Arquivo"> | string
    tipo?: StringFilter<"Arquivo"> | string
    caminho?: StringFilter<"Arquivo"> | string
    tamanho?: IntFilter<"Arquivo"> | number
    criado_em?: DateTimeFilter<"Arquivo"> | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFilter<"Arquivo"> | $Enums.TipoLogicoArquivo
    incidenteId?: StringNullableFilter<"Arquivo"> | string | null
    incidente?: XOR<IncidenteNullableScalarRelationFilter, IncidenteWhereInput> | null
    postImagemCapa?: PostListRelationFilter
    usuarioFoto?: UsuarioListRelationFilter
  }

  export type ArquivoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    caminho?: SortOrder
    tamanho?: SortOrder
    criado_em?: SortOrder
    tipo_logico?: SortOrder
    incidenteId?: SortOrderInput | SortOrder
    incidente?: IncidenteOrderByWithRelationInput
    postImagemCapa?: PostOrderByRelationAggregateInput
    usuarioFoto?: UsuarioOrderByRelationAggregateInput
    _relevance?: ArquivoOrderByRelevanceInput
  }

  export type ArquivoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArquivoWhereInput | ArquivoWhereInput[]
    OR?: ArquivoWhereInput[]
    NOT?: ArquivoWhereInput | ArquivoWhereInput[]
    nome?: StringFilter<"Arquivo"> | string
    tipo?: StringFilter<"Arquivo"> | string
    caminho?: StringFilter<"Arquivo"> | string
    tamanho?: IntFilter<"Arquivo"> | number
    criado_em?: DateTimeFilter<"Arquivo"> | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFilter<"Arquivo"> | $Enums.TipoLogicoArquivo
    incidenteId?: StringNullableFilter<"Arquivo"> | string | null
    incidente?: XOR<IncidenteNullableScalarRelationFilter, IncidenteWhereInput> | null
    postImagemCapa?: PostListRelationFilter
    usuarioFoto?: UsuarioListRelationFilter
  }, "id">

  export type ArquivoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    caminho?: SortOrder
    tamanho?: SortOrder
    criado_em?: SortOrder
    tipo_logico?: SortOrder
    incidenteId?: SortOrderInput | SortOrder
    _count?: ArquivoCountOrderByAggregateInput
    _avg?: ArquivoAvgOrderByAggregateInput
    _max?: ArquivoMaxOrderByAggregateInput
    _min?: ArquivoMinOrderByAggregateInput
    _sum?: ArquivoSumOrderByAggregateInput
  }

  export type ArquivoScalarWhereWithAggregatesInput = {
    AND?: ArquivoScalarWhereWithAggregatesInput | ArquivoScalarWhereWithAggregatesInput[]
    OR?: ArquivoScalarWhereWithAggregatesInput[]
    NOT?: ArquivoScalarWhereWithAggregatesInput | ArquivoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Arquivo"> | string
    nome?: StringWithAggregatesFilter<"Arquivo"> | string
    tipo?: StringWithAggregatesFilter<"Arquivo"> | string
    caminho?: StringWithAggregatesFilter<"Arquivo"> | string
    tamanho?: IntWithAggregatesFilter<"Arquivo"> | number
    criado_em?: DateTimeWithAggregatesFilter<"Arquivo"> | Date | string
    tipo_logico?: EnumTipoLogicoArquivoWithAggregatesFilter<"Arquivo"> | $Enums.TipoLogicoArquivo
    incidenteId?: StringNullableWithAggregatesFilter<"Arquivo"> | string | null
  }

  export type IncidenteWhereInput = {
    AND?: IncidenteWhereInput | IncidenteWhereInput[]
    OR?: IncidenteWhereInput[]
    NOT?: IncidenteWhereInput | IncidenteWhereInput[]
    id?: StringFilter<"Incidente"> | string
    titulo?: StringFilter<"Incidente"> | string
    descricao?: StringFilter<"Incidente"> | string
    localizacao?: StringFilter<"Incidente"> | string
    prioridade?: EnumIncidentPriorityFilter<"Incidente"> | $Enums.IncidentPriority
    status?: EnumIncidentStatusFilter<"Incidente"> | $Enums.IncidentStatus
    criado_em?: DateTimeFilter<"Incidente"> | Date | string
    atualizado_em?: DateTimeFilter<"Incidente"> | Date | string
    anexos?: ArquivoListRelationFilter
  }

  export type IncidenteOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    anexos?: ArquivoOrderByRelationAggregateInput
    _relevance?: IncidenteOrderByRelevanceInput
  }

  export type IncidenteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidenteWhereInput | IncidenteWhereInput[]
    OR?: IncidenteWhereInput[]
    NOT?: IncidenteWhereInput | IncidenteWhereInput[]
    titulo?: StringFilter<"Incidente"> | string
    descricao?: StringFilter<"Incidente"> | string
    localizacao?: StringFilter<"Incidente"> | string
    prioridade?: EnumIncidentPriorityFilter<"Incidente"> | $Enums.IncidentPriority
    status?: EnumIncidentStatusFilter<"Incidente"> | $Enums.IncidentStatus
    criado_em?: DateTimeFilter<"Incidente"> | Date | string
    atualizado_em?: DateTimeFilter<"Incidente"> | Date | string
    anexos?: ArquivoListRelationFilter
  }, "id">

  export type IncidenteOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
    _count?: IncidenteCountOrderByAggregateInput
    _max?: IncidenteMaxOrderByAggregateInput
    _min?: IncidenteMinOrderByAggregateInput
  }

  export type IncidenteScalarWhereWithAggregatesInput = {
    AND?: IncidenteScalarWhereWithAggregatesInput | IncidenteScalarWhereWithAggregatesInput[]
    OR?: IncidenteScalarWhereWithAggregatesInput[]
    NOT?: IncidenteScalarWhereWithAggregatesInput | IncidenteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incidente"> | string
    titulo?: StringWithAggregatesFilter<"Incidente"> | string
    descricao?: StringWithAggregatesFilter<"Incidente"> | string
    localizacao?: StringWithAggregatesFilter<"Incidente"> | string
    prioridade?: EnumIncidentPriorityWithAggregatesFilter<"Incidente"> | $Enums.IncidentPriority
    status?: EnumIncidentStatusWithAggregatesFilter<"Incidente"> | $Enums.IncidentStatus
    criado_em?: DateTimeWithAggregatesFilter<"Incidente"> | Date | string
    atualizado_em?: DateTimeWithAggregatesFilter<"Incidente"> | Date | string
  }

  export type PostCreateInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa: ArquivoCreateNestedOneWithoutPostImagemCapaInput
    autor: UsuarioCreateNestedOneWithoutPostsInput
    categoria: CategoriaCreateNestedOneWithoutPostsInput
    tags?: PostTagCreateNestedManyWithoutPostInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa_id: string
    autor_id: string
    categoria_id: string
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa?: ArquivoUpdateOneRequiredWithoutPostImagemCapaNestedInput
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPostsNestedInput
    tags?: PostTagUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa_id?: StringFieldUpdateOperationsInput | string
    autor_id?: StringFieldUpdateOperationsInput | string
    categoria_id?: StringFieldUpdateOperationsInput | string
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa_id: string
    autor_id: string
    categoria_id: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa_id?: StringFieldUpdateOperationsInput | string
    autor_id?: StringFieldUpdateOperationsInput | string
    categoria_id?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaCreateInput = {
    id?: string
    nome: string
    slug: string
    descricao?: string | null
    posts?: PostCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    nome: string
    slug: string
    descricao?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    nome: string
    slug: string
    descricao?: string | null
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    id?: string
    nome: string
    slug: string
    posts?: PostTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    nome: string
    slug: string
    posts?: PostTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    posts?: PostTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    posts?: PostTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    nome: string
    slug: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagCreateInput = {
    post: PostCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutPostsInput
  }

  export type PostTagUncheckedCreateInput = {
    post_id: string
    tag_id: string
  }

  export type PostTagUpdateInput = {
    post?: PostUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostTagUncheckedUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagCreateManyInput = {
    post_id: string
    tag_id: string
  }

  export type PostTagUpdateManyMutationInput = {

  }

  export type PostTagUncheckedUpdateManyInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type ComentarioCreateInput = {
    id?: string
    nome: string
    email: string
    mensagem: string
    criado_em?: Date | string
    aprovado?: boolean
    post: PostCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: string
    post_id: string
    nome: string
    email: string
    mensagem: string
    criado_em?: Date | string
    aprovado?: boolean
  }

  export type ComentarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    post?: PostUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComentarioCreateManyInput = {
    id?: string
    post_id: string
    nome: string
    email: string
    mensagem: string
    criado_em?: Date | string
    aprovado?: boolean
  }

  export type ComentarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senha_hash: string
    tipo?: $Enums.UsuarioTipo
    bio?: string | null
    criado_em?: Date | string
    foto?: ArquivoCreateNestedOneWithoutUsuarioFotoInput
    posts?: PostCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha_hash: string
    tipo?: $Enums.UsuarioTipo
    bio?: string | null
    foto_id?: string | null
    criado_em?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumUsuarioTipoFieldUpdateOperationsInput | $Enums.UsuarioTipo
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: ArquivoUpdateOneWithoutUsuarioFotoNestedInput
    posts?: PostUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumUsuarioTipoFieldUpdateOperationsInput | $Enums.UsuarioTipo
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    foto_id?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha_hash: string
    tipo?: $Enums.UsuarioTipo
    bio?: string | null
    foto_id?: string | null
    criado_em?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumUsuarioTipoFieldUpdateOperationsInput | $Enums.UsuarioTipo
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumUsuarioTipoFieldUpdateOperationsInput | $Enums.UsuarioTipo
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    foto_id?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArquivoCreateInput = {
    id?: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em?: Date | string
    tipo_logico?: $Enums.TipoLogicoArquivo
    incidente?: IncidenteCreateNestedOneWithoutAnexosInput
    postImagemCapa?: PostCreateNestedManyWithoutImagem_capaInput
    usuarioFoto?: UsuarioCreateNestedManyWithoutFotoInput
  }

  export type ArquivoUncheckedCreateInput = {
    id?: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em?: Date | string
    tipo_logico?: $Enums.TipoLogicoArquivo
    incidenteId?: string | null
    postImagemCapa?: PostUncheckedCreateNestedManyWithoutImagem_capaInput
    usuarioFoto?: UsuarioUncheckedCreateNestedManyWithoutFotoInput
  }

  export type ArquivoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
    incidente?: IncidenteUpdateOneWithoutAnexosNestedInput
    postImagemCapa?: PostUpdateManyWithoutImagem_capaNestedInput
    usuarioFoto?: UsuarioUpdateManyWithoutFotoNestedInput
  }

  export type ArquivoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
    incidenteId?: NullableStringFieldUpdateOperationsInput | string | null
    postImagemCapa?: PostUncheckedUpdateManyWithoutImagem_capaNestedInput
    usuarioFoto?: UsuarioUncheckedUpdateManyWithoutFotoNestedInput
  }

  export type ArquivoCreateManyInput = {
    id?: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em?: Date | string
    tipo_logico?: $Enums.TipoLogicoArquivo
    incidenteId?: string | null
  }

  export type ArquivoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
  }

  export type ArquivoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
    incidenteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncidenteCreateInput = {
    id?: string
    titulo: string
    descricao: string
    localizacao: string
    prioridade?: $Enums.IncidentPriority
    status?: $Enums.IncidentStatus
    criado_em?: Date | string
    atualizado_em?: Date | string
    anexos?: ArquivoCreateNestedManyWithoutIncidenteInput
  }

  export type IncidenteUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao: string
    localizacao: string
    prioridade?: $Enums.IncidentPriority
    status?: $Enums.IncidentStatus
    criado_em?: Date | string
    atualizado_em?: Date | string
    anexos?: ArquivoUncheckedCreateNestedManyWithoutIncidenteInput
  }

  export type IncidenteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    prioridade?: EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: ArquivoUpdateManyWithoutIncidenteNestedInput
  }

  export type IncidenteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    prioridade?: EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    anexos?: ArquivoUncheckedUpdateManyWithoutIncidenteNestedInput
  }

  export type IncidenteCreateManyInput = {
    id?: string
    titulo: string
    descricao: string
    localizacao: string
    prioridade?: $Enums.IncidentPriority
    status?: $Enums.IncidentStatus
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type IncidenteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    prioridade?: EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidenteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    prioridade?: EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type ArquivoScalarRelationFilter = {
    is?: ArquivoWhereInput
    isNot?: ArquivoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type PostTagListRelationFilter = {
    every?: PostTagWhereInput
    some?: PostTagWhereInput
    none?: PostTagWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    slug?: SortOrder
    conteudo?: SortOrder
    resumo?: SortOrder
    publicado_em?: SortOrder
    atualizado_em?: SortOrder
    status?: SortOrder
    imagem_capa_id?: SortOrder
    autor_id?: SortOrder
    categoria_id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    slug?: SortOrder
    conteudo?: SortOrder
    resumo?: SortOrder
    publicado_em?: SortOrder
    atualizado_em?: SortOrder
    status?: SortOrder
    imagem_capa_id?: SortOrder
    autor_id?: SortOrder
    categoria_id?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    slug?: SortOrder
    conteudo?: SortOrder
    resumo?: SortOrder
    publicado_em?: SortOrder
    atualizado_em?: SortOrder
    status?: SortOrder
    imagem_capa_id?: SortOrder
    autor_id?: SortOrder
    categoria_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    descricao?: SortOrder
  }

  export type TagOrderByRelevanceInput = {
    fields: TagOrderByRelevanceFieldEnum | TagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type PostTagOrderByRelevanceInput = {
    fields: PostTagOrderByRelevanceFieldEnum | PostTagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostTagPost_idTag_idCompoundUniqueInput = {
    post_id: string
    tag_id: string
  }

  export type PostTagCountOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type PostTagMaxOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type PostTagMinOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ComentarioOrderByRelevanceInput = {
    fields: ComentarioOrderByRelevanceFieldEnum | ComentarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    mensagem?: SortOrder
    criado_em?: SortOrder
    aprovado?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    mensagem?: SortOrder
    criado_em?: SortOrder
    aprovado?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    mensagem?: SortOrder
    criado_em?: SortOrder
    aprovado?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUsuarioTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.UsuarioTipo | EnumUsuarioTipoFieldRefInput<$PrismaModel>
    in?: $Enums.UsuarioTipo[]
    notIn?: $Enums.UsuarioTipo[]
    not?: NestedEnumUsuarioTipoFilter<$PrismaModel> | $Enums.UsuarioTipo
  }

  export type ArquivoNullableScalarRelationFilter = {
    is?: ArquivoWhereInput | null
    isNot?: ArquivoWhereInput | null
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo?: SortOrder
    bio?: SortOrder
    foto_id?: SortOrder
    criado_em?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo?: SortOrder
    bio?: SortOrder
    foto_id?: SortOrder
    criado_em?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo?: SortOrder
    bio?: SortOrder
    foto_id?: SortOrder
    criado_em?: SortOrder
  }

  export type EnumUsuarioTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsuarioTipo | EnumUsuarioTipoFieldRefInput<$PrismaModel>
    in?: $Enums.UsuarioTipo[]
    notIn?: $Enums.UsuarioTipo[]
    not?: NestedEnumUsuarioTipoWithAggregatesFilter<$PrismaModel> | $Enums.UsuarioTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsuarioTipoFilter<$PrismaModel>
    _max?: NestedEnumUsuarioTipoFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumTipoLogicoArquivoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLogicoArquivo | EnumTipoLogicoArquivoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoLogicoArquivo[]
    notIn?: $Enums.TipoLogicoArquivo[]
    not?: NestedEnumTipoLogicoArquivoFilter<$PrismaModel> | $Enums.TipoLogicoArquivo
  }

  export type IncidenteNullableScalarRelationFilter = {
    is?: IncidenteWhereInput | null
    isNot?: IncidenteWhereInput | null
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArquivoOrderByRelevanceInput = {
    fields: ArquivoOrderByRelevanceFieldEnum | ArquivoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArquivoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    caminho?: SortOrder
    tamanho?: SortOrder
    criado_em?: SortOrder
    tipo_logico?: SortOrder
    incidenteId?: SortOrder
  }

  export type ArquivoAvgOrderByAggregateInput = {
    tamanho?: SortOrder
  }

  export type ArquivoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    caminho?: SortOrder
    tamanho?: SortOrder
    criado_em?: SortOrder
    tipo_logico?: SortOrder
    incidenteId?: SortOrder
  }

  export type ArquivoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    caminho?: SortOrder
    tamanho?: SortOrder
    criado_em?: SortOrder
    tipo_logico?: SortOrder
    incidenteId?: SortOrder
  }

  export type ArquivoSumOrderByAggregateInput = {
    tamanho?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTipoLogicoArquivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLogicoArquivo | EnumTipoLogicoArquivoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoLogicoArquivo[]
    notIn?: $Enums.TipoLogicoArquivo[]
    not?: NestedEnumTipoLogicoArquivoWithAggregatesFilter<$PrismaModel> | $Enums.TipoLogicoArquivo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoLogicoArquivoFilter<$PrismaModel>
    _max?: NestedEnumTipoLogicoArquivoFilter<$PrismaModel>
  }

  export type EnumIncidentPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentPriority | EnumIncidentPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentPriority[]
    notIn?: $Enums.IncidentPriority[]
    not?: NestedEnumIncidentPriorityFilter<$PrismaModel> | $Enums.IncidentPriority
  }

  export type EnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[]
    notIn?: $Enums.IncidentStatus[]
    not?: NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus
  }

  export type ArquivoListRelationFilter = {
    every?: ArquivoWhereInput
    some?: ArquivoWhereInput
    none?: ArquivoWhereInput
  }

  export type ArquivoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidenteOrderByRelevanceInput = {
    fields: IncidenteOrderByRelevanceFieldEnum | IncidenteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IncidenteCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type IncidenteMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type IncidenteMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    localizacao?: SortOrder
    prioridade?: SortOrder
    status?: SortOrder
    criado_em?: SortOrder
    atualizado_em?: SortOrder
  }

  export type EnumIncidentPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentPriority | EnumIncidentPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentPriority[]
    notIn?: $Enums.IncidentPriority[]
    not?: NestedEnumIncidentPriorityWithAggregatesFilter<$PrismaModel> | $Enums.IncidentPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentPriorityFilter<$PrismaModel>
    _max?: NestedEnumIncidentPriorityFilter<$PrismaModel>
  }

  export type EnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[]
    notIn?: $Enums.IncidentStatus[]
    not?: NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentStatusFilter<$PrismaModel>
    _max?: NestedEnumIncidentStatusFilter<$PrismaModel>
  }

  export type ArquivoCreateNestedOneWithoutPostImagemCapaInput = {
    create?: XOR<ArquivoCreateWithoutPostImagemCapaInput, ArquivoUncheckedCreateWithoutPostImagemCapaInput>
    connectOrCreate?: ArquivoCreateOrConnectWithoutPostImagemCapaInput
    connect?: ArquivoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPostsInput = {
    create?: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutPostsInput = {
    create?: XOR<CategoriaCreateWithoutPostsInput, CategoriaUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPostsInput
    connect?: CategoriaWhereUniqueInput
  }

  export type PostTagCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutPostInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type PostTagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type ArquivoUpdateOneRequiredWithoutPostImagemCapaNestedInput = {
    create?: XOR<ArquivoCreateWithoutPostImagemCapaInput, ArquivoUncheckedCreateWithoutPostImagemCapaInput>
    connectOrCreate?: ArquivoCreateOrConnectWithoutPostImagemCapaInput
    upsert?: ArquivoUpsertWithoutPostImagemCapaInput
    connect?: ArquivoWhereUniqueInput
    update?: XOR<XOR<ArquivoUpdateToOneWithWhereWithoutPostImagemCapaInput, ArquivoUpdateWithoutPostImagemCapaInput>, ArquivoUncheckedUpdateWithoutPostImagemCapaInput>
  }

  export type UsuarioUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostsInput
    upsert?: UsuarioUpsertWithoutPostsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPostsInput, UsuarioUpdateWithoutPostsInput>, UsuarioUncheckedUpdateWithoutPostsInput>
  }

  export type CategoriaUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CategoriaCreateWithoutPostsInput, CategoriaUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPostsInput
    upsert?: CategoriaUpsertWithoutPostsInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutPostsInput, CategoriaUpdateWithoutPostsInput>, CategoriaUncheckedUpdateWithoutPostsInput>
  }

  export type PostTagUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutPostInput | PostTagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutPostInput | PostTagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutPostInput | PostTagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutPostNestedInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutPostInput | ComentarioUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutPostInput | ComentarioUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutPostInput | ComentarioUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type PostTagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput> | PostTagCreateWithoutPostInput[] | PostTagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutPostInput | PostTagCreateOrConnectWithoutPostInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutPostInput | PostTagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagCreateManyPostInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutPostInput | PostTagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutPostInput | PostTagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutPostInput | ComentarioUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutPostInput | ComentarioUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutPostInput | ComentarioUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type PostCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PostCreateWithoutCategoriaInput, PostUncheckedCreateWithoutCategoriaInput> | PostCreateWithoutCategoriaInput[] | PostUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriaInput | PostCreateOrConnectWithoutCategoriaInput[]
    createMany?: PostCreateManyCategoriaInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PostCreateWithoutCategoriaInput, PostUncheckedCreateWithoutCategoriaInput> | PostCreateWithoutCategoriaInput[] | PostUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriaInput | PostCreateOrConnectWithoutCategoriaInput[]
    createMany?: PostCreateManyCategoriaInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PostCreateWithoutCategoriaInput, PostUncheckedCreateWithoutCategoriaInput> | PostCreateWithoutCategoriaInput[] | PostUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriaInput | PostCreateOrConnectWithoutCategoriaInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoriaInput | PostUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PostCreateManyCategoriaInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoriaInput | PostUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoriaInput | PostUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PostCreateWithoutCategoriaInput, PostUncheckedCreateWithoutCategoriaInput> | PostCreateWithoutCategoriaInput[] | PostUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoriaInput | PostCreateOrConnectWithoutCategoriaInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoriaInput | PostUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PostCreateManyCategoriaInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoriaInput | PostUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoriaInput | PostUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostTagCreateNestedManyWithoutTagInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type PostTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
  }

  export type PostTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutTagInput | PostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutTagInput | PostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutTagInput | PostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type PostTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput> | PostTagCreateWithoutTagInput[] | PostTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagCreateOrConnectWithoutTagInput | PostTagCreateOrConnectWithoutTagInput[]
    upsert?: PostTagUpsertWithWhereUniqueWithoutTagInput | PostTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PostTagCreateManyTagInputEnvelope
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[]
    update?: PostTagUpdateWithWhereUniqueWithoutTagInput | PostTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PostTagUpdateManyWithWhereWithoutTagInput | PostTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    connect?: PostWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    connect?: TagWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    upsert?: PostUpsertWithoutTagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutTagsInput, PostUpdateWithoutTagsInput>, PostUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    upsert?: TagUpsertWithoutPostsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutPostsInput, TagUpdateWithoutPostsInput>, TagUncheckedUpdateWithoutPostsInput>
  }

  export type PostCreateNestedOneWithoutComentariosInput = {
    create?: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: PostCreateOrConnectWithoutComentariosInput
    connect?: PostWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PostUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: PostCreateOrConnectWithoutComentariosInput
    upsert?: PostUpsertWithoutComentariosInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutComentariosInput, PostUpdateWithoutComentariosInput>, PostUncheckedUpdateWithoutComentariosInput>
  }

  export type ArquivoCreateNestedOneWithoutUsuarioFotoInput = {
    create?: XOR<ArquivoCreateWithoutUsuarioFotoInput, ArquivoUncheckedCreateWithoutUsuarioFotoInput>
    connectOrCreate?: ArquivoCreateOrConnectWithoutUsuarioFotoInput
    connect?: ArquivoWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAutorInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type EnumUsuarioTipoFieldUpdateOperationsInput = {
    set?: $Enums.UsuarioTipo
  }

  export type ArquivoUpdateOneWithoutUsuarioFotoNestedInput = {
    create?: XOR<ArquivoCreateWithoutUsuarioFotoInput, ArquivoUncheckedCreateWithoutUsuarioFotoInput>
    connectOrCreate?: ArquivoCreateOrConnectWithoutUsuarioFotoInput
    upsert?: ArquivoUpsertWithoutUsuarioFotoInput
    disconnect?: ArquivoWhereInput | boolean
    delete?: ArquivoWhereInput | boolean
    connect?: ArquivoWhereUniqueInput
    update?: XOR<XOR<ArquivoUpdateToOneWithWhereWithoutUsuarioFotoInput, ArquivoUpdateWithoutUsuarioFotoInput>, ArquivoUncheckedUpdateWithoutUsuarioFotoInput>
  }

  export type PostUpdateManyWithoutAutorNestedInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAutorInput | PostUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAutorInput | PostUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAutorInput | PostUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAutorInput | PostUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAutorInput | PostUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAutorInput | PostUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type IncidenteCreateNestedOneWithoutAnexosInput = {
    create?: XOR<IncidenteCreateWithoutAnexosInput, IncidenteUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: IncidenteCreateOrConnectWithoutAnexosInput
    connect?: IncidenteWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutImagem_capaInput = {
    create?: XOR<PostCreateWithoutImagem_capaInput, PostUncheckedCreateWithoutImagem_capaInput> | PostCreateWithoutImagem_capaInput[] | PostUncheckedCreateWithoutImagem_capaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutImagem_capaInput | PostCreateOrConnectWithoutImagem_capaInput[]
    createMany?: PostCreateManyImagem_capaInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutFotoInput = {
    create?: XOR<UsuarioCreateWithoutFotoInput, UsuarioUncheckedCreateWithoutFotoInput> | UsuarioCreateWithoutFotoInput[] | UsuarioUncheckedCreateWithoutFotoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFotoInput | UsuarioCreateOrConnectWithoutFotoInput[]
    createMany?: UsuarioCreateManyFotoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutImagem_capaInput = {
    create?: XOR<PostCreateWithoutImagem_capaInput, PostUncheckedCreateWithoutImagem_capaInput> | PostCreateWithoutImagem_capaInput[] | PostUncheckedCreateWithoutImagem_capaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutImagem_capaInput | PostCreateOrConnectWithoutImagem_capaInput[]
    createMany?: PostCreateManyImagem_capaInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutFotoInput = {
    create?: XOR<UsuarioCreateWithoutFotoInput, UsuarioUncheckedCreateWithoutFotoInput> | UsuarioCreateWithoutFotoInput[] | UsuarioUncheckedCreateWithoutFotoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFotoInput | UsuarioCreateOrConnectWithoutFotoInput[]
    createMany?: UsuarioCreateManyFotoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTipoLogicoArquivoFieldUpdateOperationsInput = {
    set?: $Enums.TipoLogicoArquivo
  }

  export type IncidenteUpdateOneWithoutAnexosNestedInput = {
    create?: XOR<IncidenteCreateWithoutAnexosInput, IncidenteUncheckedCreateWithoutAnexosInput>
    connectOrCreate?: IncidenteCreateOrConnectWithoutAnexosInput
    upsert?: IncidenteUpsertWithoutAnexosInput
    disconnect?: IncidenteWhereInput | boolean
    delete?: IncidenteWhereInput | boolean
    connect?: IncidenteWhereUniqueInput
    update?: XOR<XOR<IncidenteUpdateToOneWithWhereWithoutAnexosInput, IncidenteUpdateWithoutAnexosInput>, IncidenteUncheckedUpdateWithoutAnexosInput>
  }

  export type PostUpdateManyWithoutImagem_capaNestedInput = {
    create?: XOR<PostCreateWithoutImagem_capaInput, PostUncheckedCreateWithoutImagem_capaInput> | PostCreateWithoutImagem_capaInput[] | PostUncheckedCreateWithoutImagem_capaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutImagem_capaInput | PostCreateOrConnectWithoutImagem_capaInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutImagem_capaInput | PostUpsertWithWhereUniqueWithoutImagem_capaInput[]
    createMany?: PostCreateManyImagem_capaInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutImagem_capaInput | PostUpdateWithWhereUniqueWithoutImagem_capaInput[]
    updateMany?: PostUpdateManyWithWhereWithoutImagem_capaInput | PostUpdateManyWithWhereWithoutImagem_capaInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutFotoNestedInput = {
    create?: XOR<UsuarioCreateWithoutFotoInput, UsuarioUncheckedCreateWithoutFotoInput> | UsuarioCreateWithoutFotoInput[] | UsuarioUncheckedCreateWithoutFotoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFotoInput | UsuarioCreateOrConnectWithoutFotoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutFotoInput | UsuarioUpsertWithWhereUniqueWithoutFotoInput[]
    createMany?: UsuarioCreateManyFotoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutFotoInput | UsuarioUpdateWithWhereUniqueWithoutFotoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutFotoInput | UsuarioUpdateManyWithWhereWithoutFotoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutImagem_capaNestedInput = {
    create?: XOR<PostCreateWithoutImagem_capaInput, PostUncheckedCreateWithoutImagem_capaInput> | PostCreateWithoutImagem_capaInput[] | PostUncheckedCreateWithoutImagem_capaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutImagem_capaInput | PostCreateOrConnectWithoutImagem_capaInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutImagem_capaInput | PostUpsertWithWhereUniqueWithoutImagem_capaInput[]
    createMany?: PostCreateManyImagem_capaInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutImagem_capaInput | PostUpdateWithWhereUniqueWithoutImagem_capaInput[]
    updateMany?: PostUpdateManyWithWhereWithoutImagem_capaInput | PostUpdateManyWithWhereWithoutImagem_capaInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutFotoNestedInput = {
    create?: XOR<UsuarioCreateWithoutFotoInput, UsuarioUncheckedCreateWithoutFotoInput> | UsuarioCreateWithoutFotoInput[] | UsuarioUncheckedCreateWithoutFotoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFotoInput | UsuarioCreateOrConnectWithoutFotoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutFotoInput | UsuarioUpsertWithWhereUniqueWithoutFotoInput[]
    createMany?: UsuarioCreateManyFotoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutFotoInput | UsuarioUpdateWithWhereUniqueWithoutFotoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutFotoInput | UsuarioUpdateManyWithWhereWithoutFotoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ArquivoCreateNestedManyWithoutIncidenteInput = {
    create?: XOR<ArquivoCreateWithoutIncidenteInput, ArquivoUncheckedCreateWithoutIncidenteInput> | ArquivoCreateWithoutIncidenteInput[] | ArquivoUncheckedCreateWithoutIncidenteInput[]
    connectOrCreate?: ArquivoCreateOrConnectWithoutIncidenteInput | ArquivoCreateOrConnectWithoutIncidenteInput[]
    createMany?: ArquivoCreateManyIncidenteInputEnvelope
    connect?: ArquivoWhereUniqueInput | ArquivoWhereUniqueInput[]
  }

  export type ArquivoUncheckedCreateNestedManyWithoutIncidenteInput = {
    create?: XOR<ArquivoCreateWithoutIncidenteInput, ArquivoUncheckedCreateWithoutIncidenteInput> | ArquivoCreateWithoutIncidenteInput[] | ArquivoUncheckedCreateWithoutIncidenteInput[]
    connectOrCreate?: ArquivoCreateOrConnectWithoutIncidenteInput | ArquivoCreateOrConnectWithoutIncidenteInput[]
    createMany?: ArquivoCreateManyIncidenteInputEnvelope
    connect?: ArquivoWhereUniqueInput | ArquivoWhereUniqueInput[]
  }

  export type EnumIncidentPriorityFieldUpdateOperationsInput = {
    set?: $Enums.IncidentPriority
  }

  export type EnumIncidentStatusFieldUpdateOperationsInput = {
    set?: $Enums.IncidentStatus
  }

  export type ArquivoUpdateManyWithoutIncidenteNestedInput = {
    create?: XOR<ArquivoCreateWithoutIncidenteInput, ArquivoUncheckedCreateWithoutIncidenteInput> | ArquivoCreateWithoutIncidenteInput[] | ArquivoUncheckedCreateWithoutIncidenteInput[]
    connectOrCreate?: ArquivoCreateOrConnectWithoutIncidenteInput | ArquivoCreateOrConnectWithoutIncidenteInput[]
    upsert?: ArquivoUpsertWithWhereUniqueWithoutIncidenteInput | ArquivoUpsertWithWhereUniqueWithoutIncidenteInput[]
    createMany?: ArquivoCreateManyIncidenteInputEnvelope
    set?: ArquivoWhereUniqueInput | ArquivoWhereUniqueInput[]
    disconnect?: ArquivoWhereUniqueInput | ArquivoWhereUniqueInput[]
    delete?: ArquivoWhereUniqueInput | ArquivoWhereUniqueInput[]
    connect?: ArquivoWhereUniqueInput | ArquivoWhereUniqueInput[]
    update?: ArquivoUpdateWithWhereUniqueWithoutIncidenteInput | ArquivoUpdateWithWhereUniqueWithoutIncidenteInput[]
    updateMany?: ArquivoUpdateManyWithWhereWithoutIncidenteInput | ArquivoUpdateManyWithWhereWithoutIncidenteInput[]
    deleteMany?: ArquivoScalarWhereInput | ArquivoScalarWhereInput[]
  }

  export type ArquivoUncheckedUpdateManyWithoutIncidenteNestedInput = {
    create?: XOR<ArquivoCreateWithoutIncidenteInput, ArquivoUncheckedCreateWithoutIncidenteInput> | ArquivoCreateWithoutIncidenteInput[] | ArquivoUncheckedCreateWithoutIncidenteInput[]
    connectOrCreate?: ArquivoCreateOrConnectWithoutIncidenteInput | ArquivoCreateOrConnectWithoutIncidenteInput[]
    upsert?: ArquivoUpsertWithWhereUniqueWithoutIncidenteInput | ArquivoUpsertWithWhereUniqueWithoutIncidenteInput[]
    createMany?: ArquivoCreateManyIncidenteInputEnvelope
    set?: ArquivoWhereUniqueInput | ArquivoWhereUniqueInput[]
    disconnect?: ArquivoWhereUniqueInput | ArquivoWhereUniqueInput[]
    delete?: ArquivoWhereUniqueInput | ArquivoWhereUniqueInput[]
    connect?: ArquivoWhereUniqueInput | ArquivoWhereUniqueInput[]
    update?: ArquivoUpdateWithWhereUniqueWithoutIncidenteInput | ArquivoUpdateWithWhereUniqueWithoutIncidenteInput[]
    updateMany?: ArquivoUpdateManyWithWhereWithoutIncidenteInput | ArquivoUpdateManyWithWhereWithoutIncidenteInput[]
    deleteMany?: ArquivoScalarWhereInput | ArquivoScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUsuarioTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.UsuarioTipo | EnumUsuarioTipoFieldRefInput<$PrismaModel>
    in?: $Enums.UsuarioTipo[]
    notIn?: $Enums.UsuarioTipo[]
    not?: NestedEnumUsuarioTipoFilter<$PrismaModel> | $Enums.UsuarioTipo
  }

  export type NestedEnumUsuarioTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsuarioTipo | EnumUsuarioTipoFieldRefInput<$PrismaModel>
    in?: $Enums.UsuarioTipo[]
    notIn?: $Enums.UsuarioTipo[]
    not?: NestedEnumUsuarioTipoWithAggregatesFilter<$PrismaModel> | $Enums.UsuarioTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsuarioTipoFilter<$PrismaModel>
    _max?: NestedEnumUsuarioTipoFilter<$PrismaModel>
  }

  export type NestedEnumTipoLogicoArquivoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLogicoArquivo | EnumTipoLogicoArquivoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoLogicoArquivo[]
    notIn?: $Enums.TipoLogicoArquivo[]
    not?: NestedEnumTipoLogicoArquivoFilter<$PrismaModel> | $Enums.TipoLogicoArquivo
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTipoLogicoArquivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLogicoArquivo | EnumTipoLogicoArquivoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoLogicoArquivo[]
    notIn?: $Enums.TipoLogicoArquivo[]
    not?: NestedEnumTipoLogicoArquivoWithAggregatesFilter<$PrismaModel> | $Enums.TipoLogicoArquivo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoLogicoArquivoFilter<$PrismaModel>
    _max?: NestedEnumTipoLogicoArquivoFilter<$PrismaModel>
  }

  export type NestedEnumIncidentPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentPriority | EnumIncidentPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentPriority[]
    notIn?: $Enums.IncidentPriority[]
    not?: NestedEnumIncidentPriorityFilter<$PrismaModel> | $Enums.IncidentPriority
  }

  export type NestedEnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[]
    notIn?: $Enums.IncidentStatus[]
    not?: NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus
  }

  export type NestedEnumIncidentPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentPriority | EnumIncidentPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentPriority[]
    notIn?: $Enums.IncidentPriority[]
    not?: NestedEnumIncidentPriorityWithAggregatesFilter<$PrismaModel> | $Enums.IncidentPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentPriorityFilter<$PrismaModel>
    _max?: NestedEnumIncidentPriorityFilter<$PrismaModel>
  }

  export type NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[]
    notIn?: $Enums.IncidentStatus[]
    not?: NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentStatusFilter<$PrismaModel>
    _max?: NestedEnumIncidentStatusFilter<$PrismaModel>
  }

  export type ArquivoCreateWithoutPostImagemCapaInput = {
    id?: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em?: Date | string
    tipo_logico?: $Enums.TipoLogicoArquivo
    incidente?: IncidenteCreateNestedOneWithoutAnexosInput
    usuarioFoto?: UsuarioCreateNestedManyWithoutFotoInput
  }

  export type ArquivoUncheckedCreateWithoutPostImagemCapaInput = {
    id?: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em?: Date | string
    tipo_logico?: $Enums.TipoLogicoArquivo
    incidenteId?: string | null
    usuarioFoto?: UsuarioUncheckedCreateNestedManyWithoutFotoInput
  }

  export type ArquivoCreateOrConnectWithoutPostImagemCapaInput = {
    where: ArquivoWhereUniqueInput
    create: XOR<ArquivoCreateWithoutPostImagemCapaInput, ArquivoUncheckedCreateWithoutPostImagemCapaInput>
  }

  export type UsuarioCreateWithoutPostsInput = {
    id?: string
    nome: string
    email: string
    senha_hash: string
    tipo?: $Enums.UsuarioTipo
    bio?: string | null
    criado_em?: Date | string
    foto?: ArquivoCreateNestedOneWithoutUsuarioFotoInput
  }

  export type UsuarioUncheckedCreateWithoutPostsInput = {
    id?: string
    nome: string
    email: string
    senha_hash: string
    tipo?: $Enums.UsuarioTipo
    bio?: string | null
    foto_id?: string | null
    criado_em?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutPostsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
  }

  export type CategoriaCreateWithoutPostsInput = {
    id?: string
    nome: string
    slug: string
    descricao?: string | null
  }

  export type CategoriaUncheckedCreateWithoutPostsInput = {
    id?: string
    nome: string
    slug: string
    descricao?: string | null
  }

  export type CategoriaCreateOrConnectWithoutPostsInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutPostsInput, CategoriaUncheckedCreateWithoutPostsInput>
  }

  export type PostTagCreateWithoutPostInput = {
    tag: TagCreateNestedOneWithoutPostsInput
  }

  export type PostTagUncheckedCreateWithoutPostInput = {
    tag_id: string
  }

  export type PostTagCreateOrConnectWithoutPostInput = {
    where: PostTagWhereUniqueInput
    create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
  }

  export type PostTagCreateManyPostInputEnvelope = {
    data: PostTagCreateManyPostInput | PostTagCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutPostInput = {
    id?: string
    nome: string
    email: string
    mensagem: string
    criado_em?: Date | string
    aprovado?: boolean
  }

  export type ComentarioUncheckedCreateWithoutPostInput = {
    id?: string
    nome: string
    email: string
    mensagem: string
    criado_em?: Date | string
    aprovado?: boolean
  }

  export type ComentarioCreateOrConnectWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput>
  }

  export type ComentarioCreateManyPostInputEnvelope = {
    data: ComentarioCreateManyPostInput | ComentarioCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ArquivoUpsertWithoutPostImagemCapaInput = {
    update: XOR<ArquivoUpdateWithoutPostImagemCapaInput, ArquivoUncheckedUpdateWithoutPostImagemCapaInput>
    create: XOR<ArquivoCreateWithoutPostImagemCapaInput, ArquivoUncheckedCreateWithoutPostImagemCapaInput>
    where?: ArquivoWhereInput
  }

  export type ArquivoUpdateToOneWithWhereWithoutPostImagemCapaInput = {
    where?: ArquivoWhereInput
    data: XOR<ArquivoUpdateWithoutPostImagemCapaInput, ArquivoUncheckedUpdateWithoutPostImagemCapaInput>
  }

  export type ArquivoUpdateWithoutPostImagemCapaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
    incidente?: IncidenteUpdateOneWithoutAnexosNestedInput
    usuarioFoto?: UsuarioUpdateManyWithoutFotoNestedInput
  }

  export type ArquivoUncheckedUpdateWithoutPostImagemCapaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
    incidenteId?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioFoto?: UsuarioUncheckedUpdateManyWithoutFotoNestedInput
  }

  export type UsuarioUpsertWithoutPostsInput = {
    update: XOR<UsuarioUpdateWithoutPostsInput, UsuarioUncheckedUpdateWithoutPostsInput>
    create: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPostsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPostsInput, UsuarioUncheckedUpdateWithoutPostsInput>
  }

  export type UsuarioUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumUsuarioTipoFieldUpdateOperationsInput | $Enums.UsuarioTipo
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: ArquivoUpdateOneWithoutUsuarioFotoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumUsuarioTipoFieldUpdateOperationsInput | $Enums.UsuarioTipo
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    foto_id?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUpsertWithoutPostsInput = {
    update: XOR<CategoriaUpdateWithoutPostsInput, CategoriaUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoriaCreateWithoutPostsInput, CategoriaUncheckedCreateWithoutPostsInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutPostsInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutPostsInput, CategoriaUncheckedUpdateWithoutPostsInput>
  }

  export type CategoriaUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostTagUpsertWithWhereUniqueWithoutPostInput = {
    where: PostTagWhereUniqueInput
    update: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>
    create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
  }

  export type PostTagUpdateWithWhereUniqueWithoutPostInput = {
    where: PostTagWhereUniqueInput
    data: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>
  }

  export type PostTagUpdateManyWithWhereWithoutPostInput = {
    where: PostTagScalarWhereInput
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutPostInput>
  }

  export type PostTagScalarWhereInput = {
    AND?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    OR?: PostTagScalarWhereInput[]
    NOT?: PostTagScalarWhereInput | PostTagScalarWhereInput[]
    post_id?: StringFilter<"PostTag"> | string
    tag_id?: StringFilter<"PostTag"> | string
  }

  export type ComentarioUpsertWithWhereUniqueWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutPostInput, ComentarioUncheckedUpdateWithoutPostInput>
    create: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutPostInput, ComentarioUncheckedUpdateWithoutPostInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutPostInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutPostInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: StringFilter<"Comentario"> | string
    post_id?: StringFilter<"Comentario"> | string
    nome?: StringFilter<"Comentario"> | string
    email?: StringFilter<"Comentario"> | string
    mensagem?: StringFilter<"Comentario"> | string
    criado_em?: DateTimeFilter<"Comentario"> | Date | string
    aprovado?: BoolFilter<"Comentario"> | boolean
  }

  export type PostCreateWithoutCategoriaInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa: ArquivoCreateNestedOneWithoutPostImagemCapaInput
    autor: UsuarioCreateNestedOneWithoutPostsInput
    tags?: PostTagCreateNestedManyWithoutPostInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCategoriaInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa_id: string
    autor_id: string
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCategoriaInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoriaInput, PostUncheckedCreateWithoutCategoriaInput>
  }

  export type PostCreateManyCategoriaInputEnvelope = {
    data: PostCreateManyCategoriaInput | PostCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCategoriaInput, PostUncheckedUpdateWithoutCategoriaInput>
    create: XOR<PostCreateWithoutCategoriaInput, PostUncheckedCreateWithoutCategoriaInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCategoriaInput, PostUncheckedUpdateWithoutCategoriaInput>
  }

  export type PostUpdateManyWithWhereWithoutCategoriaInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    titulo?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    conteudo?: StringFilter<"Post"> | string
    resumo?: StringNullableFilter<"Post"> | string | null
    publicado_em?: DateTimeNullableFilter<"Post"> | Date | string | null
    atualizado_em?: DateTimeFilter<"Post"> | Date | string
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    imagem_capa_id?: StringFilter<"Post"> | string
    autor_id?: StringFilter<"Post"> | string
    categoria_id?: StringFilter<"Post"> | string
  }

  export type PostTagCreateWithoutTagInput = {
    post: PostCreateNestedOneWithoutTagsInput
  }

  export type PostTagUncheckedCreateWithoutTagInput = {
    post_id: string
  }

  export type PostTagCreateOrConnectWithoutTagInput = {
    where: PostTagWhereUniqueInput
    create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
  }

  export type PostTagCreateManyTagInputEnvelope = {
    data: PostTagCreateManyTagInput | PostTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type PostTagUpsertWithWhereUniqueWithoutTagInput = {
    where: PostTagWhereUniqueInput
    update: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>
    create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
  }

  export type PostTagUpdateWithWhereUniqueWithoutTagInput = {
    where: PostTagWhereUniqueInput
    data: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>
  }

  export type PostTagUpdateManyWithWhereWithoutTagInput = {
    where: PostTagScalarWhereInput
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutTagInput>
  }

  export type PostCreateWithoutTagsInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa: ArquivoCreateNestedOneWithoutPostImagemCapaInput
    autor: UsuarioCreateNestedOneWithoutPostsInput
    categoria: CategoriaCreateNestedOneWithoutPostsInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa_id: string
    autor_id: string
    categoria_id: string
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutPostsInput = {
    id?: string
    nome: string
    slug: string
  }

  export type TagUncheckedCreateWithoutPostsInput = {
    id?: string
    nome: string
    slug: string
  }

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutTagsInput = {
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutTagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
  }

  export type PostUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa?: ArquivoUpdateOneRequiredWithoutPostImagemCapaNestedInput
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPostsNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa_id?: StringFieldUpdateOperationsInput | string
    autor_id?: StringFieldUpdateOperationsInput | string
    categoria_id?: StringFieldUpdateOperationsInput | string
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
  }

  export type TagUpsertWithoutPostsInput = {
    update: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPostsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
  }

  export type TagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateWithoutComentariosInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa: ArquivoCreateNestedOneWithoutPostImagemCapaInput
    autor: UsuarioCreateNestedOneWithoutPostsInput
    categoria: CategoriaCreateNestedOneWithoutPostsInput
    tags?: PostTagCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutComentariosInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa_id: string
    autor_id: string
    categoria_id: string
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutComentariosInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
  }

  export type PostUpsertWithoutComentariosInput = {
    update: XOR<PostUpdateWithoutComentariosInput, PostUncheckedUpdateWithoutComentariosInput>
    create: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutComentariosInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutComentariosInput, PostUncheckedUpdateWithoutComentariosInput>
  }

  export type PostUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa?: ArquivoUpdateOneRequiredWithoutPostImagemCapaNestedInput
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPostsNestedInput
    tags?: PostTagUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutComentariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa_id?: StringFieldUpdateOperationsInput | string
    autor_id?: StringFieldUpdateOperationsInput | string
    categoria_id?: StringFieldUpdateOperationsInput | string
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type ArquivoCreateWithoutUsuarioFotoInput = {
    id?: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em?: Date | string
    tipo_logico?: $Enums.TipoLogicoArquivo
    incidente?: IncidenteCreateNestedOneWithoutAnexosInput
    postImagemCapa?: PostCreateNestedManyWithoutImagem_capaInput
  }

  export type ArquivoUncheckedCreateWithoutUsuarioFotoInput = {
    id?: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em?: Date | string
    tipo_logico?: $Enums.TipoLogicoArquivo
    incidenteId?: string | null
    postImagemCapa?: PostUncheckedCreateNestedManyWithoutImagem_capaInput
  }

  export type ArquivoCreateOrConnectWithoutUsuarioFotoInput = {
    where: ArquivoWhereUniqueInput
    create: XOR<ArquivoCreateWithoutUsuarioFotoInput, ArquivoUncheckedCreateWithoutUsuarioFotoInput>
  }

  export type PostCreateWithoutAutorInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa: ArquivoCreateNestedOneWithoutPostImagemCapaInput
    categoria: CategoriaCreateNestedOneWithoutPostsInput
    tags?: PostTagCreateNestedManyWithoutPostInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAutorInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa_id: string
    categoria_id: string
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAutorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput>
  }

  export type PostCreateManyAutorInputEnvelope = {
    data: PostCreateManyAutorInput | PostCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type ArquivoUpsertWithoutUsuarioFotoInput = {
    update: XOR<ArquivoUpdateWithoutUsuarioFotoInput, ArquivoUncheckedUpdateWithoutUsuarioFotoInput>
    create: XOR<ArquivoCreateWithoutUsuarioFotoInput, ArquivoUncheckedCreateWithoutUsuarioFotoInput>
    where?: ArquivoWhereInput
  }

  export type ArquivoUpdateToOneWithWhereWithoutUsuarioFotoInput = {
    where?: ArquivoWhereInput
    data: XOR<ArquivoUpdateWithoutUsuarioFotoInput, ArquivoUncheckedUpdateWithoutUsuarioFotoInput>
  }

  export type ArquivoUpdateWithoutUsuarioFotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
    incidente?: IncidenteUpdateOneWithoutAnexosNestedInput
    postImagemCapa?: PostUpdateManyWithoutImagem_capaNestedInput
  }

  export type ArquivoUncheckedUpdateWithoutUsuarioFotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
    incidenteId?: NullableStringFieldUpdateOperationsInput | string | null
    postImagemCapa?: PostUncheckedUpdateManyWithoutImagem_capaNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutAutorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAutorInput, PostUncheckedUpdateWithoutAutorInput>
    create: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAutorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAutorInput, PostUncheckedUpdateWithoutAutorInput>
  }

  export type PostUpdateManyWithWhereWithoutAutorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAutorInput>
  }

  export type IncidenteCreateWithoutAnexosInput = {
    id?: string
    titulo: string
    descricao: string
    localizacao: string
    prioridade?: $Enums.IncidentPriority
    status?: $Enums.IncidentStatus
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type IncidenteUncheckedCreateWithoutAnexosInput = {
    id?: string
    titulo: string
    descricao: string
    localizacao: string
    prioridade?: $Enums.IncidentPriority
    status?: $Enums.IncidentStatus
    criado_em?: Date | string
    atualizado_em?: Date | string
  }

  export type IncidenteCreateOrConnectWithoutAnexosInput = {
    where: IncidenteWhereUniqueInput
    create: XOR<IncidenteCreateWithoutAnexosInput, IncidenteUncheckedCreateWithoutAnexosInput>
  }

  export type PostCreateWithoutImagem_capaInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    autor: UsuarioCreateNestedOneWithoutPostsInput
    categoria: CategoriaCreateNestedOneWithoutPostsInput
    tags?: PostTagCreateNestedManyWithoutPostInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutImagem_capaInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    autor_id: string
    categoria_id: string
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutImagem_capaInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutImagem_capaInput, PostUncheckedCreateWithoutImagem_capaInput>
  }

  export type PostCreateManyImagem_capaInputEnvelope = {
    data: PostCreateManyImagem_capaInput | PostCreateManyImagem_capaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutFotoInput = {
    id?: string
    nome: string
    email: string
    senha_hash: string
    tipo?: $Enums.UsuarioTipo
    bio?: string | null
    criado_em?: Date | string
    posts?: PostCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUncheckedCreateWithoutFotoInput = {
    id?: string
    nome: string
    email: string
    senha_hash: string
    tipo?: $Enums.UsuarioTipo
    bio?: string | null
    criado_em?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioCreateOrConnectWithoutFotoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFotoInput, UsuarioUncheckedCreateWithoutFotoInput>
  }

  export type UsuarioCreateManyFotoInputEnvelope = {
    data: UsuarioCreateManyFotoInput | UsuarioCreateManyFotoInput[]
    skipDuplicates?: boolean
  }

  export type IncidenteUpsertWithoutAnexosInput = {
    update: XOR<IncidenteUpdateWithoutAnexosInput, IncidenteUncheckedUpdateWithoutAnexosInput>
    create: XOR<IncidenteCreateWithoutAnexosInput, IncidenteUncheckedCreateWithoutAnexosInput>
    where?: IncidenteWhereInput
  }

  export type IncidenteUpdateToOneWithWhereWithoutAnexosInput = {
    where?: IncidenteWhereInput
    data: XOR<IncidenteUpdateWithoutAnexosInput, IncidenteUncheckedUpdateWithoutAnexosInput>
  }

  export type IncidenteUpdateWithoutAnexosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    prioridade?: EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidenteUncheckedUpdateWithoutAnexosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    prioridade?: EnumIncidentPriorityFieldUpdateOperationsInput | $Enums.IncidentPriority
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutImagem_capaInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutImagem_capaInput, PostUncheckedUpdateWithoutImagem_capaInput>
    create: XOR<PostCreateWithoutImagem_capaInput, PostUncheckedCreateWithoutImagem_capaInput>
  }

  export type PostUpdateWithWhereUniqueWithoutImagem_capaInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutImagem_capaInput, PostUncheckedUpdateWithoutImagem_capaInput>
  }

  export type PostUpdateManyWithWhereWithoutImagem_capaInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutImagem_capaInput>
  }

  export type UsuarioUpsertWithWhereUniqueWithoutFotoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutFotoInput, UsuarioUncheckedUpdateWithoutFotoInput>
    create: XOR<UsuarioCreateWithoutFotoInput, UsuarioUncheckedCreateWithoutFotoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutFotoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutFotoInput, UsuarioUncheckedUpdateWithoutFotoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutFotoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutFotoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha_hash?: StringFilter<"Usuario"> | string
    tipo?: EnumUsuarioTipoFilter<"Usuario"> | $Enums.UsuarioTipo
    bio?: StringNullableFilter<"Usuario"> | string | null
    foto_id?: StringNullableFilter<"Usuario"> | string | null
    criado_em?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type ArquivoCreateWithoutIncidenteInput = {
    id?: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em?: Date | string
    tipo_logico?: $Enums.TipoLogicoArquivo
    postImagemCapa?: PostCreateNestedManyWithoutImagem_capaInput
    usuarioFoto?: UsuarioCreateNestedManyWithoutFotoInput
  }

  export type ArquivoUncheckedCreateWithoutIncidenteInput = {
    id?: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em?: Date | string
    tipo_logico?: $Enums.TipoLogicoArquivo
    postImagemCapa?: PostUncheckedCreateNestedManyWithoutImagem_capaInput
    usuarioFoto?: UsuarioUncheckedCreateNestedManyWithoutFotoInput
  }

  export type ArquivoCreateOrConnectWithoutIncidenteInput = {
    where: ArquivoWhereUniqueInput
    create: XOR<ArquivoCreateWithoutIncidenteInput, ArquivoUncheckedCreateWithoutIncidenteInput>
  }

  export type ArquivoCreateManyIncidenteInputEnvelope = {
    data: ArquivoCreateManyIncidenteInput | ArquivoCreateManyIncidenteInput[]
    skipDuplicates?: boolean
  }

  export type ArquivoUpsertWithWhereUniqueWithoutIncidenteInput = {
    where: ArquivoWhereUniqueInput
    update: XOR<ArquivoUpdateWithoutIncidenteInput, ArquivoUncheckedUpdateWithoutIncidenteInput>
    create: XOR<ArquivoCreateWithoutIncidenteInput, ArquivoUncheckedCreateWithoutIncidenteInput>
  }

  export type ArquivoUpdateWithWhereUniqueWithoutIncidenteInput = {
    where: ArquivoWhereUniqueInput
    data: XOR<ArquivoUpdateWithoutIncidenteInput, ArquivoUncheckedUpdateWithoutIncidenteInput>
  }

  export type ArquivoUpdateManyWithWhereWithoutIncidenteInput = {
    where: ArquivoScalarWhereInput
    data: XOR<ArquivoUpdateManyMutationInput, ArquivoUncheckedUpdateManyWithoutIncidenteInput>
  }

  export type ArquivoScalarWhereInput = {
    AND?: ArquivoScalarWhereInput | ArquivoScalarWhereInput[]
    OR?: ArquivoScalarWhereInput[]
    NOT?: ArquivoScalarWhereInput | ArquivoScalarWhereInput[]
    id?: StringFilter<"Arquivo"> | string
    nome?: StringFilter<"Arquivo"> | string
    tipo?: StringFilter<"Arquivo"> | string
    caminho?: StringFilter<"Arquivo"> | string
    tamanho?: IntFilter<"Arquivo"> | number
    criado_em?: DateTimeFilter<"Arquivo"> | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFilter<"Arquivo"> | $Enums.TipoLogicoArquivo
    incidenteId?: StringNullableFilter<"Arquivo"> | string | null
  }

  export type PostTagCreateManyPostInput = {
    tag_id: string
  }

  export type ComentarioCreateManyPostInput = {
    id?: string
    nome: string
    email: string
    mensagem: string
    criado_em?: Date | string
    aprovado?: boolean
  }

  export type PostTagUpdateWithoutPostInput = {
    tag?: TagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostTagUncheckedUpdateWithoutPostInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagUncheckedUpdateManyWithoutPostInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type ComentarioUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComentarioUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComentarioUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostCreateManyCategoriaInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa_id: string
    autor_id: string
  }

  export type PostUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa?: ArquivoUpdateOneRequiredWithoutPostImagemCapaNestedInput
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    tags?: PostTagUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa_id?: StringFieldUpdateOperationsInput | string
    autor_id?: StringFieldUpdateOperationsInput | string
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa_id?: StringFieldUpdateOperationsInput | string
    autor_id?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagCreateManyTagInput = {
    post_id: string
  }

  export type PostTagUpdateWithoutTagInput = {
    post?: PostUpdateOneRequiredWithoutTagsNestedInput
  }

  export type PostTagUncheckedUpdateWithoutTagInput = {
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagUncheckedUpdateManyWithoutTagInput = {
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyAutorInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    imagem_capa_id: string
    categoria_id: string
  }

  export type PostUpdateWithoutAutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa?: ArquivoUpdateOneRequiredWithoutPostImagemCapaNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPostsNestedInput
    tags?: PostTagUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa_id?: StringFieldUpdateOperationsInput | string
    categoria_id?: StringFieldUpdateOperationsInput | string
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    imagem_capa_id?: StringFieldUpdateOperationsInput | string
    categoria_id?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyImagem_capaInput = {
    id?: string
    titulo: string
    slug: string
    conteudo: string
    resumo?: string | null
    publicado_em?: Date | string | null
    atualizado_em?: Date | string
    status?: $Enums.PostStatus
    autor_id: string
    categoria_id: string
  }

  export type UsuarioCreateManyFotoInput = {
    id?: string
    nome: string
    email: string
    senha_hash: string
    tipo?: $Enums.UsuarioTipo
    bio?: string | null
    criado_em?: Date | string
  }

  export type PostUpdateWithoutImagem_capaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPostsNestedInput
    tags?: PostTagUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutImagem_capaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    autor_id?: StringFieldUpdateOperationsInput | string
    categoria_id?: StringFieldUpdateOperationsInput | string
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutImagem_capaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    resumo?: NullableStringFieldUpdateOperationsInput | string | null
    publicado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atualizado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    autor_id?: StringFieldUpdateOperationsInput | string
    categoria_id?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpdateWithoutFotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumUsuarioTipoFieldUpdateOperationsInput | $Enums.UsuarioTipo
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumUsuarioTipoFieldUpdateOperationsInput | $Enums.UsuarioTipo
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutFotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo?: EnumUsuarioTipoFieldUpdateOperationsInput | $Enums.UsuarioTipo
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArquivoCreateManyIncidenteInput = {
    id?: string
    nome: string
    tipo: string
    caminho: string
    tamanho: number
    criado_em?: Date | string
    tipo_logico?: $Enums.TipoLogicoArquivo
  }

  export type ArquivoUpdateWithoutIncidenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
    postImagemCapa?: PostUpdateManyWithoutImagem_capaNestedInput
    usuarioFoto?: UsuarioUpdateManyWithoutFotoNestedInput
  }

  export type ArquivoUncheckedUpdateWithoutIncidenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
    postImagemCapa?: PostUncheckedUpdateManyWithoutImagem_capaNestedInput
    usuarioFoto?: UsuarioUncheckedUpdateManyWithoutFotoNestedInput
  }

  export type ArquivoUncheckedUpdateManyWithoutIncidenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_logico?: EnumTipoLogicoArquivoFieldUpdateOperationsInput | $Enums.TipoLogicoArquivo
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}