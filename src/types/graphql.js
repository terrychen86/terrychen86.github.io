/* eslint-disable */

// @flow

// @flow

/** All built-in and custom scalars, mapped to their actual values */
declare type Scalars = {|
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: string,
  JSON: never,
|};

declare type GatsbyTypes$AboutMeCardsJson = {|
  ...GatsbyTypes$Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?GatsbyTypes$Node,
    +children: Array<GatsbyTypes$Node>,
    +internal: GatsbyTypes$Internal,
    +name?: ?$ElementType<Scalars, 'String'>,
    +title?: ?$ElementType<Scalars, 'String'>,
    +text?: ?$ElementType<Scalars, 'String'>,
  |},
|};

declare type GatsbyTypes$AboutMeCardsJsonConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$AboutMeCardsJsonEdge>,
  +nodes: Array<GatsbyTypes$AboutMeCardsJson>,
  +pageInfo: GatsbyTypes$PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<GatsbyTypes$AboutMeCardsJsonGroupConnection>,
|};

declare type GatsbyTypes$AboutMeCardsJsonConnection_distinctArgs = {|
  field: GatsbyTypes$AboutMeCardsJsonFieldsEnum,
|};

declare type GatsbyTypes$AboutMeCardsJsonConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: GatsbyTypes$AboutMeCardsJsonFieldsEnum,
|};

declare type GatsbyTypes$AboutMeCardsJsonEdge = {|
  +next?: ?GatsbyTypes$AboutMeCardsJson,
  +node: GatsbyTypes$AboutMeCardsJson,
  +previous?: ?GatsbyTypes$AboutMeCardsJson,
|};

export const GatsbyTypes$AboutMeCardsJsonFieldsEnumValues = Object.freeze({
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  name: 'name',
  title: 'title',
  text: 'text',
});

declare type GatsbyTypes$AboutMeCardsJsonFieldsEnum = $Values<typeof GatsbyTypes$AboutMeCardsJsonFieldsEnumValues>;

declare type GatsbyTypes$AboutMeCardsJsonFilterInput = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  title?: ?GatsbyTypes$StringQueryOperatorInput,
  text?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$AboutMeCardsJsonFilterListInput = {|
  elemMatch?: ?GatsbyTypes$AboutMeCardsJsonFilterInput,
|};

declare type GatsbyTypes$AboutMeCardsJsonGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$AboutMeCardsJsonEdge>,
  +nodes: Array<GatsbyTypes$AboutMeCardsJson>,
  +pageInfo: GatsbyTypes$PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$AboutMeCardsJsonSortInput = {|
  fields?: ?Array<?AboutMeCardsJsonFieldsEnum>,
  order?: ?Array<?GatsbyTypes$SortOrderEnum>,
|};

declare type GatsbyTypes$BooleanQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Boolean'>,
  ne?: ?$ElementType<Scalars, 'Boolean'>,
  in?: ?Array<?$ElementType<Scalars, 'Boolean'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Boolean'>>,
|};

declare type GatsbyTypes$DateQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Date'>,
  ne?: ?$ElementType<Scalars, 'Date'>,
  gt?: ?$ElementType<Scalars, 'Date'>,
  gte?: ?$ElementType<Scalars, 'Date'>,
  lt?: ?$ElementType<Scalars, 'Date'>,
  lte?: ?$ElementType<Scalars, 'Date'>,
  in?: ?Array<?$ElementType<Scalars, 'Date'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Date'>>,
|};

declare type GatsbyTypes$Directory = {|
  ...GatsbyTypes$Node,
  ...{|
    +sourceInstanceName: $ElementType<Scalars, 'String'>,
    +absolutePath: $ElementType<Scalars, 'String'>,
    +relativePath: $ElementType<Scalars, 'String'>,
    +extension: $ElementType<Scalars, 'String'>,
    +size: $ElementType<Scalars, 'Int'>,
    +prettySize: $ElementType<Scalars, 'String'>,
    +modifiedTime: $ElementType<Scalars, 'Date'>,
    +accessTime: $ElementType<Scalars, 'Date'>,
    +changeTime: $ElementType<Scalars, 'Date'>,
    +birthTime: $ElementType<Scalars, 'Date'>,
    +root: $ElementType<Scalars, 'String'>,
    +dir: $ElementType<Scalars, 'String'>,
    +base: $ElementType<Scalars, 'String'>,
    +ext: $ElementType<Scalars, 'String'>,
    +name: $ElementType<Scalars, 'String'>,
    +relativeDirectory: $ElementType<Scalars, 'String'>,
    +dev: $ElementType<Scalars, 'Int'>,
    +mode: $ElementType<Scalars, 'Int'>,
    +nlink: $ElementType<Scalars, 'Int'>,
    +uid: $ElementType<Scalars, 'Int'>,
    +gid: $ElementType<Scalars, 'Int'>,
    +rdev: $ElementType<Scalars, 'Int'>,
    +ino: $ElementType<Scalars, 'Float'>,
    +atimeMs: $ElementType<Scalars, 'Float'>,
    +mtimeMs: $ElementType<Scalars, 'Float'>,
    +ctimeMs: $ElementType<Scalars, 'Float'>,
    +atime: $ElementType<Scalars, 'Date'>,
    +mtime: $ElementType<Scalars, 'Date'>,
    +ctime: $ElementType<Scalars, 'Date'>,
    +birthtime?: ?$ElementType<Scalars, 'Date'>,
    +birthtimeMs?: ?$ElementType<Scalars, 'Float'>,
    +blksize?: ?$ElementType<Scalars, 'Int'>,
    +blocks?: ?$ElementType<Scalars, 'Int'>,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?GatsbyTypes$Node,
    +children: Array<GatsbyTypes$Node>,
    +internal: GatsbyTypes$Internal,
  |},
|};

declare type GatsbyTypes$Directory_modifiedTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$Directory_accessTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$Directory_changeTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$Directory_birthTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$Directory_atimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$Directory_mtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$Directory_ctimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$DirectoryConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$DirectoryEdge>,
  +nodes: Array<GatsbyTypes$Directory>,
  +pageInfo: GatsbyTypes$PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<GatsbyTypes$DirectoryGroupConnection>,
|};

declare type GatsbyTypes$DirectoryConnection_distinctArgs = {|
  field: GatsbyTypes$DirectoryFieldsEnum,
|};

declare type GatsbyTypes$DirectoryConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: GatsbyTypes$DirectoryFieldsEnum,
|};

declare type GatsbyTypes$DirectoryEdge = {|
  +next?: ?GatsbyTypes$Directory,
  +node: GatsbyTypes$Directory,
  +previous?: ?GatsbyTypes$Directory,
|};

export const GatsbyTypes$DirectoryFieldsEnumValues = Object.freeze({
  sourceInstanceName: 'sourceInstanceName',
  absolutePath: 'absolutePath',
  relativePath: 'relativePath',
  extension: 'extension',
  size: 'size',
  prettySize: 'prettySize',
  modifiedTime: 'modifiedTime',
  accessTime: 'accessTime',
  changeTime: 'changeTime',
  birthTime: 'birthTime',
  root: 'root',
  dir: 'dir',
  base: 'base',
  ext: 'ext',
  name: 'name',
  relativeDirectory: 'relativeDirectory',
  dev: 'dev',
  mode: 'mode',
  nlink: 'nlink',
  uid: 'uid',
  gid: 'gid',
  rdev: 'rdev',
  ino: 'ino',
  atimeMs: 'atimeMs',
  mtimeMs: 'mtimeMs',
  ctimeMs: 'ctimeMs',
  atime: 'atime',
  mtime: 'mtime',
  ctime: 'ctime',
  birthtime: 'birthtime',
  birthtimeMs: 'birthtimeMs',
  blksize: 'blksize',
  blocks: 'blocks',
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
});

declare type GatsbyTypes$DirectoryFieldsEnum = $Values<typeof GatsbyTypes$DirectoryFieldsEnumValues>;

declare type GatsbyTypes$DirectoryFilterInput = {|
  sourceInstanceName?: ?GatsbyTypes$StringQueryOperatorInput,
  absolutePath?: ?GatsbyTypes$StringQueryOperatorInput,
  relativePath?: ?GatsbyTypes$StringQueryOperatorInput,
  extension?: ?GatsbyTypes$StringQueryOperatorInput,
  size?: ?GatsbyTypes$IntQueryOperatorInput,
  prettySize?: ?GatsbyTypes$StringQueryOperatorInput,
  modifiedTime?: ?GatsbyTypes$DateQueryOperatorInput,
  accessTime?: ?GatsbyTypes$DateQueryOperatorInput,
  changeTime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthTime?: ?GatsbyTypes$DateQueryOperatorInput,
  root?: ?GatsbyTypes$StringQueryOperatorInput,
  dir?: ?GatsbyTypes$StringQueryOperatorInput,
  base?: ?GatsbyTypes$StringQueryOperatorInput,
  ext?: ?GatsbyTypes$StringQueryOperatorInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  relativeDirectory?: ?GatsbyTypes$StringQueryOperatorInput,
  dev?: ?GatsbyTypes$IntQueryOperatorInput,
  mode?: ?GatsbyTypes$IntQueryOperatorInput,
  nlink?: ?GatsbyTypes$IntQueryOperatorInput,
  uid?: ?GatsbyTypes$IntQueryOperatorInput,
  gid?: ?GatsbyTypes$IntQueryOperatorInput,
  rdev?: ?GatsbyTypes$IntQueryOperatorInput,
  ino?: ?GatsbyTypes$FloatQueryOperatorInput,
  atimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  mtimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  ctimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  atime?: ?GatsbyTypes$DateQueryOperatorInput,
  mtime?: ?GatsbyTypes$DateQueryOperatorInput,
  ctime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthtime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthtimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  blksize?: ?GatsbyTypes$IntQueryOperatorInput,
  blocks?: ?GatsbyTypes$IntQueryOperatorInput,
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
|};

declare type GatsbyTypes$DirectoryGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$DirectoryEdge>,
  +nodes: Array<GatsbyTypes$Directory>,
  +pageInfo: GatsbyTypes$PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$DirectorySortInput = {|
  fields?: ?Array<?DirectoryFieldsEnum>,
  order?: ?Array<?GatsbyTypes$SortOrderEnum>,
|};

declare type GatsbyTypes$File = {|
  ...GatsbyTypes$Node,
  ...{|
    +sourceInstanceName: $ElementType<Scalars, 'String'>,
    +absolutePath: $ElementType<Scalars, 'String'>,
    +relativePath: $ElementType<Scalars, 'String'>,
    +extension: $ElementType<Scalars, 'String'>,
    +size: $ElementType<Scalars, 'Int'>,
    +prettySize: $ElementType<Scalars, 'String'>,
    +modifiedTime: $ElementType<Scalars, 'Date'>,
    +accessTime: $ElementType<Scalars, 'Date'>,
    +changeTime: $ElementType<Scalars, 'Date'>,
    +birthTime: $ElementType<Scalars, 'Date'>,
    +root: $ElementType<Scalars, 'String'>,
    +dir: $ElementType<Scalars, 'String'>,
    +base: $ElementType<Scalars, 'String'>,
    +ext: $ElementType<Scalars, 'String'>,
    +name: $ElementType<Scalars, 'String'>,
    +relativeDirectory: $ElementType<Scalars, 'String'>,
    +dev: $ElementType<Scalars, 'Int'>,
    +mode: $ElementType<Scalars, 'Int'>,
    +nlink: $ElementType<Scalars, 'Int'>,
    +uid: $ElementType<Scalars, 'Int'>,
    +gid: $ElementType<Scalars, 'Int'>,
    +rdev: $ElementType<Scalars, 'Int'>,
    +ino: $ElementType<Scalars, 'Float'>,
    +atimeMs: $ElementType<Scalars, 'Float'>,
    +mtimeMs: $ElementType<Scalars, 'Float'>,
    +ctimeMs: $ElementType<Scalars, 'Float'>,
    +atime: $ElementType<Scalars, 'Date'>,
    +mtime: $ElementType<Scalars, 'Date'>,
    +ctime: $ElementType<Scalars, 'Date'>,
    +birthtime?: ?$ElementType<Scalars, 'Date'>,
    +birthtimeMs?: ?$ElementType<Scalars, 'Float'>,
    +blksize?: ?$ElementType<Scalars, 'Int'>,
    +blocks?: ?$ElementType<Scalars, 'Int'>,
    /** Copy file to static directory and return public url to it */
    +publicURL?: ?$ElementType<Scalars, 'String'>,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?GatsbyTypes$Node,
    +children: Array<GatsbyTypes$Node>,
    +internal: GatsbyTypes$Internal,
    +childrenIconLinksJson?: ?Array<?GatsbyTypes$IconLinksJson>,
    +childrenAboutMeCardsJson?: ?Array<?GatsbyTypes$AboutMeCardsJson>,
    +childrenNavItemsJson?: ?Array<?GatsbyTypes$NavItemsJson>,
    +childrenProjectsJson?: ?Array<?GatsbyTypes$ProjectsJson>,
  |},
|};

declare type GatsbyTypes$File_modifiedTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$File_accessTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$File_changeTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$File_birthTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$File_atimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$File_mtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$File_ctimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$FileConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$FileEdge>,
  +nodes: Array<GatsbyTypes$File>,
  +pageInfo: GatsbyTypes$PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<GatsbyTypes$FileGroupConnection>,
|};

declare type GatsbyTypes$FileConnection_distinctArgs = {|
  field: GatsbyTypes$FileFieldsEnum,
|};

declare type GatsbyTypes$FileConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: GatsbyTypes$FileFieldsEnum,
|};

declare type GatsbyTypes$FileEdge = {|
  +next?: ?GatsbyTypes$File,
  +node: GatsbyTypes$File,
  +previous?: ?GatsbyTypes$File,
|};

export const GatsbyTypes$FileFieldsEnumValues = Object.freeze({
  sourceInstanceName: 'sourceInstanceName',
  absolutePath: 'absolutePath',
  relativePath: 'relativePath',
  extension: 'extension',
  size: 'size',
  prettySize: 'prettySize',
  modifiedTime: 'modifiedTime',
  accessTime: 'accessTime',
  changeTime: 'changeTime',
  birthTime: 'birthTime',
  root: 'root',
  dir: 'dir',
  base: 'base',
  ext: 'ext',
  name: 'name',
  relativeDirectory: 'relativeDirectory',
  dev: 'dev',
  mode: 'mode',
  nlink: 'nlink',
  uid: 'uid',
  gid: 'gid',
  rdev: 'rdev',
  ino: 'ino',
  atimeMs: 'atimeMs',
  mtimeMs: 'mtimeMs',
  ctimeMs: 'ctimeMs',
  atime: 'atime',
  mtime: 'mtime',
  ctime: 'ctime',
  birthtime: 'birthtime',
  birthtimeMs: 'birthtimeMs',
  blksize: 'blksize',
  blocks: 'blocks',
  publicURL: 'publicURL',
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  childrenIconLinksJson: 'childrenIconLinksJson',
  childrenIconLinksJson___id: 'childrenIconLinksJson.id',
  childrenIconLinksJson___parent___id: 'childrenIconLinksJson.parent.id',
  childrenIconLinksJson___parent___parent___id: 'childrenIconLinksJson.parent.parent.id',
  childrenIconLinksJson___parent___parent___children: 'childrenIconLinksJson.parent.parent.children',
  childrenIconLinksJson___parent___children: 'childrenIconLinksJson.parent.children',
  childrenIconLinksJson___parent___children___id: 'childrenIconLinksJson.parent.children.id',
  childrenIconLinksJson___parent___children___children: 'childrenIconLinksJson.parent.children.children',
  childrenIconLinksJson___parent___internal___content: 'childrenIconLinksJson.parent.internal.content',
  childrenIconLinksJson___parent___internal___contentDigest: 'childrenIconLinksJson.parent.internal.contentDigest',
  childrenIconLinksJson___parent___internal___description: 'childrenIconLinksJson.parent.internal.description',
  childrenIconLinksJson___parent___internal___fieldOwners: 'childrenIconLinksJson.parent.internal.fieldOwners',
  childrenIconLinksJson___parent___internal___ignoreType: 'childrenIconLinksJson.parent.internal.ignoreType',
  childrenIconLinksJson___parent___internal___mediaType: 'childrenIconLinksJson.parent.internal.mediaType',
  childrenIconLinksJson___parent___internal___owner: 'childrenIconLinksJson.parent.internal.owner',
  childrenIconLinksJson___parent___internal___type: 'childrenIconLinksJson.parent.internal.type',
  childrenIconLinksJson___children: 'childrenIconLinksJson.children',
  childrenIconLinksJson___children___id: 'childrenIconLinksJson.children.id',
  childrenIconLinksJson___children___parent___id: 'childrenIconLinksJson.children.parent.id',
  childrenIconLinksJson___children___parent___children: 'childrenIconLinksJson.children.parent.children',
  childrenIconLinksJson___children___children: 'childrenIconLinksJson.children.children',
  childrenIconLinksJson___children___children___id: 'childrenIconLinksJson.children.children.id',
  childrenIconLinksJson___children___children___children: 'childrenIconLinksJson.children.children.children',
  childrenIconLinksJson___children___internal___content: 'childrenIconLinksJson.children.internal.content',
  childrenIconLinksJson___children___internal___contentDigest: 'childrenIconLinksJson.children.internal.contentDigest',
  childrenIconLinksJson___children___internal___description: 'childrenIconLinksJson.children.internal.description',
  childrenIconLinksJson___children___internal___fieldOwners: 'childrenIconLinksJson.children.internal.fieldOwners',
  childrenIconLinksJson___children___internal___ignoreType: 'childrenIconLinksJson.children.internal.ignoreType',
  childrenIconLinksJson___children___internal___mediaType: 'childrenIconLinksJson.children.internal.mediaType',
  childrenIconLinksJson___children___internal___owner: 'childrenIconLinksJson.children.internal.owner',
  childrenIconLinksJson___children___internal___type: 'childrenIconLinksJson.children.internal.type',
  childrenIconLinksJson___internal___content: 'childrenIconLinksJson.internal.content',
  childrenIconLinksJson___internal___contentDigest: 'childrenIconLinksJson.internal.contentDigest',
  childrenIconLinksJson___internal___description: 'childrenIconLinksJson.internal.description',
  childrenIconLinksJson___internal___fieldOwners: 'childrenIconLinksJson.internal.fieldOwners',
  childrenIconLinksJson___internal___ignoreType: 'childrenIconLinksJson.internal.ignoreType',
  childrenIconLinksJson___internal___mediaType: 'childrenIconLinksJson.internal.mediaType',
  childrenIconLinksJson___internal___owner: 'childrenIconLinksJson.internal.owner',
  childrenIconLinksJson___internal___type: 'childrenIconLinksJson.internal.type',
  childrenIconLinksJson___name: 'childrenIconLinksJson.name',
  childrenIconLinksJson___icon: 'childrenIconLinksJson.icon',
  childrenIconLinksJson___url: 'childrenIconLinksJson.url',
  childrenAboutMeCardsJson: 'childrenAboutMeCardsJson',
  childrenAboutMeCardsJson___id: 'childrenAboutMeCardsJson.id',
  childrenAboutMeCardsJson___parent___id: 'childrenAboutMeCardsJson.parent.id',
  childrenAboutMeCardsJson___parent___parent___id: 'childrenAboutMeCardsJson.parent.parent.id',
  childrenAboutMeCardsJson___parent___parent___children: 'childrenAboutMeCardsJson.parent.parent.children',
  childrenAboutMeCardsJson___parent___children: 'childrenAboutMeCardsJson.parent.children',
  childrenAboutMeCardsJson___parent___children___id: 'childrenAboutMeCardsJson.parent.children.id',
  childrenAboutMeCardsJson___parent___children___children: 'childrenAboutMeCardsJson.parent.children.children',
  childrenAboutMeCardsJson___parent___internal___content: 'childrenAboutMeCardsJson.parent.internal.content',
  childrenAboutMeCardsJson___parent___internal___contentDigest:
    'childrenAboutMeCardsJson.parent.internal.contentDigest',
  childrenAboutMeCardsJson___parent___internal___description: 'childrenAboutMeCardsJson.parent.internal.description',
  childrenAboutMeCardsJson___parent___internal___fieldOwners: 'childrenAboutMeCardsJson.parent.internal.fieldOwners',
  childrenAboutMeCardsJson___parent___internal___ignoreType: 'childrenAboutMeCardsJson.parent.internal.ignoreType',
  childrenAboutMeCardsJson___parent___internal___mediaType: 'childrenAboutMeCardsJson.parent.internal.mediaType',
  childrenAboutMeCardsJson___parent___internal___owner: 'childrenAboutMeCardsJson.parent.internal.owner',
  childrenAboutMeCardsJson___parent___internal___type: 'childrenAboutMeCardsJson.parent.internal.type',
  childrenAboutMeCardsJson___children: 'childrenAboutMeCardsJson.children',
  childrenAboutMeCardsJson___children___id: 'childrenAboutMeCardsJson.children.id',
  childrenAboutMeCardsJson___children___parent___id: 'childrenAboutMeCardsJson.children.parent.id',
  childrenAboutMeCardsJson___children___parent___children: 'childrenAboutMeCardsJson.children.parent.children',
  childrenAboutMeCardsJson___children___children: 'childrenAboutMeCardsJson.children.children',
  childrenAboutMeCardsJson___children___children___id: 'childrenAboutMeCardsJson.children.children.id',
  childrenAboutMeCardsJson___children___children___children: 'childrenAboutMeCardsJson.children.children.children',
  childrenAboutMeCardsJson___children___internal___content: 'childrenAboutMeCardsJson.children.internal.content',
  childrenAboutMeCardsJson___children___internal___contentDigest:
    'childrenAboutMeCardsJson.children.internal.contentDigest',
  childrenAboutMeCardsJson___children___internal___description:
    'childrenAboutMeCardsJson.children.internal.description',
  childrenAboutMeCardsJson___children___internal___fieldOwners:
    'childrenAboutMeCardsJson.children.internal.fieldOwners',
  childrenAboutMeCardsJson___children___internal___ignoreType: 'childrenAboutMeCardsJson.children.internal.ignoreType',
  childrenAboutMeCardsJson___children___internal___mediaType: 'childrenAboutMeCardsJson.children.internal.mediaType',
  childrenAboutMeCardsJson___children___internal___owner: 'childrenAboutMeCardsJson.children.internal.owner',
  childrenAboutMeCardsJson___children___internal___type: 'childrenAboutMeCardsJson.children.internal.type',
  childrenAboutMeCardsJson___internal___content: 'childrenAboutMeCardsJson.internal.content',
  childrenAboutMeCardsJson___internal___contentDigest: 'childrenAboutMeCardsJson.internal.contentDigest',
  childrenAboutMeCardsJson___internal___description: 'childrenAboutMeCardsJson.internal.description',
  childrenAboutMeCardsJson___internal___fieldOwners: 'childrenAboutMeCardsJson.internal.fieldOwners',
  childrenAboutMeCardsJson___internal___ignoreType: 'childrenAboutMeCardsJson.internal.ignoreType',
  childrenAboutMeCardsJson___internal___mediaType: 'childrenAboutMeCardsJson.internal.mediaType',
  childrenAboutMeCardsJson___internal___owner: 'childrenAboutMeCardsJson.internal.owner',
  childrenAboutMeCardsJson___internal___type: 'childrenAboutMeCardsJson.internal.type',
  childrenAboutMeCardsJson___name: 'childrenAboutMeCardsJson.name',
  childrenAboutMeCardsJson___title: 'childrenAboutMeCardsJson.title',
  childrenAboutMeCardsJson___text: 'childrenAboutMeCardsJson.text',
  childrenNavItemsJson: 'childrenNavItemsJson',
  childrenNavItemsJson___id: 'childrenNavItemsJson.id',
  childrenNavItemsJson___parent___id: 'childrenNavItemsJson.parent.id',
  childrenNavItemsJson___parent___parent___id: 'childrenNavItemsJson.parent.parent.id',
  childrenNavItemsJson___parent___parent___children: 'childrenNavItemsJson.parent.parent.children',
  childrenNavItemsJson___parent___children: 'childrenNavItemsJson.parent.children',
  childrenNavItemsJson___parent___children___id: 'childrenNavItemsJson.parent.children.id',
  childrenNavItemsJson___parent___children___children: 'childrenNavItemsJson.parent.children.children',
  childrenNavItemsJson___parent___internal___content: 'childrenNavItemsJson.parent.internal.content',
  childrenNavItemsJson___parent___internal___contentDigest: 'childrenNavItemsJson.parent.internal.contentDigest',
  childrenNavItemsJson___parent___internal___description: 'childrenNavItemsJson.parent.internal.description',
  childrenNavItemsJson___parent___internal___fieldOwners: 'childrenNavItemsJson.parent.internal.fieldOwners',
  childrenNavItemsJson___parent___internal___ignoreType: 'childrenNavItemsJson.parent.internal.ignoreType',
  childrenNavItemsJson___parent___internal___mediaType: 'childrenNavItemsJson.parent.internal.mediaType',
  childrenNavItemsJson___parent___internal___owner: 'childrenNavItemsJson.parent.internal.owner',
  childrenNavItemsJson___parent___internal___type: 'childrenNavItemsJson.parent.internal.type',
  childrenNavItemsJson___children: 'childrenNavItemsJson.children',
  childrenNavItemsJson___children___id: 'childrenNavItemsJson.children.id',
  childrenNavItemsJson___children___parent___id: 'childrenNavItemsJson.children.parent.id',
  childrenNavItemsJson___children___parent___children: 'childrenNavItemsJson.children.parent.children',
  childrenNavItemsJson___children___children: 'childrenNavItemsJson.children.children',
  childrenNavItemsJson___children___children___id: 'childrenNavItemsJson.children.children.id',
  childrenNavItemsJson___children___children___children: 'childrenNavItemsJson.children.children.children',
  childrenNavItemsJson___children___internal___content: 'childrenNavItemsJson.children.internal.content',
  childrenNavItemsJson___children___internal___contentDigest: 'childrenNavItemsJson.children.internal.contentDigest',
  childrenNavItemsJson___children___internal___description: 'childrenNavItemsJson.children.internal.description',
  childrenNavItemsJson___children___internal___fieldOwners: 'childrenNavItemsJson.children.internal.fieldOwners',
  childrenNavItemsJson___children___internal___ignoreType: 'childrenNavItemsJson.children.internal.ignoreType',
  childrenNavItemsJson___children___internal___mediaType: 'childrenNavItemsJson.children.internal.mediaType',
  childrenNavItemsJson___children___internal___owner: 'childrenNavItemsJson.children.internal.owner',
  childrenNavItemsJson___children___internal___type: 'childrenNavItemsJson.children.internal.type',
  childrenNavItemsJson___internal___content: 'childrenNavItemsJson.internal.content',
  childrenNavItemsJson___internal___contentDigest: 'childrenNavItemsJson.internal.contentDigest',
  childrenNavItemsJson___internal___description: 'childrenNavItemsJson.internal.description',
  childrenNavItemsJson___internal___fieldOwners: 'childrenNavItemsJson.internal.fieldOwners',
  childrenNavItemsJson___internal___ignoreType: 'childrenNavItemsJson.internal.ignoreType',
  childrenNavItemsJson___internal___mediaType: 'childrenNavItemsJson.internal.mediaType',
  childrenNavItemsJson___internal___owner: 'childrenNavItemsJson.internal.owner',
  childrenNavItemsJson___internal___type: 'childrenNavItemsJson.internal.type',
  childrenNavItemsJson___title: 'childrenNavItemsJson.title',
  childrenNavItemsJson___path: 'childrenNavItemsJson.path',
  childrenNavItemsJson___link: 'childrenNavItemsJson.link',
  childrenProjectsJson: 'childrenProjectsJson',
  childrenProjectsJson___id: 'childrenProjectsJson.id',
  childrenProjectsJson___parent___id: 'childrenProjectsJson.parent.id',
  childrenProjectsJson___parent___parent___id: 'childrenProjectsJson.parent.parent.id',
  childrenProjectsJson___parent___parent___children: 'childrenProjectsJson.parent.parent.children',
  childrenProjectsJson___parent___children: 'childrenProjectsJson.parent.children',
  childrenProjectsJson___parent___children___id: 'childrenProjectsJson.parent.children.id',
  childrenProjectsJson___parent___children___children: 'childrenProjectsJson.parent.children.children',
  childrenProjectsJson___parent___internal___content: 'childrenProjectsJson.parent.internal.content',
  childrenProjectsJson___parent___internal___contentDigest: 'childrenProjectsJson.parent.internal.contentDigest',
  childrenProjectsJson___parent___internal___description: 'childrenProjectsJson.parent.internal.description',
  childrenProjectsJson___parent___internal___fieldOwners: 'childrenProjectsJson.parent.internal.fieldOwners',
  childrenProjectsJson___parent___internal___ignoreType: 'childrenProjectsJson.parent.internal.ignoreType',
  childrenProjectsJson___parent___internal___mediaType: 'childrenProjectsJson.parent.internal.mediaType',
  childrenProjectsJson___parent___internal___owner: 'childrenProjectsJson.parent.internal.owner',
  childrenProjectsJson___parent___internal___type: 'childrenProjectsJson.parent.internal.type',
  childrenProjectsJson___children: 'childrenProjectsJson.children',
  childrenProjectsJson___children___id: 'childrenProjectsJson.children.id',
  childrenProjectsJson___children___parent___id: 'childrenProjectsJson.children.parent.id',
  childrenProjectsJson___children___parent___children: 'childrenProjectsJson.children.parent.children',
  childrenProjectsJson___children___children: 'childrenProjectsJson.children.children',
  childrenProjectsJson___children___children___id: 'childrenProjectsJson.children.children.id',
  childrenProjectsJson___children___children___children: 'childrenProjectsJson.children.children.children',
  childrenProjectsJson___children___internal___content: 'childrenProjectsJson.children.internal.content',
  childrenProjectsJson___children___internal___contentDigest: 'childrenProjectsJson.children.internal.contentDigest',
  childrenProjectsJson___children___internal___description: 'childrenProjectsJson.children.internal.description',
  childrenProjectsJson___children___internal___fieldOwners: 'childrenProjectsJson.children.internal.fieldOwners',
  childrenProjectsJson___children___internal___ignoreType: 'childrenProjectsJson.children.internal.ignoreType',
  childrenProjectsJson___children___internal___mediaType: 'childrenProjectsJson.children.internal.mediaType',
  childrenProjectsJson___children___internal___owner: 'childrenProjectsJson.children.internal.owner',
  childrenProjectsJson___children___internal___type: 'childrenProjectsJson.children.internal.type',
  childrenProjectsJson___internal___content: 'childrenProjectsJson.internal.content',
  childrenProjectsJson___internal___contentDigest: 'childrenProjectsJson.internal.contentDigest',
  childrenProjectsJson___internal___description: 'childrenProjectsJson.internal.description',
  childrenProjectsJson___internal___fieldOwners: 'childrenProjectsJson.internal.fieldOwners',
  childrenProjectsJson___internal___ignoreType: 'childrenProjectsJson.internal.ignoreType',
  childrenProjectsJson___internal___mediaType: 'childrenProjectsJson.internal.mediaType',
  childrenProjectsJson___internal___owner: 'childrenProjectsJson.internal.owner',
  childrenProjectsJson___internal___type: 'childrenProjectsJson.internal.type',
  childrenProjectsJson___name: 'childrenProjectsJson.name',
  childrenProjectsJson___title: 'childrenProjectsJson.title',
  childrenProjectsJson___tags: 'childrenProjectsJson.tags',
  childrenProjectsJson___links: 'childrenProjectsJson.links',
  childrenProjectsJson___links___icon: 'childrenProjectsJson.links.icon',
  childrenProjectsJson___links___link: 'childrenProjectsJson.links.link',
});

declare type GatsbyTypes$FileFieldsEnum = $Values<typeof GatsbyTypes$FileFieldsEnumValues>;

declare type GatsbyTypes$FileFilterInput = {|
  sourceInstanceName?: ?GatsbyTypes$StringQueryOperatorInput,
  absolutePath?: ?GatsbyTypes$StringQueryOperatorInput,
  relativePath?: ?GatsbyTypes$StringQueryOperatorInput,
  extension?: ?GatsbyTypes$StringQueryOperatorInput,
  size?: ?GatsbyTypes$IntQueryOperatorInput,
  prettySize?: ?GatsbyTypes$StringQueryOperatorInput,
  modifiedTime?: ?GatsbyTypes$DateQueryOperatorInput,
  accessTime?: ?GatsbyTypes$DateQueryOperatorInput,
  changeTime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthTime?: ?GatsbyTypes$DateQueryOperatorInput,
  root?: ?GatsbyTypes$StringQueryOperatorInput,
  dir?: ?GatsbyTypes$StringQueryOperatorInput,
  base?: ?GatsbyTypes$StringQueryOperatorInput,
  ext?: ?GatsbyTypes$StringQueryOperatorInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  relativeDirectory?: ?GatsbyTypes$StringQueryOperatorInput,
  dev?: ?GatsbyTypes$IntQueryOperatorInput,
  mode?: ?GatsbyTypes$IntQueryOperatorInput,
  nlink?: ?GatsbyTypes$IntQueryOperatorInput,
  uid?: ?GatsbyTypes$IntQueryOperatorInput,
  gid?: ?GatsbyTypes$IntQueryOperatorInput,
  rdev?: ?GatsbyTypes$IntQueryOperatorInput,
  ino?: ?GatsbyTypes$FloatQueryOperatorInput,
  atimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  mtimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  ctimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  atime?: ?GatsbyTypes$DateQueryOperatorInput,
  mtime?: ?GatsbyTypes$DateQueryOperatorInput,
  ctime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthtime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthtimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  blksize?: ?GatsbyTypes$IntQueryOperatorInput,
  blocks?: ?GatsbyTypes$IntQueryOperatorInput,
  publicURL?: ?GatsbyTypes$StringQueryOperatorInput,
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  childrenIconLinksJson?: ?GatsbyTypes$IconLinksJsonFilterListInput,
  childrenAboutMeCardsJson?: ?GatsbyTypes$AboutMeCardsJsonFilterListInput,
  childrenNavItemsJson?: ?GatsbyTypes$NavItemsJsonFilterListInput,
  childrenProjectsJson?: ?GatsbyTypes$ProjectsJsonFilterListInput,
|};

declare type GatsbyTypes$FileGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$FileEdge>,
  +nodes: Array<GatsbyTypes$File>,
  +pageInfo: GatsbyTypes$PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$FileSortInput = {|
  fields?: ?Array<?FileFieldsEnum>,
  order?: ?Array<?GatsbyTypes$SortOrderEnum>,
|};

declare type GatsbyTypes$FloatQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Float'>,
  ne?: ?$ElementType<Scalars, 'Float'>,
  gt?: ?$ElementType<Scalars, 'Float'>,
  gte?: ?$ElementType<Scalars, 'Float'>,
  lt?: ?$ElementType<Scalars, 'Float'>,
  lte?: ?$ElementType<Scalars, 'Float'>,
  in?: ?Array<?$ElementType<Scalars, 'Float'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Float'>>,
|};

declare type GatsbyTypes$IconLinksJson = {|
  ...GatsbyTypes$Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?GatsbyTypes$Node,
    +children: Array<GatsbyTypes$Node>,
    +internal: GatsbyTypes$Internal,
    +name?: ?$ElementType<Scalars, 'String'>,
    +icon?: ?$ElementType<Scalars, 'String'>,
    +url?: ?$ElementType<Scalars, 'String'>,
  |},
|};

declare type GatsbyTypes$IconLinksJsonConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$IconLinksJsonEdge>,
  +nodes: Array<GatsbyTypes$IconLinksJson>,
  +pageInfo: GatsbyTypes$PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<GatsbyTypes$IconLinksJsonGroupConnection>,
|};

declare type GatsbyTypes$IconLinksJsonConnection_distinctArgs = {|
  field: GatsbyTypes$IconLinksJsonFieldsEnum,
|};

declare type GatsbyTypes$IconLinksJsonConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: GatsbyTypes$IconLinksJsonFieldsEnum,
|};

declare type GatsbyTypes$IconLinksJsonEdge = {|
  +next?: ?GatsbyTypes$IconLinksJson,
  +node: GatsbyTypes$IconLinksJson,
  +previous?: ?GatsbyTypes$IconLinksJson,
|};

export const GatsbyTypes$IconLinksJsonFieldsEnumValues = Object.freeze({
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  name: 'name',
  icon: 'icon',
  url: 'url',
});

declare type GatsbyTypes$IconLinksJsonFieldsEnum = $Values<typeof GatsbyTypes$IconLinksJsonFieldsEnumValues>;

declare type GatsbyTypes$IconLinksJsonFilterInput = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  icon?: ?GatsbyTypes$StringQueryOperatorInput,
  url?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$IconLinksJsonFilterListInput = {|
  elemMatch?: ?GatsbyTypes$IconLinksJsonFilterInput,
|};

declare type GatsbyTypes$IconLinksJsonGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$IconLinksJsonEdge>,
  +nodes: Array<GatsbyTypes$IconLinksJson>,
  +pageInfo: GatsbyTypes$PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$IconLinksJsonSortInput = {|
  fields?: ?Array<?IconLinksJsonFieldsEnum>,
  order?: ?Array<?GatsbyTypes$SortOrderEnum>,
|};

declare type GatsbyTypes$Internal = {|
  +content?: ?$ElementType<Scalars, 'String'>,
  +contentDigest: $ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +fieldOwners?: ?Array<?$ElementType<Scalars, 'String'>>,
  +ignoreType?: ?$ElementType<Scalars, 'Boolean'>,
  +mediaType?: ?$ElementType<Scalars, 'String'>,
  +owner: $ElementType<Scalars, 'String'>,
  +type: $ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$InternalFilterInput = {|
  content?: ?GatsbyTypes$StringQueryOperatorInput,
  contentDigest?: ?GatsbyTypes$StringQueryOperatorInput,
  description?: ?GatsbyTypes$StringQueryOperatorInput,
  fieldOwners?: ?GatsbyTypes$StringQueryOperatorInput,
  ignoreType?: ?GatsbyTypes$BooleanQueryOperatorInput,
  mediaType?: ?GatsbyTypes$StringQueryOperatorInput,
  owner?: ?GatsbyTypes$StringQueryOperatorInput,
  type?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$IntQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Int'>,
  ne?: ?$ElementType<Scalars, 'Int'>,
  gt?: ?$ElementType<Scalars, 'Int'>,
  gte?: ?$ElementType<Scalars, 'Int'>,
  lt?: ?$ElementType<Scalars, 'Int'>,
  lte?: ?$ElementType<Scalars, 'Int'>,
  in?: ?Array<?$ElementType<Scalars, 'Int'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Int'>>,
|};

declare type GatsbyTypes$NavItemsJson = {|
  ...GatsbyTypes$Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?GatsbyTypes$Node,
    +children: Array<GatsbyTypes$Node>,
    +internal: GatsbyTypes$Internal,
    +title?: ?$ElementType<Scalars, 'String'>,
    +path?: ?$ElementType<Scalars, 'String'>,
    +link?: ?$ElementType<Scalars, 'String'>,
  |},
|};

declare type GatsbyTypes$NavItemsJsonConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$NavItemsJsonEdge>,
  +nodes: Array<GatsbyTypes$NavItemsJson>,
  +pageInfo: GatsbyTypes$PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<GatsbyTypes$NavItemsJsonGroupConnection>,
|};

declare type GatsbyTypes$NavItemsJsonConnection_distinctArgs = {|
  field: GatsbyTypes$NavItemsJsonFieldsEnum,
|};

declare type GatsbyTypes$NavItemsJsonConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: GatsbyTypes$NavItemsJsonFieldsEnum,
|};

declare type GatsbyTypes$NavItemsJsonEdge = {|
  +next?: ?GatsbyTypes$NavItemsJson,
  +node: GatsbyTypes$NavItemsJson,
  +previous?: ?GatsbyTypes$NavItemsJson,
|};

export const GatsbyTypes$NavItemsJsonFieldsEnumValues = Object.freeze({
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  title: 'title',
  path: 'path',
  link: 'link',
});

declare type GatsbyTypes$NavItemsJsonFieldsEnum = $Values<typeof GatsbyTypes$NavItemsJsonFieldsEnumValues>;

declare type GatsbyTypes$NavItemsJsonFilterInput = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  title?: ?GatsbyTypes$StringQueryOperatorInput,
  path?: ?GatsbyTypes$StringQueryOperatorInput,
  link?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$NavItemsJsonFilterListInput = {|
  elemMatch?: ?GatsbyTypes$NavItemsJsonFilterInput,
|};

declare type GatsbyTypes$NavItemsJsonGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$NavItemsJsonEdge>,
  +nodes: Array<GatsbyTypes$NavItemsJson>,
  +pageInfo: GatsbyTypes$PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$NavItemsJsonSortInput = {|
  fields?: ?Array<?NavItemsJsonFieldsEnum>,
  order?: ?Array<?GatsbyTypes$SortOrderEnum>,
|};

/** Node Interface */
declare type GatsbyTypes$Node = {|
  +id: $ElementType<Scalars, 'ID'>,
  +parent?: ?GatsbyTypes$Node,
  +children: Array<GatsbyTypes$Node>,
  +internal: GatsbyTypes$Internal,
|};

declare type GatsbyTypes$NodeFilterInput = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
|};

declare type GatsbyTypes$NodeFilterListInput = {|
  elemMatch?: ?GatsbyTypes$NodeFilterInput,
|};

declare type GatsbyTypes$PageInfo = {|
  +currentPage: $ElementType<Scalars, 'Int'>,
  +hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
  +hasNextPage: $ElementType<Scalars, 'Boolean'>,
  +itemCount: $ElementType<Scalars, 'Int'>,
  +pageCount: $ElementType<Scalars, 'Int'>,
  +perPage?: ?$ElementType<Scalars, 'Int'>,
  +totalCount: $ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$ProjectsJson = {|
  ...GatsbyTypes$Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?GatsbyTypes$Node,
    +children: Array<GatsbyTypes$Node>,
    +internal: GatsbyTypes$Internal,
    +name?: ?$ElementType<Scalars, 'String'>,
    +title?: ?$ElementType<Scalars, 'String'>,
    +tags?: ?Array<?$ElementType<Scalars, 'String'>>,
    +links?: ?Array<?GatsbyTypes$ProjectsJsonLinks>,
  |},
|};

declare type GatsbyTypes$ProjectsJsonConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$ProjectsJsonEdge>,
  +nodes: Array<GatsbyTypes$ProjectsJson>,
  +pageInfo: GatsbyTypes$PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<GatsbyTypes$ProjectsJsonGroupConnection>,
|};

declare type GatsbyTypes$ProjectsJsonConnection_distinctArgs = {|
  field: GatsbyTypes$ProjectsJsonFieldsEnum,
|};

declare type GatsbyTypes$ProjectsJsonConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: GatsbyTypes$ProjectsJsonFieldsEnum,
|};

declare type GatsbyTypes$ProjectsJsonEdge = {|
  +next?: ?GatsbyTypes$ProjectsJson,
  +node: GatsbyTypes$ProjectsJson,
  +previous?: ?GatsbyTypes$ProjectsJson,
|};

export const GatsbyTypes$ProjectsJsonFieldsEnumValues = Object.freeze({
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  name: 'name',
  title: 'title',
  tags: 'tags',
  links: 'links',
  links___icon: 'links.icon',
  links___link: 'links.link',
});

declare type GatsbyTypes$ProjectsJsonFieldsEnum = $Values<typeof GatsbyTypes$ProjectsJsonFieldsEnumValues>;

declare type GatsbyTypes$ProjectsJsonFilterInput = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  title?: ?GatsbyTypes$StringQueryOperatorInput,
  tags?: ?GatsbyTypes$StringQueryOperatorInput,
  links?: ?GatsbyTypes$ProjectsJsonLinksFilterListInput,
|};

declare type GatsbyTypes$ProjectsJsonFilterListInput = {|
  elemMatch?: ?GatsbyTypes$ProjectsJsonFilterInput,
|};

declare type GatsbyTypes$ProjectsJsonGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$ProjectsJsonEdge>,
  +nodes: Array<GatsbyTypes$ProjectsJson>,
  +pageInfo: GatsbyTypes$PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$ProjectsJsonLinks = {|
  +icon?: ?$ElementType<Scalars, 'String'>,
  +link?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$ProjectsJsonLinksFilterInput = {|
  icon?: ?GatsbyTypes$StringQueryOperatorInput,
  link?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$ProjectsJsonLinksFilterListInput = {|
  elemMatch?: ?GatsbyTypes$ProjectsJsonLinksFilterInput,
|};

declare type GatsbyTypes$ProjectsJsonSortInput = {|
  fields?: ?Array<?ProjectsJsonFieldsEnum>,
  order?: ?Array<?GatsbyTypes$SortOrderEnum>,
|};

declare type GatsbyTypes$Query = {|
  +file?: ?GatsbyTypes$File,
  +allFile: GatsbyTypes$FileConnection,
  +directory?: ?GatsbyTypes$Directory,
  +allDirectory: GatsbyTypes$DirectoryConnection,
  +sitePage?: ?GatsbyTypes$SitePage,
  +allSitePage: GatsbyTypes$SitePageConnection,
  +site?: ?GatsbyTypes$Site,
  +allSite: GatsbyTypes$SiteConnection,
  +projectsJson?: ?GatsbyTypes$ProjectsJson,
  +allProjectsJson: GatsbyTypes$ProjectsJsonConnection,
  +navItemsJson?: ?GatsbyTypes$NavItemsJson,
  +allNavItemsJson: GatsbyTypes$NavItemsJsonConnection,
  +iconLinksJson?: ?GatsbyTypes$IconLinksJson,
  +allIconLinksJson: GatsbyTypes$IconLinksJsonConnection,
  +aboutMeCardsJson?: ?GatsbyTypes$AboutMeCardsJson,
  +allAboutMeCardsJson: GatsbyTypes$AboutMeCardsJsonConnection,
  +siteBuildMetadata?: ?GatsbyTypes$SiteBuildMetadata,
  +allSiteBuildMetadata: GatsbyTypes$SiteBuildMetadataConnection,
  +sitePlugin?: ?GatsbyTypes$SitePlugin,
  +allSitePlugin: GatsbyTypes$SitePluginConnection,
|};

declare type GatsbyTypes$Query_fileArgs = {|
  sourceInstanceName?: ?GatsbyTypes$StringQueryOperatorInput,
  absolutePath?: ?GatsbyTypes$StringQueryOperatorInput,
  relativePath?: ?GatsbyTypes$StringQueryOperatorInput,
  extension?: ?GatsbyTypes$StringQueryOperatorInput,
  size?: ?GatsbyTypes$IntQueryOperatorInput,
  prettySize?: ?GatsbyTypes$StringQueryOperatorInput,
  modifiedTime?: ?GatsbyTypes$DateQueryOperatorInput,
  accessTime?: ?GatsbyTypes$DateQueryOperatorInput,
  changeTime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthTime?: ?GatsbyTypes$DateQueryOperatorInput,
  root?: ?GatsbyTypes$StringQueryOperatorInput,
  dir?: ?GatsbyTypes$StringQueryOperatorInput,
  base?: ?GatsbyTypes$StringQueryOperatorInput,
  ext?: ?GatsbyTypes$StringQueryOperatorInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  relativeDirectory?: ?GatsbyTypes$StringQueryOperatorInput,
  dev?: ?GatsbyTypes$IntQueryOperatorInput,
  mode?: ?GatsbyTypes$IntQueryOperatorInput,
  nlink?: ?GatsbyTypes$IntQueryOperatorInput,
  uid?: ?GatsbyTypes$IntQueryOperatorInput,
  gid?: ?GatsbyTypes$IntQueryOperatorInput,
  rdev?: ?GatsbyTypes$IntQueryOperatorInput,
  ino?: ?GatsbyTypes$FloatQueryOperatorInput,
  atimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  mtimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  ctimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  atime?: ?GatsbyTypes$DateQueryOperatorInput,
  mtime?: ?GatsbyTypes$DateQueryOperatorInput,
  ctime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthtime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthtimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  blksize?: ?GatsbyTypes$IntQueryOperatorInput,
  blocks?: ?GatsbyTypes$IntQueryOperatorInput,
  publicURL?: ?GatsbyTypes$StringQueryOperatorInput,
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  childrenIconLinksJson?: ?GatsbyTypes$IconLinksJsonFilterListInput,
  childrenAboutMeCardsJson?: ?GatsbyTypes$AboutMeCardsJsonFilterListInput,
  childrenNavItemsJson?: ?GatsbyTypes$NavItemsJsonFilterListInput,
  childrenProjectsJson?: ?GatsbyTypes$ProjectsJsonFilterListInput,
|};

declare type GatsbyTypes$Query_allFileArgs = {|
  filter?: ?GatsbyTypes$FileFilterInput,
  sort?: ?GatsbyTypes$FileSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$Query_directoryArgs = {|
  sourceInstanceName?: ?GatsbyTypes$StringQueryOperatorInput,
  absolutePath?: ?GatsbyTypes$StringQueryOperatorInput,
  relativePath?: ?GatsbyTypes$StringQueryOperatorInput,
  extension?: ?GatsbyTypes$StringQueryOperatorInput,
  size?: ?GatsbyTypes$IntQueryOperatorInput,
  prettySize?: ?GatsbyTypes$StringQueryOperatorInput,
  modifiedTime?: ?GatsbyTypes$DateQueryOperatorInput,
  accessTime?: ?GatsbyTypes$DateQueryOperatorInput,
  changeTime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthTime?: ?GatsbyTypes$DateQueryOperatorInput,
  root?: ?GatsbyTypes$StringQueryOperatorInput,
  dir?: ?GatsbyTypes$StringQueryOperatorInput,
  base?: ?GatsbyTypes$StringQueryOperatorInput,
  ext?: ?GatsbyTypes$StringQueryOperatorInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  relativeDirectory?: ?GatsbyTypes$StringQueryOperatorInput,
  dev?: ?GatsbyTypes$IntQueryOperatorInput,
  mode?: ?GatsbyTypes$IntQueryOperatorInput,
  nlink?: ?GatsbyTypes$IntQueryOperatorInput,
  uid?: ?GatsbyTypes$IntQueryOperatorInput,
  gid?: ?GatsbyTypes$IntQueryOperatorInput,
  rdev?: ?GatsbyTypes$IntQueryOperatorInput,
  ino?: ?GatsbyTypes$FloatQueryOperatorInput,
  atimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  mtimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  ctimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  atime?: ?GatsbyTypes$DateQueryOperatorInput,
  mtime?: ?GatsbyTypes$DateQueryOperatorInput,
  ctime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthtime?: ?GatsbyTypes$DateQueryOperatorInput,
  birthtimeMs?: ?GatsbyTypes$FloatQueryOperatorInput,
  blksize?: ?GatsbyTypes$IntQueryOperatorInput,
  blocks?: ?GatsbyTypes$IntQueryOperatorInput,
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
|};

declare type GatsbyTypes$Query_allDirectoryArgs = {|
  filter?: ?GatsbyTypes$DirectoryFilterInput,
  sort?: ?GatsbyTypes$DirectorySortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$Query_sitePageArgs = {|
  path?: ?GatsbyTypes$StringQueryOperatorInput,
  component?: ?GatsbyTypes$StringQueryOperatorInput,
  internalComponentName?: ?GatsbyTypes$StringQueryOperatorInput,
  componentChunkName?: ?GatsbyTypes$StringQueryOperatorInput,
  matchPath?: ?GatsbyTypes$StringQueryOperatorInput,
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  isCreatedByStatefulCreatePages?: ?GatsbyTypes$BooleanQueryOperatorInput,
  pluginCreator?: ?GatsbyTypes$SitePluginFilterInput,
  pluginCreatorId?: ?GatsbyTypes$StringQueryOperatorInput,
  componentPath?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$Query_allSitePageArgs = {|
  filter?: ?GatsbyTypes$SitePageFilterInput,
  sort?: ?GatsbyTypes$SitePageSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$Query_siteArgs = {|
  buildTime?: ?GatsbyTypes$DateQueryOperatorInput,
  siteMetadata?: ?GatsbyTypes$SiteSiteMetadataFilterInput,
  port?: ?GatsbyTypes$IntQueryOperatorInput,
  host?: ?GatsbyTypes$StringQueryOperatorInput,
  polyfill?: ?GatsbyTypes$BooleanQueryOperatorInput,
  pathPrefix?: ?GatsbyTypes$StringQueryOperatorInput,
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
|};

declare type GatsbyTypes$Query_allSiteArgs = {|
  filter?: ?GatsbyTypes$SiteFilterInput,
  sort?: ?GatsbyTypes$SiteSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$Query_projectsJsonArgs = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  title?: ?GatsbyTypes$StringQueryOperatorInput,
  tags?: ?GatsbyTypes$StringQueryOperatorInput,
  links?: ?GatsbyTypes$ProjectsJsonLinksFilterListInput,
|};

declare type GatsbyTypes$Query_allProjectsJsonArgs = {|
  filter?: ?GatsbyTypes$ProjectsJsonFilterInput,
  sort?: ?GatsbyTypes$ProjectsJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$Query_navItemsJsonArgs = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  title?: ?GatsbyTypes$StringQueryOperatorInput,
  path?: ?GatsbyTypes$StringQueryOperatorInput,
  link?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$Query_allNavItemsJsonArgs = {|
  filter?: ?GatsbyTypes$NavItemsJsonFilterInput,
  sort?: ?GatsbyTypes$NavItemsJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$Query_iconLinksJsonArgs = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  icon?: ?GatsbyTypes$StringQueryOperatorInput,
  url?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$Query_allIconLinksJsonArgs = {|
  filter?: ?GatsbyTypes$IconLinksJsonFilterInput,
  sort?: ?GatsbyTypes$IconLinksJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$Query_aboutMeCardsJsonArgs = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  title?: ?GatsbyTypes$StringQueryOperatorInput,
  text?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$Query_allAboutMeCardsJsonArgs = {|
  filter?: ?GatsbyTypes$AboutMeCardsJsonFilterInput,
  sort?: ?GatsbyTypes$AboutMeCardsJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$Query_siteBuildMetadataArgs = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  buildTime?: ?GatsbyTypes$DateQueryOperatorInput,
|};

declare type GatsbyTypes$Query_allSiteBuildMetadataArgs = {|
  filter?: ?GatsbyTypes$SiteBuildMetadataFilterInput,
  sort?: ?GatsbyTypes$SiteBuildMetadataSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$Query_sitePluginArgs = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  resolve?: ?GatsbyTypes$StringQueryOperatorInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  version?: ?GatsbyTypes$StringQueryOperatorInput,
  pluginOptions?: ?GatsbyTypes$SitePluginPluginOptionsFilterInput,
  nodeAPIs?: ?GatsbyTypes$StringQueryOperatorInput,
  ssrAPIs?: ?GatsbyTypes$StringQueryOperatorInput,
  pluginFilepath?: ?GatsbyTypes$StringQueryOperatorInput,
  packageJson?: ?GatsbyTypes$SitePluginPackageJsonFilterInput,
|};

declare type GatsbyTypes$Query_allSitePluginArgs = {|
  filter?: ?GatsbyTypes$SitePluginFilterInput,
  sort?: ?GatsbyTypes$SitePluginSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

declare type GatsbyTypes$Site = {|
  ...GatsbyTypes$Node,
  ...{|
    +buildTime?: ?$ElementType<Scalars, 'Date'>,
    +siteMetadata?: ?GatsbyTypes$SiteSiteMetadata,
    +port?: ?$ElementType<Scalars, 'Int'>,
    +host?: ?$ElementType<Scalars, 'String'>,
    +polyfill?: ?$ElementType<Scalars, 'Boolean'>,
    +pathPrefix?: ?$ElementType<Scalars, 'String'>,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?GatsbyTypes$Node,
    +children: Array<GatsbyTypes$Node>,
    +internal: GatsbyTypes$Internal,
  |},
|};

declare type GatsbyTypes$Site_buildTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$SiteBuildMetadata = {|
  ...GatsbyTypes$Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?GatsbyTypes$Node,
    +children: Array<GatsbyTypes$Node>,
    +internal: GatsbyTypes$Internal,
    +buildTime?: ?$ElementType<Scalars, 'Date'>,
  |},
|};

declare type GatsbyTypes$SiteBuildMetadata_buildTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$SiteBuildMetadataConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$SiteBuildMetadataEdge>,
  +nodes: Array<GatsbyTypes$SiteBuildMetadata>,
  +pageInfo: GatsbyTypes$PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<GatsbyTypes$SiteBuildMetadataGroupConnection>,
|};

declare type GatsbyTypes$SiteBuildMetadataConnection_distinctArgs = {|
  field: GatsbyTypes$SiteBuildMetadataFieldsEnum,
|};

declare type GatsbyTypes$SiteBuildMetadataConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: GatsbyTypes$SiteBuildMetadataFieldsEnum,
|};

declare type GatsbyTypes$SiteBuildMetadataEdge = {|
  +next?: ?GatsbyTypes$SiteBuildMetadata,
  +node: GatsbyTypes$SiteBuildMetadata,
  +previous?: ?GatsbyTypes$SiteBuildMetadata,
|};

export const GatsbyTypes$SiteBuildMetadataFieldsEnumValues = Object.freeze({
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  buildTime: 'buildTime',
});

declare type GatsbyTypes$SiteBuildMetadataFieldsEnum = $Values<typeof GatsbyTypes$SiteBuildMetadataFieldsEnumValues>;

declare type GatsbyTypes$SiteBuildMetadataFilterInput = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  buildTime?: ?GatsbyTypes$DateQueryOperatorInput,
|};

declare type GatsbyTypes$SiteBuildMetadataGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$SiteBuildMetadataEdge>,
  +nodes: Array<GatsbyTypes$SiteBuildMetadata>,
  +pageInfo: GatsbyTypes$PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$SiteBuildMetadataSortInput = {|
  fields?: ?Array<?SiteBuildMetadataFieldsEnum>,
  order?: ?Array<?GatsbyTypes$SortOrderEnum>,
|};

declare type GatsbyTypes$SiteConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$SiteEdge>,
  +nodes: Array<GatsbyTypes$Site>,
  +pageInfo: GatsbyTypes$PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<GatsbyTypes$SiteGroupConnection>,
|};

declare type GatsbyTypes$SiteConnection_distinctArgs = {|
  field: GatsbyTypes$SiteFieldsEnum,
|};

declare type GatsbyTypes$SiteConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: GatsbyTypes$SiteFieldsEnum,
|};

declare type GatsbyTypes$SiteEdge = {|
  +next?: ?GatsbyTypes$Site,
  +node: GatsbyTypes$Site,
  +previous?: ?GatsbyTypes$Site,
|};

export const GatsbyTypes$SiteFieldsEnumValues = Object.freeze({
  buildTime: 'buildTime',
  siteMetadata___title: 'siteMetadata.title',
  siteMetadata___author: 'siteMetadata.author',
  siteMetadata___description: 'siteMetadata.description',
  siteMetadata___url: 'siteMetadata.url',
  siteMetadata___image: 'siteMetadata.image',
  siteMetadata___siteUrl: 'siteMetadata.siteUrl',
  port: 'port',
  host: 'host',
  polyfill: 'polyfill',
  pathPrefix: 'pathPrefix',
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
});

declare type GatsbyTypes$SiteFieldsEnum = $Values<typeof GatsbyTypes$SiteFieldsEnumValues>;

declare type GatsbyTypes$SiteFilterInput = {|
  buildTime?: ?GatsbyTypes$DateQueryOperatorInput,
  siteMetadata?: ?GatsbyTypes$SiteSiteMetadataFilterInput,
  port?: ?GatsbyTypes$IntQueryOperatorInput,
  host?: ?GatsbyTypes$StringQueryOperatorInput,
  polyfill?: ?GatsbyTypes$BooleanQueryOperatorInput,
  pathPrefix?: ?GatsbyTypes$StringQueryOperatorInput,
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
|};

declare type GatsbyTypes$SiteGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$SiteEdge>,
  +nodes: Array<GatsbyTypes$Site>,
  +pageInfo: GatsbyTypes$PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$SitePage = {|
  ...GatsbyTypes$Node,
  ...{|
    +path: $ElementType<Scalars, 'String'>,
    +component: $ElementType<Scalars, 'String'>,
    +internalComponentName: $ElementType<Scalars, 'String'>,
    +componentChunkName: $ElementType<Scalars, 'String'>,
    +matchPath?: ?$ElementType<Scalars, 'String'>,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?GatsbyTypes$Node,
    +children: Array<GatsbyTypes$Node>,
    +internal: GatsbyTypes$Internal,
    +isCreatedByStatefulCreatePages?: ?$ElementType<Scalars, 'Boolean'>,
    +pluginCreator?: ?GatsbyTypes$SitePlugin,
    +pluginCreatorId?: ?$ElementType<Scalars, 'String'>,
    +componentPath?: ?$ElementType<Scalars, 'String'>,
  |},
|};

declare type GatsbyTypes$SitePageConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$SitePageEdge>,
  +nodes: Array<GatsbyTypes$SitePage>,
  +pageInfo: GatsbyTypes$PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<GatsbyTypes$SitePageGroupConnection>,
|};

declare type GatsbyTypes$SitePageConnection_distinctArgs = {|
  field: GatsbyTypes$SitePageFieldsEnum,
|};

declare type GatsbyTypes$SitePageConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: GatsbyTypes$SitePageFieldsEnum,
|};

declare type GatsbyTypes$SitePageEdge = {|
  +next?: ?GatsbyTypes$SitePage,
  +node: GatsbyTypes$SitePage,
  +previous?: ?GatsbyTypes$SitePage,
|};

export const GatsbyTypes$SitePageFieldsEnumValues = Object.freeze({
  path: 'path',
  component: 'component',
  internalComponentName: 'internalComponentName',
  componentChunkName: 'componentChunkName',
  matchPath: 'matchPath',
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  isCreatedByStatefulCreatePages: 'isCreatedByStatefulCreatePages',
  pluginCreator___id: 'pluginCreator.id',
  pluginCreator___parent___id: 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id: 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children: 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children: 'pluginCreator.parent.children',
  pluginCreator___parent___children___id: 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children: 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content: 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest: 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description: 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners: 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType: 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType: 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner: 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type: 'pluginCreator.parent.internal.type',
  pluginCreator___children: 'pluginCreator.children',
  pluginCreator___children___id: 'pluginCreator.children.id',
  pluginCreator___children___parent___id: 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children: 'pluginCreator.children.parent.children',
  pluginCreator___children___children: 'pluginCreator.children.children',
  pluginCreator___children___children___id: 'pluginCreator.children.children.id',
  pluginCreator___children___children___children: 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content: 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest: 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description: 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners: 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType: 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType: 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner: 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type: 'pluginCreator.children.internal.type',
  pluginCreator___internal___content: 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest: 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description: 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners: 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType: 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType: 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner: 'pluginCreator.internal.owner',
  pluginCreator___internal___type: 'pluginCreator.internal.type',
  pluginCreator___resolve: 'pluginCreator.resolve',
  pluginCreator___name: 'pluginCreator.name',
  pluginCreator___version: 'pluginCreator.version',
  pluginCreator___pluginOptions___src: 'pluginCreator.pluginOptions.src',
  pluginCreator___pluginOptions___pages: 'pluginCreator.pluginOptions.pages',
  pluginCreator___pluginOptions___images: 'pluginCreator.pluginOptions.images',
  pluginCreator___pluginOptions___components: 'pluginCreator.pluginOptions.components',
  pluginCreator___pluginOptions___types: 'pluginCreator.pluginOptions.types',
  pluginCreator___pluginOptions___path: 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___name: 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___language: 'pluginCreator.pluginOptions.language',
  pluginCreator___pluginOptions___outputPath: 'pluginCreator.pluginOptions.outputPath',
  pluginCreator___pluginOptions___pathCheck: 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___nodeAPIs: 'pluginCreator.nodeAPIs',
  pluginCreator___ssrAPIs: 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath: 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name: 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description: 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version: 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main: 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license: 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies: 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name: 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version: 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies: 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name: 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version: 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies: 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name: 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version: 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords: 'pluginCreator.packageJson.keywords',
  pluginCreatorId: 'pluginCreatorId',
  componentPath: 'componentPath',
});

declare type GatsbyTypes$SitePageFieldsEnum = $Values<typeof GatsbyTypes$SitePageFieldsEnumValues>;

declare type GatsbyTypes$SitePageFilterInput = {|
  path?: ?GatsbyTypes$StringQueryOperatorInput,
  component?: ?GatsbyTypes$StringQueryOperatorInput,
  internalComponentName?: ?GatsbyTypes$StringQueryOperatorInput,
  componentChunkName?: ?GatsbyTypes$StringQueryOperatorInput,
  matchPath?: ?GatsbyTypes$StringQueryOperatorInput,
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  isCreatedByStatefulCreatePages?: ?GatsbyTypes$BooleanQueryOperatorInput,
  pluginCreator?: ?GatsbyTypes$SitePluginFilterInput,
  pluginCreatorId?: ?GatsbyTypes$StringQueryOperatorInput,
  componentPath?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$SitePageGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$SitePageEdge>,
  +nodes: Array<GatsbyTypes$SitePage>,
  +pageInfo: GatsbyTypes$PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$SitePageSortInput = {|
  fields?: ?Array<?SitePageFieldsEnum>,
  order?: ?Array<?GatsbyTypes$SortOrderEnum>,
|};

declare type GatsbyTypes$SitePlugin = {|
  ...GatsbyTypes$Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?GatsbyTypes$Node,
    +children: Array<GatsbyTypes$Node>,
    +internal: GatsbyTypes$Internal,
    +resolve?: ?$ElementType<Scalars, 'String'>,
    +name?: ?$ElementType<Scalars, 'String'>,
    +version?: ?$ElementType<Scalars, 'String'>,
    +pluginOptions?: ?GatsbyTypes$SitePluginPluginOptions,
    +nodeAPIs?: ?Array<?$ElementType<Scalars, 'String'>>,
    +ssrAPIs?: ?Array<?$ElementType<Scalars, 'String'>>,
    +pluginFilepath?: ?$ElementType<Scalars, 'String'>,
    +packageJson?: ?GatsbyTypes$SitePluginPackageJson,
  |},
|};

declare type GatsbyTypes$SitePluginConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$SitePluginEdge>,
  +nodes: Array<GatsbyTypes$SitePlugin>,
  +pageInfo: GatsbyTypes$PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<GatsbyTypes$SitePluginGroupConnection>,
|};

declare type GatsbyTypes$SitePluginConnection_distinctArgs = {|
  field: GatsbyTypes$SitePluginFieldsEnum,
|};

declare type GatsbyTypes$SitePluginConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: GatsbyTypes$SitePluginFieldsEnum,
|};

declare type GatsbyTypes$SitePluginEdge = {|
  +next?: ?GatsbyTypes$SitePlugin,
  +node: GatsbyTypes$SitePlugin,
  +previous?: ?GatsbyTypes$SitePlugin,
|};

export const GatsbyTypes$SitePluginFieldsEnumValues = Object.freeze({
  id: 'id',
  parent___id: 'parent.id',
  parent___parent___id: 'parent.parent.id',
  parent___parent___parent___id: 'parent.parent.parent.id',
  parent___parent___parent___children: 'parent.parent.parent.children',
  parent___parent___children: 'parent.parent.children',
  parent___parent___children___id: 'parent.parent.children.id',
  parent___parent___children___children: 'parent.parent.children.children',
  parent___parent___internal___content: 'parent.parent.internal.content',
  parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest',
  parent___parent___internal___description: 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType: 'parent.parent.internal.mediaType',
  parent___parent___internal___owner: 'parent.parent.internal.owner',
  parent___parent___internal___type: 'parent.parent.internal.type',
  parent___children: 'parent.children',
  parent___children___id: 'parent.children.id',
  parent___children___parent___id: 'parent.children.parent.id',
  parent___children___parent___children: 'parent.children.parent.children',
  parent___children___children: 'parent.children.children',
  parent___children___children___id: 'parent.children.children.id',
  parent___children___children___children: 'parent.children.children.children',
  parent___children___internal___content: 'parent.children.internal.content',
  parent___children___internal___contentDigest: 'parent.children.internal.contentDigest',
  parent___children___internal___description: 'parent.children.internal.description',
  parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType: 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType: 'parent.children.internal.mediaType',
  parent___children___internal___owner: 'parent.children.internal.owner',
  parent___children___internal___type: 'parent.children.internal.type',
  parent___internal___content: 'parent.internal.content',
  parent___internal___contentDigest: 'parent.internal.contentDigest',
  parent___internal___description: 'parent.internal.description',
  parent___internal___fieldOwners: 'parent.internal.fieldOwners',
  parent___internal___ignoreType: 'parent.internal.ignoreType',
  parent___internal___mediaType: 'parent.internal.mediaType',
  parent___internal___owner: 'parent.internal.owner',
  parent___internal___type: 'parent.internal.type',
  children: 'children',
  children___id: 'children.id',
  children___parent___id: 'children.parent.id',
  children___parent___parent___id: 'children.parent.parent.id',
  children___parent___parent___children: 'children.parent.parent.children',
  children___parent___children: 'children.parent.children',
  children___parent___children___id: 'children.parent.children.id',
  children___parent___children___children: 'children.parent.children.children',
  children___parent___internal___content: 'children.parent.internal.content',
  children___parent___internal___contentDigest: 'children.parent.internal.contentDigest',
  children___parent___internal___description: 'children.parent.internal.description',
  children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType: 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType: 'children.parent.internal.mediaType',
  children___parent___internal___owner: 'children.parent.internal.owner',
  children___parent___internal___type: 'children.parent.internal.type',
  children___children: 'children.children',
  children___children___id: 'children.children.id',
  children___children___parent___id: 'children.children.parent.id',
  children___children___parent___children: 'children.children.parent.children',
  children___children___children: 'children.children.children',
  children___children___children___id: 'children.children.children.id',
  children___children___children___children: 'children.children.children.children',
  children___children___internal___content: 'children.children.internal.content',
  children___children___internal___contentDigest: 'children.children.internal.contentDigest',
  children___children___internal___description: 'children.children.internal.description',
  children___children___internal___fieldOwners: 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType: 'children.children.internal.ignoreType',
  children___children___internal___mediaType: 'children.children.internal.mediaType',
  children___children___internal___owner: 'children.children.internal.owner',
  children___children___internal___type: 'children.children.internal.type',
  children___internal___content: 'children.internal.content',
  children___internal___contentDigest: 'children.internal.contentDigest',
  children___internal___description: 'children.internal.description',
  children___internal___fieldOwners: 'children.internal.fieldOwners',
  children___internal___ignoreType: 'children.internal.ignoreType',
  children___internal___mediaType: 'children.internal.mediaType',
  children___internal___owner: 'children.internal.owner',
  children___internal___type: 'children.internal.type',
  internal___content: 'internal.content',
  internal___contentDigest: 'internal.contentDigest',
  internal___description: 'internal.description',
  internal___fieldOwners: 'internal.fieldOwners',
  internal___ignoreType: 'internal.ignoreType',
  internal___mediaType: 'internal.mediaType',
  internal___owner: 'internal.owner',
  internal___type: 'internal.type',
  resolve: 'resolve',
  name: 'name',
  version: 'version',
  pluginOptions___src: 'pluginOptions.src',
  pluginOptions___pages: 'pluginOptions.pages',
  pluginOptions___images: 'pluginOptions.images',
  pluginOptions___components: 'pluginOptions.components',
  pluginOptions___types: 'pluginOptions.types',
  pluginOptions___path: 'pluginOptions.path',
  pluginOptions___name: 'pluginOptions.name',
  pluginOptions___language: 'pluginOptions.language',
  pluginOptions___outputPath: 'pluginOptions.outputPath',
  pluginOptions___pathCheck: 'pluginOptions.pathCheck',
  nodeAPIs: 'nodeAPIs',
  ssrAPIs: 'ssrAPIs',
  pluginFilepath: 'pluginFilepath',
  packageJson___name: 'packageJson.name',
  packageJson___description: 'packageJson.description',
  packageJson___version: 'packageJson.version',
  packageJson___main: 'packageJson.main',
  packageJson___license: 'packageJson.license',
  packageJson___dependencies: 'packageJson.dependencies',
  packageJson___dependencies___name: 'packageJson.dependencies.name',
  packageJson___dependencies___version: 'packageJson.dependencies.version',
  packageJson___devDependencies: 'packageJson.devDependencies',
  packageJson___devDependencies___name: 'packageJson.devDependencies.name',
  packageJson___devDependencies___version: 'packageJson.devDependencies.version',
  packageJson___peerDependencies: 'packageJson.peerDependencies',
  packageJson___peerDependencies___name: 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version: 'packageJson.peerDependencies.version',
  packageJson___keywords: 'packageJson.keywords',
});

declare type GatsbyTypes$SitePluginFieldsEnum = $Values<typeof GatsbyTypes$SitePluginFieldsEnumValues>;

declare type GatsbyTypes$SitePluginFilterInput = {|
  id?: ?GatsbyTypes$StringQueryOperatorInput,
  parent?: ?GatsbyTypes$NodeFilterInput,
  children?: ?GatsbyTypes$NodeFilterListInput,
  internal?: ?GatsbyTypes$InternalFilterInput,
  resolve?: ?GatsbyTypes$StringQueryOperatorInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  version?: ?GatsbyTypes$StringQueryOperatorInput,
  pluginOptions?: ?GatsbyTypes$SitePluginPluginOptionsFilterInput,
  nodeAPIs?: ?GatsbyTypes$StringQueryOperatorInput,
  ssrAPIs?: ?GatsbyTypes$StringQueryOperatorInput,
  pluginFilepath?: ?GatsbyTypes$StringQueryOperatorInput,
  packageJson?: ?GatsbyTypes$SitePluginPackageJsonFilterInput,
|};

declare type GatsbyTypes$SitePluginGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<GatsbyTypes$SitePluginEdge>,
  +nodes: Array<GatsbyTypes$SitePlugin>,
  +pageInfo: GatsbyTypes$PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$SitePluginPackageJson = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
  +main?: ?$ElementType<Scalars, 'String'>,
  +license?: ?$ElementType<Scalars, 'String'>,
  +dependencies?: ?Array<?GatsbyTypes$SitePluginPackageJsonDependencies>,
  +devDependencies?: ?Array<?GatsbyTypes$SitePluginPackageJsonDevDependencies>,
  +peerDependencies?: ?Array<?GatsbyTypes$SitePluginPackageJsonPeerDependencies>,
  +keywords?: ?Array<?$ElementType<Scalars, 'String'>>,
|};

declare type GatsbyTypes$SitePluginPackageJsonDependencies = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$SitePluginPackageJsonDependenciesFilterInput = {|
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  version?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$SitePluginPackageJsonDependenciesFilterListInput = {|
  elemMatch?: ?GatsbyTypes$SitePluginPackageJsonDependenciesFilterInput,
|};

declare type GatsbyTypes$SitePluginPackageJsonDevDependencies = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$SitePluginPackageJsonDevDependenciesFilterInput = {|
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  version?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$SitePluginPackageJsonDevDependenciesFilterListInput = {|
  elemMatch?: ?GatsbyTypes$SitePluginPackageJsonDevDependenciesFilterInput,
|};

declare type GatsbyTypes$SitePluginPackageJsonFilterInput = {|
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  description?: ?GatsbyTypes$StringQueryOperatorInput,
  version?: ?GatsbyTypes$StringQueryOperatorInput,
  main?: ?GatsbyTypes$StringQueryOperatorInput,
  license?: ?GatsbyTypes$StringQueryOperatorInput,
  dependencies?: ?GatsbyTypes$SitePluginPackageJsonDependenciesFilterListInput,
  devDependencies?: ?GatsbyTypes$SitePluginPackageJsonDevDependenciesFilterListInput,
  peerDependencies?: ?GatsbyTypes$SitePluginPackageJsonPeerDependenciesFilterListInput,
  keywords?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$SitePluginPackageJsonPeerDependencies = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$SitePluginPackageJsonPeerDependenciesFilterInput = {|
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  version?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$SitePluginPackageJsonPeerDependenciesFilterListInput = {|
  elemMatch?: ?GatsbyTypes$SitePluginPackageJsonPeerDependenciesFilterInput,
|};

declare type GatsbyTypes$SitePluginPluginOptions = {|
  +src?: ?$ElementType<Scalars, 'String'>,
  +pages?: ?$ElementType<Scalars, 'String'>,
  +images?: ?$ElementType<Scalars, 'String'>,
  +components?: ?$ElementType<Scalars, 'String'>,
  +types?: ?$ElementType<Scalars, 'String'>,
  +path?: ?$ElementType<Scalars, 'String'>,
  +name?: ?$ElementType<Scalars, 'String'>,
  +language?: ?$ElementType<Scalars, 'String'>,
  +outputPath?: ?$ElementType<Scalars, 'String'>,
  +pathCheck?: ?$ElementType<Scalars, 'Boolean'>,
|};

declare type GatsbyTypes$SitePluginPluginOptionsFilterInput = {|
  src?: ?GatsbyTypes$StringQueryOperatorInput,
  pages?: ?GatsbyTypes$StringQueryOperatorInput,
  images?: ?GatsbyTypes$StringQueryOperatorInput,
  components?: ?GatsbyTypes$StringQueryOperatorInput,
  types?: ?GatsbyTypes$StringQueryOperatorInput,
  path?: ?GatsbyTypes$StringQueryOperatorInput,
  name?: ?GatsbyTypes$StringQueryOperatorInput,
  language?: ?GatsbyTypes$StringQueryOperatorInput,
  outputPath?: ?GatsbyTypes$StringQueryOperatorInput,
  pathCheck?: ?GatsbyTypes$BooleanQueryOperatorInput,
|};

declare type GatsbyTypes$SitePluginSortInput = {|
  fields?: ?Array<?SitePluginFieldsEnum>,
  order?: ?Array<?GatsbyTypes$SortOrderEnum>,
|};

declare type GatsbyTypes$SiteSiteMetadata = {|
  +title?: ?$ElementType<Scalars, 'String'>,
  +author?: ?$ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +url?: ?$ElementType<Scalars, 'String'>,
  +image?: ?$ElementType<Scalars, 'String'>,
  +siteUrl?: ?$ElementType<Scalars, 'String'>,
|};

declare type GatsbyTypes$SiteSiteMetadataFilterInput = {|
  title?: ?GatsbyTypes$StringQueryOperatorInput,
  author?: ?GatsbyTypes$StringQueryOperatorInput,
  description?: ?GatsbyTypes$StringQueryOperatorInput,
  url?: ?GatsbyTypes$StringQueryOperatorInput,
  image?: ?GatsbyTypes$StringQueryOperatorInput,
  siteUrl?: ?GatsbyTypes$StringQueryOperatorInput,
|};

declare type GatsbyTypes$SiteSortInput = {|
  fields?: ?Array<?SiteFieldsEnum>,
  order?: ?Array<?GatsbyTypes$SortOrderEnum>,
|};

export const GatsbyTypes$SortOrderEnumValues = Object.freeze({
  ASC: 'ASC',
  DESC: 'DESC',
});

declare type GatsbyTypes$SortOrderEnum = $Values<typeof GatsbyTypes$SortOrderEnumValues>;

declare type GatsbyTypes$StringQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'String'>,
  ne?: ?$ElementType<Scalars, 'String'>,
  in?: ?Array<?$ElementType<Scalars, 'String'>>,
  nin?: ?Array<?$ElementType<Scalars, 'String'>>,
  regex?: ?$ElementType<Scalars, 'String'>,
  glob?: ?$ElementType<Scalars, 'String'>,
|};

type $Pick<Origin: Object, Keys: Object> = $ObjMapi<Keys, <Key>(k: Key) => $ElementType<Origin, Key>>;

declare type GatsbyTypes$PagesQueryQueryVariables = {};

declare type GatsbyTypes$PagesQueryQuery = {|
  +allSitePage: {| +nodes: Array<$Pick<GatsbyTypes$SitePage, {| +path: * |}>> |},
|};

declare type GatsbyTypes$IconLinkFragment = $Pick<GatsbyTypes$IconLinksJson, {| +name?: *, +url?: *, +icon?: * |}>;

declare type GatsbyTypes$AboutMeCardFragment = $Pick<
  GatsbyTypes$AboutMeCardsJson,
  {| +name?: *, +text?: *, +title?: * |},
>;

declare type GatsbyTypes$IndexPageQueryVariables = {};

declare type GatsbyTypes$IndexPageQuery = {|
  +allIconLinksJson: {| +edges: Array<{| +node: GatsbyTypes$IconLinkFragment |}> |},
  +allAboutMeCardsJson: {| +edges: Array<{| +node: GatsbyTypes$AboutMeCardFragment |}> |},
|};

declare type GatsbyTypes$ProjectFragment = {
  ...$Pick<GatsbyTypes$ProjectsJson, {| +name?: *, +title?: *, +tags?: * |}>,
  ...{| +links?: ?Array<?$Pick<GatsbyTypes$ProjectsJsonLinks, {| +icon?: *, +link?: * |}>> |},
};

declare type GatsbyTypes$ProjectPageQueryVariables = {};

declare type GatsbyTypes$ProjectPageQuery = {|
  +allProjectsJson: {| +edges: Array<{| +node: GatsbyTypes$ProjectFragment |}> |},
|};

declare type GatsbyTypes$SEOQueryVariables = {};

declare type GatsbyTypes$SEOQuery = {|
  +site?: ?{|
    +siteMetadata?: ?{
      ...$Pick<GatsbyTypes$SiteSiteMetadata, {| +title?: *, +url?: *, +image?: * |}>,
      ...{| +description: $ElementType<GatsbyTypes$SiteSiteMetadata, 'description'> |},
    },
  |},
|};

declare type GatsbyTypes$NavbarQueryQueryVariables = {};

declare type GatsbyTypes$NavbarQueryQuery = {|
  +allNavItemsJson: {| +nodes: Array<$Pick<GatsbyTypes$NavItemsJson, {| +path?: *, +link?: *, +title?: * |}>> |},
|};
