// eslint-disable

/* @flow */

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {|
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  JSON: any,
|};

export type AboutMeCardsJson = {|
  ...Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?Node,
    +children: Array<Node>,
    +internal: Internal,
    +name?: ?$ElementType<Scalars, 'String'>,
    +title?: ?$ElementType<Scalars, 'String'>,
    +text?: ?$ElementType<Scalars, 'String'>,
  |},
|};

export type AboutMeCardsJsonConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<AboutMeCardsJsonEdge>,
  +nodes: Array<AboutMeCardsJson>,
  +pageInfo: PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<AboutMeCardsJsonGroupConnection>,
|};

export type AboutMeCardsJsonConnection_distinctArgs = {|
  field: AboutMeCardsJsonFieldsEnum,
|};

export type AboutMeCardsJsonConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: AboutMeCardsJsonFieldsEnum,
|};

export type AboutMeCardsJsonEdge = {|
  +next?: ?AboutMeCardsJson,
  +node: AboutMeCardsJson,
  +previous?: ?AboutMeCardsJson,
|};

export const AboutMeCardsJsonFieldsEnumValues = Object.freeze({
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

export type AboutMeCardsJsonFieldsEnum = $Values<typeof AboutMeCardsJsonFieldsEnumValues>;

export type AboutMeCardsJsonFilterInput = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  name?: ?StringQueryOperatorInput,
  title?: ?StringQueryOperatorInput,
  text?: ?StringQueryOperatorInput,
|};

export type AboutMeCardsJsonFilterListInput = {|
  elemMatch?: ?AboutMeCardsJsonFilterInput,
|};

export type AboutMeCardsJsonGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<AboutMeCardsJsonEdge>,
  +nodes: Array<AboutMeCardsJson>,
  +pageInfo: PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type AboutMeCardsJsonSortInput = {|
  fields?: ?Array<?AboutMeCardsJsonFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type BooleanQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Boolean'>,
  ne?: ?$ElementType<Scalars, 'Boolean'>,
  in?: ?Array<?$ElementType<Scalars, 'Boolean'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Boolean'>>,
|};

export type DateQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Date'>,
  ne?: ?$ElementType<Scalars, 'Date'>,
  gt?: ?$ElementType<Scalars, 'Date'>,
  gte?: ?$ElementType<Scalars, 'Date'>,
  lt?: ?$ElementType<Scalars, 'Date'>,
  lte?: ?$ElementType<Scalars, 'Date'>,
  in?: ?Array<?$ElementType<Scalars, 'Date'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Date'>>,
|};

export type Directory = {|
  ...Node,
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
    +parent?: ?Node,
    +children: Array<Node>,
    +internal: Internal,
  |},
|};

export type Directory_modifiedTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type Directory_accessTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type Directory_changeTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type Directory_birthTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type Directory_atimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type Directory_mtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type Directory_ctimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type DirectoryConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<DirectoryEdge>,
  +nodes: Array<Directory>,
  +pageInfo: PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<DirectoryGroupConnection>,
|};

export type DirectoryConnection_distinctArgs = {|
  field: DirectoryFieldsEnum,
|};

export type DirectoryConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: DirectoryFieldsEnum,
|};

export type DirectoryEdge = {|
  +next?: ?Directory,
  +node: Directory,
  +previous?: ?Directory,
|};

export const DirectoryFieldsEnumValues = Object.freeze({
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

export type DirectoryFieldsEnum = $Values<typeof DirectoryFieldsEnumValues>;

export type DirectoryFilterInput = {|
  sourceInstanceName?: ?StringQueryOperatorInput,
  absolutePath?: ?StringQueryOperatorInput,
  relativePath?: ?StringQueryOperatorInput,
  extension?: ?StringQueryOperatorInput,
  size?: ?IntQueryOperatorInput,
  prettySize?: ?StringQueryOperatorInput,
  modifiedTime?: ?DateQueryOperatorInput,
  accessTime?: ?DateQueryOperatorInput,
  changeTime?: ?DateQueryOperatorInput,
  birthTime?: ?DateQueryOperatorInput,
  root?: ?StringQueryOperatorInput,
  dir?: ?StringQueryOperatorInput,
  base?: ?StringQueryOperatorInput,
  ext?: ?StringQueryOperatorInput,
  name?: ?StringQueryOperatorInput,
  relativeDirectory?: ?StringQueryOperatorInput,
  dev?: ?IntQueryOperatorInput,
  mode?: ?IntQueryOperatorInput,
  nlink?: ?IntQueryOperatorInput,
  uid?: ?IntQueryOperatorInput,
  gid?: ?IntQueryOperatorInput,
  rdev?: ?IntQueryOperatorInput,
  ino?: ?FloatQueryOperatorInput,
  atimeMs?: ?FloatQueryOperatorInput,
  mtimeMs?: ?FloatQueryOperatorInput,
  ctimeMs?: ?FloatQueryOperatorInput,
  atime?: ?DateQueryOperatorInput,
  mtime?: ?DateQueryOperatorInput,
  ctime?: ?DateQueryOperatorInput,
  birthtime?: ?DateQueryOperatorInput,
  birthtimeMs?: ?FloatQueryOperatorInput,
  blksize?: ?IntQueryOperatorInput,
  blocks?: ?IntQueryOperatorInput,
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
|};

export type DirectoryGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<DirectoryEdge>,
  +nodes: Array<Directory>,
  +pageInfo: PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type DirectorySortInput = {|
  fields?: ?Array<?DirectoryFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type File = {|
  ...Node,
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
    +parent?: ?Node,
    +children: Array<Node>,
    +internal: Internal,
    +childrenIconLinksJson?: ?Array<?IconLinksJson>,
    +childrenNavItemsJson?: ?Array<?NavItemsJson>,
    +childrenProjectsJson?: ?Array<?ProjectsJson>,
    +childrenAboutMeCardsJson?: ?Array<?AboutMeCardsJson>,
  |},
|};

export type File_modifiedTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type File_accessTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type File_changeTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type File_birthTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type File_atimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type File_mtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type File_ctimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type FileConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<FileEdge>,
  +nodes: Array<File>,
  +pageInfo: PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<FileGroupConnection>,
|};

export type FileConnection_distinctArgs = {|
  field: FileFieldsEnum,
|};

export type FileConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: FileFieldsEnum,
|};

export type FileEdge = {|
  +next?: ?File,
  +node: File,
  +previous?: ?File,
|};

export const FileFieldsEnumValues = Object.freeze({
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
});

export type FileFieldsEnum = $Values<typeof FileFieldsEnumValues>;

export type FileFilterInput = {|
  sourceInstanceName?: ?StringQueryOperatorInput,
  absolutePath?: ?StringQueryOperatorInput,
  relativePath?: ?StringQueryOperatorInput,
  extension?: ?StringQueryOperatorInput,
  size?: ?IntQueryOperatorInput,
  prettySize?: ?StringQueryOperatorInput,
  modifiedTime?: ?DateQueryOperatorInput,
  accessTime?: ?DateQueryOperatorInput,
  changeTime?: ?DateQueryOperatorInput,
  birthTime?: ?DateQueryOperatorInput,
  root?: ?StringQueryOperatorInput,
  dir?: ?StringQueryOperatorInput,
  base?: ?StringQueryOperatorInput,
  ext?: ?StringQueryOperatorInput,
  name?: ?StringQueryOperatorInput,
  relativeDirectory?: ?StringQueryOperatorInput,
  dev?: ?IntQueryOperatorInput,
  mode?: ?IntQueryOperatorInput,
  nlink?: ?IntQueryOperatorInput,
  uid?: ?IntQueryOperatorInput,
  gid?: ?IntQueryOperatorInput,
  rdev?: ?IntQueryOperatorInput,
  ino?: ?FloatQueryOperatorInput,
  atimeMs?: ?FloatQueryOperatorInput,
  mtimeMs?: ?FloatQueryOperatorInput,
  ctimeMs?: ?FloatQueryOperatorInput,
  atime?: ?DateQueryOperatorInput,
  mtime?: ?DateQueryOperatorInput,
  ctime?: ?DateQueryOperatorInput,
  birthtime?: ?DateQueryOperatorInput,
  birthtimeMs?: ?FloatQueryOperatorInput,
  blksize?: ?IntQueryOperatorInput,
  blocks?: ?IntQueryOperatorInput,
  publicURL?: ?StringQueryOperatorInput,
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  childrenIconLinksJson?: ?IconLinksJsonFilterListInput,
  childrenNavItemsJson?: ?NavItemsJsonFilterListInput,
  childrenProjectsJson?: ?ProjectsJsonFilterListInput,
  childrenAboutMeCardsJson?: ?AboutMeCardsJsonFilterListInput,
|};

export type FileGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<FileEdge>,
  +nodes: Array<File>,
  +pageInfo: PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type FileSortInput = {|
  fields?: ?Array<?FileFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type FloatQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Float'>,
  ne?: ?$ElementType<Scalars, 'Float'>,
  gt?: ?$ElementType<Scalars, 'Float'>,
  gte?: ?$ElementType<Scalars, 'Float'>,
  lt?: ?$ElementType<Scalars, 'Float'>,
  lte?: ?$ElementType<Scalars, 'Float'>,
  in?: ?Array<?$ElementType<Scalars, 'Float'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Float'>>,
|};

export type IconLinksJson = {|
  ...Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?Node,
    +children: Array<Node>,
    +internal: Internal,
    +name?: ?$ElementType<Scalars, 'String'>,
    +icon?: ?$ElementType<Scalars, 'String'>,
    +url?: ?$ElementType<Scalars, 'String'>,
  |},
|};

export type IconLinksJsonConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<IconLinksJsonEdge>,
  +nodes: Array<IconLinksJson>,
  +pageInfo: PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<IconLinksJsonGroupConnection>,
|};

export type IconLinksJsonConnection_distinctArgs = {|
  field: IconLinksJsonFieldsEnum,
|};

export type IconLinksJsonConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: IconLinksJsonFieldsEnum,
|};

export type IconLinksJsonEdge = {|
  +next?: ?IconLinksJson,
  +node: IconLinksJson,
  +previous?: ?IconLinksJson,
|};

export const IconLinksJsonFieldsEnumValues = Object.freeze({
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

export type IconLinksJsonFieldsEnum = $Values<typeof IconLinksJsonFieldsEnumValues>;

export type IconLinksJsonFilterInput = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  name?: ?StringQueryOperatorInput,
  icon?: ?StringQueryOperatorInput,
  url?: ?StringQueryOperatorInput,
|};

export type IconLinksJsonFilterListInput = {|
  elemMatch?: ?IconLinksJsonFilterInput,
|};

export type IconLinksJsonGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<IconLinksJsonEdge>,
  +nodes: Array<IconLinksJson>,
  +pageInfo: PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type IconLinksJsonSortInput = {|
  fields?: ?Array<?IconLinksJsonFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type Internal = {|
  +content?: ?$ElementType<Scalars, 'String'>,
  +contentDigest: $ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +fieldOwners?: ?Array<?$ElementType<Scalars, 'String'>>,
  +ignoreType?: ?$ElementType<Scalars, 'Boolean'>,
  +mediaType?: ?$ElementType<Scalars, 'String'>,
  +owner: $ElementType<Scalars, 'String'>,
  +type: $ElementType<Scalars, 'String'>,
|};

export type InternalFilterInput = {|
  content?: ?StringQueryOperatorInput,
  contentDigest?: ?StringQueryOperatorInput,
  description?: ?StringQueryOperatorInput,
  fieldOwners?: ?StringQueryOperatorInput,
  ignoreType?: ?BooleanQueryOperatorInput,
  mediaType?: ?StringQueryOperatorInput,
  owner?: ?StringQueryOperatorInput,
  type?: ?StringQueryOperatorInput,
|};

export type IntQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'Int'>,
  ne?: ?$ElementType<Scalars, 'Int'>,
  gt?: ?$ElementType<Scalars, 'Int'>,
  gte?: ?$ElementType<Scalars, 'Int'>,
  lt?: ?$ElementType<Scalars, 'Int'>,
  lte?: ?$ElementType<Scalars, 'Int'>,
  in?: ?Array<?$ElementType<Scalars, 'Int'>>,
  nin?: ?Array<?$ElementType<Scalars, 'Int'>>,
|};

export type NavItemsJson = {|
  ...Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?Node,
    +children: Array<Node>,
    +internal: Internal,
    +title?: ?$ElementType<Scalars, 'String'>,
    +path?: ?$ElementType<Scalars, 'String'>,
    +link?: ?$ElementType<Scalars, 'String'>,
  |},
|};

export type NavItemsJsonConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<NavItemsJsonEdge>,
  +nodes: Array<NavItemsJson>,
  +pageInfo: PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<NavItemsJsonGroupConnection>,
|};

export type NavItemsJsonConnection_distinctArgs = {|
  field: NavItemsJsonFieldsEnum,
|};

export type NavItemsJsonConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: NavItemsJsonFieldsEnum,
|};

export type NavItemsJsonEdge = {|
  +next?: ?NavItemsJson,
  +node: NavItemsJson,
  +previous?: ?NavItemsJson,
|};

export const NavItemsJsonFieldsEnumValues = Object.freeze({
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

export type NavItemsJsonFieldsEnum = $Values<typeof NavItemsJsonFieldsEnumValues>;

export type NavItemsJsonFilterInput = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  title?: ?StringQueryOperatorInput,
  path?: ?StringQueryOperatorInput,
  link?: ?StringQueryOperatorInput,
|};

export type NavItemsJsonFilterListInput = {|
  elemMatch?: ?NavItemsJsonFilterInput,
|};

export type NavItemsJsonGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<NavItemsJsonEdge>,
  +nodes: Array<NavItemsJson>,
  +pageInfo: PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type NavItemsJsonSortInput = {|
  fields?: ?Array<?NavItemsJsonFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

/** Node Interface */
export type Node = {|
  +id: $ElementType<Scalars, 'ID'>,
  +parent?: ?Node,
  +children: Array<Node>,
  +internal: Internal,
|};

export type NodeFilterInput = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
|};

export type NodeFilterListInput = {|
  elemMatch?: ?NodeFilterInput,
|};

export type PageInfo = {|
  +currentPage: $ElementType<Scalars, 'Int'>,
  +hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
  +hasNextPage: $ElementType<Scalars, 'Boolean'>,
  +itemCount: $ElementType<Scalars, 'Int'>,
  +pageCount: $ElementType<Scalars, 'Int'>,
  +perPage?: ?$ElementType<Scalars, 'Int'>,
|};

export type ProjectsJson = {|
  ...Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?Node,
    +children: Array<Node>,
    +internal: Internal,
    +name?: ?$ElementType<Scalars, 'String'>,
    +title?: ?$ElementType<Scalars, 'String'>,
    +tags?: ?Array<?$ElementType<Scalars, 'String'>>,
    +links?: ?Array<?ProjectsJsonLinks>,
  |},
|};

export type ProjectsJsonConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<ProjectsJsonEdge>,
  +nodes: Array<ProjectsJson>,
  +pageInfo: PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<ProjectsJsonGroupConnection>,
|};

export type ProjectsJsonConnection_distinctArgs = {|
  field: ProjectsJsonFieldsEnum,
|};

export type ProjectsJsonConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: ProjectsJsonFieldsEnum,
|};

export type ProjectsJsonEdge = {|
  +next?: ?ProjectsJson,
  +node: ProjectsJson,
  +previous?: ?ProjectsJson,
|};

export const ProjectsJsonFieldsEnumValues = Object.freeze({
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

export type ProjectsJsonFieldsEnum = $Values<typeof ProjectsJsonFieldsEnumValues>;

export type ProjectsJsonFilterInput = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  name?: ?StringQueryOperatorInput,
  title?: ?StringQueryOperatorInput,
  tags?: ?StringQueryOperatorInput,
  links?: ?ProjectsJsonLinksFilterListInput,
|};

export type ProjectsJsonFilterListInput = {|
  elemMatch?: ?ProjectsJsonFilterInput,
|};

export type ProjectsJsonGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<ProjectsJsonEdge>,
  +nodes: Array<ProjectsJson>,
  +pageInfo: PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type ProjectsJsonLinks = {|
  +icon?: ?$ElementType<Scalars, 'String'>,
  +link?: ?$ElementType<Scalars, 'String'>,
|};

export type ProjectsJsonLinksFilterInput = {|
  icon?: ?StringQueryOperatorInput,
  link?: ?StringQueryOperatorInput,
|};

export type ProjectsJsonLinksFilterListInput = {|
  elemMatch?: ?ProjectsJsonLinksFilterInput,
|};

export type ProjectsJsonSortInput = {|
  fields?: ?Array<?ProjectsJsonFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type Query = {|
  +file?: ?File,
  +allFile: FileConnection,
  +directory?: ?Directory,
  +allDirectory: DirectoryConnection,
  +sitePage?: ?SitePage,
  +allSitePage: SitePageConnection,
  +projectsJson?: ?ProjectsJson,
  +allProjectsJson: ProjectsJsonConnection,
  +aboutMeCardsJson?: ?AboutMeCardsJson,
  +allAboutMeCardsJson: AboutMeCardsJsonConnection,
  +navItemsJson?: ?NavItemsJson,
  +allNavItemsJson: NavItemsJsonConnection,
  +iconLinksJson?: ?IconLinksJson,
  +allIconLinksJson: IconLinksJsonConnection,
  +site?: ?Site,
  +allSite: SiteConnection,
  +sitePlugin?: ?SitePlugin,
  +allSitePlugin: SitePluginConnection,
|};

export type Query_fileArgs = {|
  sourceInstanceName?: ?StringQueryOperatorInput,
  absolutePath?: ?StringQueryOperatorInput,
  relativePath?: ?StringQueryOperatorInput,
  extension?: ?StringQueryOperatorInput,
  size?: ?IntQueryOperatorInput,
  prettySize?: ?StringQueryOperatorInput,
  modifiedTime?: ?DateQueryOperatorInput,
  accessTime?: ?DateQueryOperatorInput,
  changeTime?: ?DateQueryOperatorInput,
  birthTime?: ?DateQueryOperatorInput,
  root?: ?StringQueryOperatorInput,
  dir?: ?StringQueryOperatorInput,
  base?: ?StringQueryOperatorInput,
  ext?: ?StringQueryOperatorInput,
  name?: ?StringQueryOperatorInput,
  relativeDirectory?: ?StringQueryOperatorInput,
  dev?: ?IntQueryOperatorInput,
  mode?: ?IntQueryOperatorInput,
  nlink?: ?IntQueryOperatorInput,
  uid?: ?IntQueryOperatorInput,
  gid?: ?IntQueryOperatorInput,
  rdev?: ?IntQueryOperatorInput,
  ino?: ?FloatQueryOperatorInput,
  atimeMs?: ?FloatQueryOperatorInput,
  mtimeMs?: ?FloatQueryOperatorInput,
  ctimeMs?: ?FloatQueryOperatorInput,
  atime?: ?DateQueryOperatorInput,
  mtime?: ?DateQueryOperatorInput,
  ctime?: ?DateQueryOperatorInput,
  birthtime?: ?DateQueryOperatorInput,
  birthtimeMs?: ?FloatQueryOperatorInput,
  blksize?: ?IntQueryOperatorInput,
  blocks?: ?IntQueryOperatorInput,
  publicURL?: ?StringQueryOperatorInput,
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  childrenIconLinksJson?: ?IconLinksJsonFilterListInput,
  childrenNavItemsJson?: ?NavItemsJsonFilterListInput,
  childrenProjectsJson?: ?ProjectsJsonFilterListInput,
  childrenAboutMeCardsJson?: ?AboutMeCardsJsonFilterListInput,
|};

export type Query_allFileArgs = {|
  filter?: ?FileFilterInput,
  sort?: ?FileSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type Query_directoryArgs = {|
  sourceInstanceName?: ?StringQueryOperatorInput,
  absolutePath?: ?StringQueryOperatorInput,
  relativePath?: ?StringQueryOperatorInput,
  extension?: ?StringQueryOperatorInput,
  size?: ?IntQueryOperatorInput,
  prettySize?: ?StringQueryOperatorInput,
  modifiedTime?: ?DateQueryOperatorInput,
  accessTime?: ?DateQueryOperatorInput,
  changeTime?: ?DateQueryOperatorInput,
  birthTime?: ?DateQueryOperatorInput,
  root?: ?StringQueryOperatorInput,
  dir?: ?StringQueryOperatorInput,
  base?: ?StringQueryOperatorInput,
  ext?: ?StringQueryOperatorInput,
  name?: ?StringQueryOperatorInput,
  relativeDirectory?: ?StringQueryOperatorInput,
  dev?: ?IntQueryOperatorInput,
  mode?: ?IntQueryOperatorInput,
  nlink?: ?IntQueryOperatorInput,
  uid?: ?IntQueryOperatorInput,
  gid?: ?IntQueryOperatorInput,
  rdev?: ?IntQueryOperatorInput,
  ino?: ?FloatQueryOperatorInput,
  atimeMs?: ?FloatQueryOperatorInput,
  mtimeMs?: ?FloatQueryOperatorInput,
  ctimeMs?: ?FloatQueryOperatorInput,
  atime?: ?DateQueryOperatorInput,
  mtime?: ?DateQueryOperatorInput,
  ctime?: ?DateQueryOperatorInput,
  birthtime?: ?DateQueryOperatorInput,
  birthtimeMs?: ?FloatQueryOperatorInput,
  blksize?: ?IntQueryOperatorInput,
  blocks?: ?IntQueryOperatorInput,
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
|};

export type Query_allDirectoryArgs = {|
  filter?: ?DirectoryFilterInput,
  sort?: ?DirectorySortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type Query_sitePageArgs = {|
  path?: ?StringQueryOperatorInput,
  component?: ?StringQueryOperatorInput,
  internalComponentName?: ?StringQueryOperatorInput,
  componentChunkName?: ?StringQueryOperatorInput,
  matchPath?: ?StringQueryOperatorInput,
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  isCreatedByStatefulCreatePages?: ?BooleanQueryOperatorInput,
  pluginCreator?: ?SitePluginFilterInput,
  pluginCreatorId?: ?StringQueryOperatorInput,
  componentPath?: ?StringQueryOperatorInput,
|};

export type Query_allSitePageArgs = {|
  filter?: ?SitePageFilterInput,
  sort?: ?SitePageSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type Query_projectsJsonArgs = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  name?: ?StringQueryOperatorInput,
  title?: ?StringQueryOperatorInput,
  tags?: ?StringQueryOperatorInput,
  links?: ?ProjectsJsonLinksFilterListInput,
|};

export type Query_allProjectsJsonArgs = {|
  filter?: ?ProjectsJsonFilterInput,
  sort?: ?ProjectsJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type Query_aboutMeCardsJsonArgs = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  name?: ?StringQueryOperatorInput,
  title?: ?StringQueryOperatorInput,
  text?: ?StringQueryOperatorInput,
|};

export type Query_allAboutMeCardsJsonArgs = {|
  filter?: ?AboutMeCardsJsonFilterInput,
  sort?: ?AboutMeCardsJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type Query_navItemsJsonArgs = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  title?: ?StringQueryOperatorInput,
  path?: ?StringQueryOperatorInput,
  link?: ?StringQueryOperatorInput,
|};

export type Query_allNavItemsJsonArgs = {|
  filter?: ?NavItemsJsonFilterInput,
  sort?: ?NavItemsJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type Query_iconLinksJsonArgs = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  name?: ?StringQueryOperatorInput,
  icon?: ?StringQueryOperatorInput,
  url?: ?StringQueryOperatorInput,
|};

export type Query_allIconLinksJsonArgs = {|
  filter?: ?IconLinksJsonFilterInput,
  sort?: ?IconLinksJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type Query_siteArgs = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  siteMetadata?: ?SiteSiteMetadataFilterInput,
  port?: ?IntQueryOperatorInput,
  host?: ?StringQueryOperatorInput,
  polyfill?: ?BooleanQueryOperatorInput,
  pathPrefix?: ?StringQueryOperatorInput,
  buildTime?: ?DateQueryOperatorInput,
|};

export type Query_allSiteArgs = {|
  filter?: ?SiteFilterInput,
  sort?: ?SiteSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type Query_sitePluginArgs = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  resolve?: ?StringQueryOperatorInput,
  name?: ?StringQueryOperatorInput,
  version?: ?StringQueryOperatorInput,
  pluginOptions?: ?SitePluginPluginOptionsFilterInput,
  nodeAPIs?: ?StringQueryOperatorInput,
  ssrAPIs?: ?StringQueryOperatorInput,
  pluginFilepath?: ?StringQueryOperatorInput,
  packageJson?: ?SitePluginPackageJsonFilterInput,
|};

export type Query_allSitePluginArgs = {|
  filter?: ?SitePluginFilterInput,
  sort?: ?SitePluginSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type Site = {|
  ...Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?Node,
    +children: Array<Node>,
    +internal: Internal,
    +siteMetadata?: ?SiteSiteMetadata,
    +port?: ?$ElementType<Scalars, 'Int'>,
    +host?: ?$ElementType<Scalars, 'String'>,
    +polyfill?: ?$ElementType<Scalars, 'Boolean'>,
    +pathPrefix?: ?$ElementType<Scalars, 'String'>,
    +buildTime?: ?$ElementType<Scalars, 'Date'>,
  |},
|};

export type Site_buildTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type SiteConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<SiteEdge>,
  +nodes: Array<Site>,
  +pageInfo: PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<SiteGroupConnection>,
|};

export type SiteConnection_distinctArgs = {|
  field: SiteFieldsEnum,
|};

export type SiteConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: SiteFieldsEnum,
|};

export type SiteEdge = {|
  +next?: ?Site,
  +node: Site,
  +previous?: ?Site,
|};

export const SiteFieldsEnumValues = Object.freeze({
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
  buildTime: 'buildTime',
});

export type SiteFieldsEnum = $Values<typeof SiteFieldsEnumValues>;

export type SiteFilterInput = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  siteMetadata?: ?SiteSiteMetadataFilterInput,
  port?: ?IntQueryOperatorInput,
  host?: ?StringQueryOperatorInput,
  polyfill?: ?BooleanQueryOperatorInput,
  pathPrefix?: ?StringQueryOperatorInput,
  buildTime?: ?DateQueryOperatorInput,
|};

export type SiteGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<SiteEdge>,
  +nodes: Array<Site>,
  +pageInfo: PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePage = {|
  ...Node,
  ...{|
    +path: $ElementType<Scalars, 'String'>,
    +component: $ElementType<Scalars, 'String'>,
    +internalComponentName: $ElementType<Scalars, 'String'>,
    +componentChunkName: $ElementType<Scalars, 'String'>,
    +matchPath?: ?$ElementType<Scalars, 'String'>,
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?Node,
    +children: Array<Node>,
    +internal: Internal,
    +isCreatedByStatefulCreatePages?: ?$ElementType<Scalars, 'Boolean'>,
    +pluginCreator?: ?SitePlugin,
    +pluginCreatorId?: ?$ElementType<Scalars, 'String'>,
    +componentPath?: ?$ElementType<Scalars, 'String'>,
  |},
|};

export type SitePageConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<SitePageEdge>,
  +nodes: Array<SitePage>,
  +pageInfo: PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<SitePageGroupConnection>,
|};

export type SitePageConnection_distinctArgs = {|
  field: SitePageFieldsEnum,
|};

export type SitePageConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: SitePageFieldsEnum,
|};

export type SitePageEdge = {|
  +next?: ?SitePage,
  +node: SitePage,
  +previous?: ?SitePage,
|};

export const SitePageFieldsEnumValues = Object.freeze({
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

export type SitePageFieldsEnum = $Values<typeof SitePageFieldsEnumValues>;

export type SitePageFilterInput = {|
  path?: ?StringQueryOperatorInput,
  component?: ?StringQueryOperatorInput,
  internalComponentName?: ?StringQueryOperatorInput,
  componentChunkName?: ?StringQueryOperatorInput,
  matchPath?: ?StringQueryOperatorInput,
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  isCreatedByStatefulCreatePages?: ?BooleanQueryOperatorInput,
  pluginCreator?: ?SitePluginFilterInput,
  pluginCreatorId?: ?StringQueryOperatorInput,
  componentPath?: ?StringQueryOperatorInput,
|};

export type SitePageGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<SitePageEdge>,
  +nodes: Array<SitePage>,
  +pageInfo: PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePageSortInput = {|
  fields?: ?Array<?SitePageFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type SitePlugin = {|
  ...Node,
  ...{|
    +id: $ElementType<Scalars, 'ID'>,
    +parent?: ?Node,
    +children: Array<Node>,
    +internal: Internal,
    +resolve?: ?$ElementType<Scalars, 'String'>,
    +name?: ?$ElementType<Scalars, 'String'>,
    +version?: ?$ElementType<Scalars, 'String'>,
    +pluginOptions?: ?SitePluginPluginOptions,
    +nodeAPIs?: ?Array<?$ElementType<Scalars, 'String'>>,
    +ssrAPIs?: ?Array<?$ElementType<Scalars, 'String'>>,
    +pluginFilepath?: ?$ElementType<Scalars, 'String'>,
    +packageJson?: ?SitePluginPackageJson,
  |},
|};

export type SitePluginConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<SitePluginEdge>,
  +nodes: Array<SitePlugin>,
  +pageInfo: PageInfo,
  +distinct: Array<$ElementType<Scalars, 'String'>>,
  +group: Array<SitePluginGroupConnection>,
|};

export type SitePluginConnection_distinctArgs = {|
  field: SitePluginFieldsEnum,
|};

export type SitePluginConnection_groupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: SitePluginFieldsEnum,
|};

export type SitePluginEdge = {|
  +next?: ?SitePlugin,
  +node: SitePlugin,
  +previous?: ?SitePlugin,
|};

export const SitePluginFieldsEnumValues = Object.freeze({
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

export type SitePluginFieldsEnum = $Values<typeof SitePluginFieldsEnumValues>;

export type SitePluginFilterInput = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  resolve?: ?StringQueryOperatorInput,
  name?: ?StringQueryOperatorInput,
  version?: ?StringQueryOperatorInput,
  pluginOptions?: ?SitePluginPluginOptionsFilterInput,
  nodeAPIs?: ?StringQueryOperatorInput,
  ssrAPIs?: ?StringQueryOperatorInput,
  pluginFilepath?: ?StringQueryOperatorInput,
  packageJson?: ?SitePluginPackageJsonFilterInput,
|};

export type SitePluginGroupConnection = {|
  +totalCount: $ElementType<Scalars, 'Int'>,
  +edges: Array<SitePluginEdge>,
  +nodes: Array<SitePlugin>,
  +pageInfo: PageInfo,
  +field: $ElementType<Scalars, 'String'>,
  +fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePluginPackageJson = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
  +main?: ?$ElementType<Scalars, 'String'>,
  +license?: ?$ElementType<Scalars, 'String'>,
  +dependencies?: ?Array<?SitePluginPackageJsonDependencies>,
  +devDependencies?: ?Array<?SitePluginPackageJsonDevDependencies>,
  +peerDependencies?: ?Array<?SitePluginPackageJsonPeerDependencies>,
  +keywords?: ?Array<?$ElementType<Scalars, 'String'>>,
|};

export type SitePluginPackageJsonDependencies = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePluginPackageJsonDependenciesFilterInput = {|
  name?: ?StringQueryOperatorInput,
  version?: ?StringQueryOperatorInput,
|};

export type SitePluginPackageJsonDependenciesFilterListInput = {|
  elemMatch?: ?SitePluginPackageJsonDependenciesFilterInput,
|};

export type SitePluginPackageJsonDevDependencies = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePluginPackageJsonDevDependenciesFilterInput = {|
  name?: ?StringQueryOperatorInput,
  version?: ?StringQueryOperatorInput,
|};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {|
  elemMatch?: ?SitePluginPackageJsonDevDependenciesFilterInput,
|};

export type SitePluginPackageJsonFilterInput = {|
  name?: ?StringQueryOperatorInput,
  description?: ?StringQueryOperatorInput,
  version?: ?StringQueryOperatorInput,
  main?: ?StringQueryOperatorInput,
  license?: ?StringQueryOperatorInput,
  dependencies?: ?SitePluginPackageJsonDependenciesFilterListInput,
  devDependencies?: ?SitePluginPackageJsonDevDependenciesFilterListInput,
  peerDependencies?: ?SitePluginPackageJsonPeerDependenciesFilterListInput,
  keywords?: ?StringQueryOperatorInput,
|};

export type SitePluginPackageJsonPeerDependencies = {|
  +name?: ?$ElementType<Scalars, 'String'>,
  +version?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {|
  name?: ?StringQueryOperatorInput,
  version?: ?StringQueryOperatorInput,
|};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {|
  elemMatch?: ?SitePluginPackageJsonPeerDependenciesFilterInput,
|};

export type SitePluginPluginOptions = {|
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

export type SitePluginPluginOptionsFilterInput = {|
  src?: ?StringQueryOperatorInput,
  pages?: ?StringQueryOperatorInput,
  images?: ?StringQueryOperatorInput,
  components?: ?StringQueryOperatorInput,
  types?: ?StringQueryOperatorInput,
  path?: ?StringQueryOperatorInput,
  name?: ?StringQueryOperatorInput,
  language?: ?StringQueryOperatorInput,
  outputPath?: ?StringQueryOperatorInput,
  pathCheck?: ?BooleanQueryOperatorInput,
|};

export type SitePluginSortInput = {|
  fields?: ?Array<?SitePluginFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type SiteSiteMetadata = {|
  +title?: ?$ElementType<Scalars, 'String'>,
  +author?: ?$ElementType<Scalars, 'String'>,
  +description?: ?$ElementType<Scalars, 'String'>,
  +url?: ?$ElementType<Scalars, 'String'>,
  +image?: ?$ElementType<Scalars, 'String'>,
  +siteUrl?: ?$ElementType<Scalars, 'String'>,
|};

export type SiteSiteMetadataFilterInput = {|
  title?: ?StringQueryOperatorInput,
  author?: ?StringQueryOperatorInput,
  description?: ?StringQueryOperatorInput,
  url?: ?StringQueryOperatorInput,
  image?: ?StringQueryOperatorInput,
  siteUrl?: ?StringQueryOperatorInput,
|};

export type SiteSortInput = {|
  fields?: ?Array<?SiteFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export const SortOrderEnumValues = Object.freeze({
  ASC: 'ASC',
  DESC: 'DESC',
});

export type SortOrderEnum = $Values<typeof SortOrderEnumValues>;

export type StringQueryOperatorInput = {|
  eq?: ?$ElementType<Scalars, 'String'>,
  ne?: ?$ElementType<Scalars, 'String'>,
  in?: ?Array<?$ElementType<Scalars, 'String'>>,
  nin?: ?Array<?$ElementType<Scalars, 'String'>>,
  regex?: ?$ElementType<Scalars, 'String'>,
  glob?: ?$ElementType<Scalars, 'String'>,
|};

type $Pick<Origin: Object, Keys: Object> = $ObjMapi<Keys, <Key>(k: Key) => $ElementType<Origin, Key>>;

export type NavbarQueryQueryVariables = {};

export type NavbarQueryQuery = {|
  +allNavItemsJson: {| +nodes: Array<$Pick<NavItemsJson, {| +path: *, +link: *, +title: * |}>> |},
|};

export type AboutMeCardFragment = $Pick<AboutMeCardsJson, {| +name: *, +text: *, +title: * |}>;

export type IconLinkFragment = $Pick<IconLinksJson, {| +name: *, +url: *, +icon: * |}>;

export type SEOQueryVariables = {};

export type SEOQuery = {|
  +site: ?{|
    +siteMetadata: ?{
      ...$Pick<SiteSiteMetadata, {| +title: *, +url: *, +image: * |}>,
      ...{| +description: $ElementType<SiteSiteMetadata, 'description'> |},
    },
  |},
|};

export type ProjectFragment = {
  ...$Pick<ProjectsJson, {| +name: *, +title: *, +tags: * |}>,
  ...{| +links: ?Array<?$Pick<ProjectsJsonLinks, {| +icon: *, +link: * |}>> |},
};

export type IndexPageQueryVariables = {};

export type IndexPageQuery = {|
  +allIconLinksJson: {| +edges: Array<{| +node: IconLinkFragment |}> |},
  +allAboutMeCardsJson: {| +edges: Array<{| +node: AboutMeCardFragment |}> |},
|};

export type ProjectPageQueryVariables = {};

export type ProjectPageQuery = {| +allProjectsJson: {| +edges: Array<{| +node: ProjectFragment |}> |} |};

export type PagesQueryQueryVariables = {};

export type PagesQueryQuery = {| +allSitePage: {| +nodes: Array<$Pick<SitePage, {| +path: * |}>> |} |};
