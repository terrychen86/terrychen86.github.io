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

export type AboutMeIconJson = {|
  ...Node,
  ...{|
    __typename?: 'AboutMeIconJson',
    id: $ElementType<Scalars, 'ID'>,
    parent?: ?Node,
    children: Array<Node>,
    internal: Internal,
    name?: ?$ElementType<Scalars, 'String'>,
    title?: ?$ElementType<Scalars, 'String'>,
    text?: ?$ElementType<Scalars, 'String'>,
  |},
|};

export type AboutMeIconJsonConnection = {|
  __typename?: 'AboutMeIconJsonConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<AboutMeIconJsonEdge>,
  nodes: Array<AboutMeIconJson>,
  pageInfo: PageInfo,
  distinct: Array<$ElementType<Scalars, 'String'>>,
  group: Array<AboutMeIconJsonGroupConnection>,
|};

export type AboutMeIconJsonConnectionDistinctArgs = {|
  field: AboutMeIconJsonFieldsEnum,
|};

export type AboutMeIconJsonConnectionGroupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: AboutMeIconJsonFieldsEnum,
|};

export type AboutMeIconJsonEdge = {|
  __typename?: 'AboutMeIconJsonEdge',
  next?: ?AboutMeIconJson,
  node: AboutMeIconJson,
  previous?: ?AboutMeIconJson,
|};

export const AboutMeIconJsonFieldsEnumValues = Object.freeze({
  Id: 'id',
  ParentId: 'parent___id',
  ParentParentId: 'parent___parent___id',
  ParentParentParentId: 'parent___parent___parent___id',
  ParentParentParentChildren: 'parent___parent___parent___children',
  ParentParentChildren: 'parent___parent___children',
  ParentParentChildrenId: 'parent___parent___children___id',
  ParentParentChildrenChildren: 'parent___parent___children___children',
  ParentParentInternalContent: 'parent___parent___internal___content',
  ParentParentInternalContentDigest: 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription: 'parent___parent___internal___description',
  ParentParentInternalFieldOwners: 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType: 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType: 'parent___parent___internal___mediaType',
  ParentParentInternalOwner: 'parent___parent___internal___owner',
  ParentParentInternalType: 'parent___parent___internal___type',
  ParentChildren: 'parent___children',
  ParentChildrenId: 'parent___children___id',
  ParentChildrenParentId: 'parent___children___parent___id',
  ParentChildrenParentChildren: 'parent___children___parent___children',
  ParentChildrenChildren: 'parent___children___children',
  ParentChildrenChildrenId: 'parent___children___children___id',
  ParentChildrenChildrenChildren: 'parent___children___children___children',
  ParentChildrenInternalContent: 'parent___children___internal___content',
  ParentChildrenInternalContentDigest: 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription: 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners: 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType: 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType: 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner: 'parent___children___internal___owner',
  ParentChildrenInternalType: 'parent___children___internal___type',
  ParentInternalContent: 'parent___internal___content',
  ParentInternalContentDigest: 'parent___internal___contentDigest',
  ParentInternalDescription: 'parent___internal___description',
  ParentInternalFieldOwners: 'parent___internal___fieldOwners',
  ParentInternalIgnoreType: 'parent___internal___ignoreType',
  ParentInternalMediaType: 'parent___internal___mediaType',
  ParentInternalOwner: 'parent___internal___owner',
  ParentInternalType: 'parent___internal___type',
  Children: 'children',
  ChildrenId: 'children___id',
  ChildrenParentId: 'children___parent___id',
  ChildrenParentParentId: 'children___parent___parent___id',
  ChildrenParentParentChildren: 'children___parent___parent___children',
  ChildrenParentChildren: 'children___parent___children',
  ChildrenParentChildrenId: 'children___parent___children___id',
  ChildrenParentChildrenChildren: 'children___parent___children___children',
  ChildrenParentInternalContent: 'children___parent___internal___content',
  ChildrenParentInternalContentDigest: 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription: 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners: 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType: 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType: 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner: 'children___parent___internal___owner',
  ChildrenParentInternalType: 'children___parent___internal___type',
  ChildrenChildren: 'children___children',
  ChildrenChildrenId: 'children___children___id',
  ChildrenChildrenParentId: 'children___children___parent___id',
  ChildrenChildrenParentChildren: 'children___children___parent___children',
  ChildrenChildrenChildren: 'children___children___children',
  ChildrenChildrenChildrenId: 'children___children___children___id',
  ChildrenChildrenChildrenChildren: 'children___children___children___children',
  ChildrenChildrenInternalContent: 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest: 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription: 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners: 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType: 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType: 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner: 'children___children___internal___owner',
  ChildrenChildrenInternalType: 'children___children___internal___type',
  ChildrenInternalContent: 'children___internal___content',
  ChildrenInternalContentDigest: 'children___internal___contentDigest',
  ChildrenInternalDescription: 'children___internal___description',
  ChildrenInternalFieldOwners: 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType: 'children___internal___ignoreType',
  ChildrenInternalMediaType: 'children___internal___mediaType',
  ChildrenInternalOwner: 'children___internal___owner',
  ChildrenInternalType: 'children___internal___type',
  InternalContent: 'internal___content',
  InternalContentDigest: 'internal___contentDigest',
  InternalDescription: 'internal___description',
  InternalFieldOwners: 'internal___fieldOwners',
  InternalIgnoreType: 'internal___ignoreType',
  InternalMediaType: 'internal___mediaType',
  InternalOwner: 'internal___owner',
  InternalType: 'internal___type',
  Name: 'name',
  Title: 'title',
  Text: 'text',
});

export type AboutMeIconJsonFieldsEnum = $Values<typeof AboutMeIconJsonFieldsEnumValues>;

export type AboutMeIconJsonFilterInput = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  name?: ?StringQueryOperatorInput,
  title?: ?StringQueryOperatorInput,
  text?: ?StringQueryOperatorInput,
|};

export type AboutMeIconJsonFilterListInput = {|
  elemMatch?: ?AboutMeIconJsonFilterInput,
|};

export type AboutMeIconJsonGroupConnection = {|
  __typename?: 'AboutMeIconJsonGroupConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<AboutMeIconJsonEdge>,
  nodes: Array<AboutMeIconJson>,
  pageInfo: PageInfo,
  field: $ElementType<Scalars, 'String'>,
  fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type AboutMeIconJsonSortInput = {|
  fields?: ?Array<?AboutMeIconJsonFieldsEnum>,
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
    __typename?: 'Directory',
    sourceInstanceName: $ElementType<Scalars, 'String'>,
    absolutePath: $ElementType<Scalars, 'String'>,
    relativePath: $ElementType<Scalars, 'String'>,
    extension: $ElementType<Scalars, 'String'>,
    size: $ElementType<Scalars, 'Int'>,
    prettySize: $ElementType<Scalars, 'String'>,
    modifiedTime: $ElementType<Scalars, 'Date'>,
    accessTime: $ElementType<Scalars, 'Date'>,
    changeTime: $ElementType<Scalars, 'Date'>,
    birthTime: $ElementType<Scalars, 'Date'>,
    root: $ElementType<Scalars, 'String'>,
    dir: $ElementType<Scalars, 'String'>,
    base: $ElementType<Scalars, 'String'>,
    ext: $ElementType<Scalars, 'String'>,
    name: $ElementType<Scalars, 'String'>,
    relativeDirectory: $ElementType<Scalars, 'String'>,
    dev: $ElementType<Scalars, 'Int'>,
    mode: $ElementType<Scalars, 'Int'>,
    nlink: $ElementType<Scalars, 'Int'>,
    uid: $ElementType<Scalars, 'Int'>,
    gid: $ElementType<Scalars, 'Int'>,
    rdev: $ElementType<Scalars, 'Int'>,
    ino: $ElementType<Scalars, 'Float'>,
    atimeMs: $ElementType<Scalars, 'Float'>,
    mtimeMs: $ElementType<Scalars, 'Float'>,
    ctimeMs: $ElementType<Scalars, 'Float'>,
    atime: $ElementType<Scalars, 'Date'>,
    mtime: $ElementType<Scalars, 'Date'>,
    ctime: $ElementType<Scalars, 'Date'>,
    birthtime?: ?$ElementType<Scalars, 'Date'>,
    birthtimeMs?: ?$ElementType<Scalars, 'Float'>,
    blksize?: ?$ElementType<Scalars, 'Int'>,
    blocks?: ?$ElementType<Scalars, 'Int'>,
    id: $ElementType<Scalars, 'ID'>,
    parent?: ?Node,
    children: Array<Node>,
    internal: Internal,
  |},
|};

export type DirectoryModifiedTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type DirectoryAccessTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type DirectoryChangeTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type DirectoryBirthTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type DirectoryAtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type DirectoryMtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type DirectoryCtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type DirectoryConnection = {|
  __typename?: 'DirectoryConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<$ElementType<Scalars, 'String'>>,
  group: Array<DirectoryGroupConnection>,
|};

export type DirectoryConnectionDistinctArgs = {|
  field: DirectoryFieldsEnum,
|};

export type DirectoryConnectionGroupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: DirectoryFieldsEnum,
|};

export type DirectoryEdge = {|
  __typename?: 'DirectoryEdge',
  next?: ?Directory,
  node: Directory,
  previous?: ?Directory,
|};

export const DirectoryFieldsEnumValues = Object.freeze({
  SourceInstanceName: 'sourceInstanceName',
  AbsolutePath: 'absolutePath',
  RelativePath: 'relativePath',
  Extension: 'extension',
  Size: 'size',
  PrettySize: 'prettySize',
  ModifiedTime: 'modifiedTime',
  AccessTime: 'accessTime',
  ChangeTime: 'changeTime',
  BirthTime: 'birthTime',
  Root: 'root',
  Dir: 'dir',
  Base: 'base',
  Ext: 'ext',
  Name: 'name',
  RelativeDirectory: 'relativeDirectory',
  Dev: 'dev',
  Mode: 'mode',
  Nlink: 'nlink',
  Uid: 'uid',
  Gid: 'gid',
  Rdev: 'rdev',
  Ino: 'ino',
  AtimeMs: 'atimeMs',
  MtimeMs: 'mtimeMs',
  CtimeMs: 'ctimeMs',
  Atime: 'atime',
  Mtime: 'mtime',
  Ctime: 'ctime',
  Birthtime: 'birthtime',
  BirthtimeMs: 'birthtimeMs',
  Blksize: 'blksize',
  Blocks: 'blocks',
  Id: 'id',
  ParentId: 'parent___id',
  ParentParentId: 'parent___parent___id',
  ParentParentParentId: 'parent___parent___parent___id',
  ParentParentParentChildren: 'parent___parent___parent___children',
  ParentParentChildren: 'parent___parent___children',
  ParentParentChildrenId: 'parent___parent___children___id',
  ParentParentChildrenChildren: 'parent___parent___children___children',
  ParentParentInternalContent: 'parent___parent___internal___content',
  ParentParentInternalContentDigest: 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription: 'parent___parent___internal___description',
  ParentParentInternalFieldOwners: 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType: 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType: 'parent___parent___internal___mediaType',
  ParentParentInternalOwner: 'parent___parent___internal___owner',
  ParentParentInternalType: 'parent___parent___internal___type',
  ParentChildren: 'parent___children',
  ParentChildrenId: 'parent___children___id',
  ParentChildrenParentId: 'parent___children___parent___id',
  ParentChildrenParentChildren: 'parent___children___parent___children',
  ParentChildrenChildren: 'parent___children___children',
  ParentChildrenChildrenId: 'parent___children___children___id',
  ParentChildrenChildrenChildren: 'parent___children___children___children',
  ParentChildrenInternalContent: 'parent___children___internal___content',
  ParentChildrenInternalContentDigest: 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription: 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners: 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType: 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType: 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner: 'parent___children___internal___owner',
  ParentChildrenInternalType: 'parent___children___internal___type',
  ParentInternalContent: 'parent___internal___content',
  ParentInternalContentDigest: 'parent___internal___contentDigest',
  ParentInternalDescription: 'parent___internal___description',
  ParentInternalFieldOwners: 'parent___internal___fieldOwners',
  ParentInternalIgnoreType: 'parent___internal___ignoreType',
  ParentInternalMediaType: 'parent___internal___mediaType',
  ParentInternalOwner: 'parent___internal___owner',
  ParentInternalType: 'parent___internal___type',
  Children: 'children',
  ChildrenId: 'children___id',
  ChildrenParentId: 'children___parent___id',
  ChildrenParentParentId: 'children___parent___parent___id',
  ChildrenParentParentChildren: 'children___parent___parent___children',
  ChildrenParentChildren: 'children___parent___children',
  ChildrenParentChildrenId: 'children___parent___children___id',
  ChildrenParentChildrenChildren: 'children___parent___children___children',
  ChildrenParentInternalContent: 'children___parent___internal___content',
  ChildrenParentInternalContentDigest: 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription: 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners: 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType: 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType: 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner: 'children___parent___internal___owner',
  ChildrenParentInternalType: 'children___parent___internal___type',
  ChildrenChildren: 'children___children',
  ChildrenChildrenId: 'children___children___id',
  ChildrenChildrenParentId: 'children___children___parent___id',
  ChildrenChildrenParentChildren: 'children___children___parent___children',
  ChildrenChildrenChildren: 'children___children___children',
  ChildrenChildrenChildrenId: 'children___children___children___id',
  ChildrenChildrenChildrenChildren: 'children___children___children___children',
  ChildrenChildrenInternalContent: 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest: 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription: 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners: 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType: 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType: 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner: 'children___children___internal___owner',
  ChildrenChildrenInternalType: 'children___children___internal___type',
  ChildrenInternalContent: 'children___internal___content',
  ChildrenInternalContentDigest: 'children___internal___contentDigest',
  ChildrenInternalDescription: 'children___internal___description',
  ChildrenInternalFieldOwners: 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType: 'children___internal___ignoreType',
  ChildrenInternalMediaType: 'children___internal___mediaType',
  ChildrenInternalOwner: 'children___internal___owner',
  ChildrenInternalType: 'children___internal___type',
  InternalContent: 'internal___content',
  InternalContentDigest: 'internal___contentDigest',
  InternalDescription: 'internal___description',
  InternalFieldOwners: 'internal___fieldOwners',
  InternalIgnoreType: 'internal___ignoreType',
  InternalMediaType: 'internal___mediaType',
  InternalOwner: 'internal___owner',
  InternalType: 'internal___type',
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
  __typename?: 'DirectoryGroupConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: $ElementType<Scalars, 'String'>,
  fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type DirectorySortInput = {|
  fields?: ?Array<?DirectoryFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type File = {|
  ...Node,
  ...{|
    __typename?: 'File',
    sourceInstanceName: $ElementType<Scalars, 'String'>,
    absolutePath: $ElementType<Scalars, 'String'>,
    relativePath: $ElementType<Scalars, 'String'>,
    extension: $ElementType<Scalars, 'String'>,
    size: $ElementType<Scalars, 'Int'>,
    prettySize: $ElementType<Scalars, 'String'>,
    modifiedTime: $ElementType<Scalars, 'Date'>,
    accessTime: $ElementType<Scalars, 'Date'>,
    changeTime: $ElementType<Scalars, 'Date'>,
    birthTime: $ElementType<Scalars, 'Date'>,
    root: $ElementType<Scalars, 'String'>,
    dir: $ElementType<Scalars, 'String'>,
    base: $ElementType<Scalars, 'String'>,
    ext: $ElementType<Scalars, 'String'>,
    name: $ElementType<Scalars, 'String'>,
    relativeDirectory: $ElementType<Scalars, 'String'>,
    dev: $ElementType<Scalars, 'Int'>,
    mode: $ElementType<Scalars, 'Int'>,
    nlink: $ElementType<Scalars, 'Int'>,
    uid: $ElementType<Scalars, 'Int'>,
    gid: $ElementType<Scalars, 'Int'>,
    rdev: $ElementType<Scalars, 'Int'>,
    ino: $ElementType<Scalars, 'Float'>,
    atimeMs: $ElementType<Scalars, 'Float'>,
    mtimeMs: $ElementType<Scalars, 'Float'>,
    ctimeMs: $ElementType<Scalars, 'Float'>,
    atime: $ElementType<Scalars, 'Date'>,
    mtime: $ElementType<Scalars, 'Date'>,
    ctime: $ElementType<Scalars, 'Date'>,
    birthtime?: ?$ElementType<Scalars, 'Date'>,
    birthtimeMs?: ?$ElementType<Scalars, 'Float'>,
    blksize?: ?$ElementType<Scalars, 'Int'>,
    blocks?: ?$ElementType<Scalars, 'Int'>,
    publicURL?: ?$ElementType<Scalars, 'String'>,
    id: $ElementType<Scalars, 'ID'>,
    parent?: ?Node,
    children: Array<Node>,
    internal: Internal,
    childrenProjectsJson?: ?Array<?ProjectsJson>,
    childrenAboutMeIconJson?: ?Array<?AboutMeIconJson>,
    childrenIconLinksJson?: ?Array<?IconLinksJson>,
    childrenNavItemsJson?: ?Array<?NavItemsJson>,
  |},
|};

export type FileModifiedTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type FileAccessTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type FileChangeTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type FileBirthTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type FileAtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type FileMtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type FileCtimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type FileConnection = {|
  __typename?: 'FileConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<$ElementType<Scalars, 'String'>>,
  group: Array<FileGroupConnection>,
|};

export type FileConnectionDistinctArgs = {|
  field: FileFieldsEnum,
|};

export type FileConnectionGroupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: FileFieldsEnum,
|};

export type FileEdge = {|
  __typename?: 'FileEdge',
  next?: ?File,
  node: File,
  previous?: ?File,
|};

export const FileFieldsEnumValues = Object.freeze({
  SourceInstanceName: 'sourceInstanceName',
  AbsolutePath: 'absolutePath',
  RelativePath: 'relativePath',
  Extension: 'extension',
  Size: 'size',
  PrettySize: 'prettySize',
  ModifiedTime: 'modifiedTime',
  AccessTime: 'accessTime',
  ChangeTime: 'changeTime',
  BirthTime: 'birthTime',
  Root: 'root',
  Dir: 'dir',
  Base: 'base',
  Ext: 'ext',
  Name: 'name',
  RelativeDirectory: 'relativeDirectory',
  Dev: 'dev',
  Mode: 'mode',
  Nlink: 'nlink',
  Uid: 'uid',
  Gid: 'gid',
  Rdev: 'rdev',
  Ino: 'ino',
  AtimeMs: 'atimeMs',
  MtimeMs: 'mtimeMs',
  CtimeMs: 'ctimeMs',
  Atime: 'atime',
  Mtime: 'mtime',
  Ctime: 'ctime',
  Birthtime: 'birthtime',
  BirthtimeMs: 'birthtimeMs',
  Blksize: 'blksize',
  Blocks: 'blocks',
  PublicUrl: 'publicURL',
  Id: 'id',
  ParentId: 'parent___id',
  ParentParentId: 'parent___parent___id',
  ParentParentParentId: 'parent___parent___parent___id',
  ParentParentParentChildren: 'parent___parent___parent___children',
  ParentParentChildren: 'parent___parent___children',
  ParentParentChildrenId: 'parent___parent___children___id',
  ParentParentChildrenChildren: 'parent___parent___children___children',
  ParentParentInternalContent: 'parent___parent___internal___content',
  ParentParentInternalContentDigest: 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription: 'parent___parent___internal___description',
  ParentParentInternalFieldOwners: 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType: 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType: 'parent___parent___internal___mediaType',
  ParentParentInternalOwner: 'parent___parent___internal___owner',
  ParentParentInternalType: 'parent___parent___internal___type',
  ParentChildren: 'parent___children',
  ParentChildrenId: 'parent___children___id',
  ParentChildrenParentId: 'parent___children___parent___id',
  ParentChildrenParentChildren: 'parent___children___parent___children',
  ParentChildrenChildren: 'parent___children___children',
  ParentChildrenChildrenId: 'parent___children___children___id',
  ParentChildrenChildrenChildren: 'parent___children___children___children',
  ParentChildrenInternalContent: 'parent___children___internal___content',
  ParentChildrenInternalContentDigest: 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription: 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners: 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType: 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType: 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner: 'parent___children___internal___owner',
  ParentChildrenInternalType: 'parent___children___internal___type',
  ParentInternalContent: 'parent___internal___content',
  ParentInternalContentDigest: 'parent___internal___contentDigest',
  ParentInternalDescription: 'parent___internal___description',
  ParentInternalFieldOwners: 'parent___internal___fieldOwners',
  ParentInternalIgnoreType: 'parent___internal___ignoreType',
  ParentInternalMediaType: 'parent___internal___mediaType',
  ParentInternalOwner: 'parent___internal___owner',
  ParentInternalType: 'parent___internal___type',
  Children: 'children',
  ChildrenId: 'children___id',
  ChildrenParentId: 'children___parent___id',
  ChildrenParentParentId: 'children___parent___parent___id',
  ChildrenParentParentChildren: 'children___parent___parent___children',
  ChildrenParentChildren: 'children___parent___children',
  ChildrenParentChildrenId: 'children___parent___children___id',
  ChildrenParentChildrenChildren: 'children___parent___children___children',
  ChildrenParentInternalContent: 'children___parent___internal___content',
  ChildrenParentInternalContentDigest: 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription: 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners: 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType: 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType: 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner: 'children___parent___internal___owner',
  ChildrenParentInternalType: 'children___parent___internal___type',
  ChildrenChildren: 'children___children',
  ChildrenChildrenId: 'children___children___id',
  ChildrenChildrenParentId: 'children___children___parent___id',
  ChildrenChildrenParentChildren: 'children___children___parent___children',
  ChildrenChildrenChildren: 'children___children___children',
  ChildrenChildrenChildrenId: 'children___children___children___id',
  ChildrenChildrenChildrenChildren: 'children___children___children___children',
  ChildrenChildrenInternalContent: 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest: 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription: 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners: 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType: 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType: 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner: 'children___children___internal___owner',
  ChildrenChildrenInternalType: 'children___children___internal___type',
  ChildrenInternalContent: 'children___internal___content',
  ChildrenInternalContentDigest: 'children___internal___contentDigest',
  ChildrenInternalDescription: 'children___internal___description',
  ChildrenInternalFieldOwners: 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType: 'children___internal___ignoreType',
  ChildrenInternalMediaType: 'children___internal___mediaType',
  ChildrenInternalOwner: 'children___internal___owner',
  ChildrenInternalType: 'children___internal___type',
  InternalContent: 'internal___content',
  InternalContentDigest: 'internal___contentDigest',
  InternalDescription: 'internal___description',
  InternalFieldOwners: 'internal___fieldOwners',
  InternalIgnoreType: 'internal___ignoreType',
  InternalMediaType: 'internal___mediaType',
  InternalOwner: 'internal___owner',
  InternalType: 'internal___type',
  ChildrenProjectsJson: 'childrenProjectsJson',
  ChildrenProjectsJsonId: 'childrenProjectsJson___id',
  ChildrenProjectsJsonParentId: 'childrenProjectsJson___parent___id',
  ChildrenProjectsJsonParentParentId: 'childrenProjectsJson___parent___parent___id',
  ChildrenProjectsJsonParentParentChildren: 'childrenProjectsJson___parent___parent___children',
  ChildrenProjectsJsonParentChildren: 'childrenProjectsJson___parent___children',
  ChildrenProjectsJsonParentChildrenId: 'childrenProjectsJson___parent___children___id',
  ChildrenProjectsJsonParentChildrenChildren: 'childrenProjectsJson___parent___children___children',
  ChildrenProjectsJsonParentInternalContent: 'childrenProjectsJson___parent___internal___content',
  ChildrenProjectsJsonParentInternalContentDigest: 'childrenProjectsJson___parent___internal___contentDigest',
  ChildrenProjectsJsonParentInternalDescription: 'childrenProjectsJson___parent___internal___description',
  ChildrenProjectsJsonParentInternalFieldOwners: 'childrenProjectsJson___parent___internal___fieldOwners',
  ChildrenProjectsJsonParentInternalIgnoreType: 'childrenProjectsJson___parent___internal___ignoreType',
  ChildrenProjectsJsonParentInternalMediaType: 'childrenProjectsJson___parent___internal___mediaType',
  ChildrenProjectsJsonParentInternalOwner: 'childrenProjectsJson___parent___internal___owner',
  ChildrenProjectsJsonParentInternalType: 'childrenProjectsJson___parent___internal___type',
  ChildrenProjectsJsonChildren: 'childrenProjectsJson___children',
  ChildrenProjectsJsonChildrenId: 'childrenProjectsJson___children___id',
  ChildrenProjectsJsonChildrenParentId: 'childrenProjectsJson___children___parent___id',
  ChildrenProjectsJsonChildrenParentChildren: 'childrenProjectsJson___children___parent___children',
  ChildrenProjectsJsonChildrenChildren: 'childrenProjectsJson___children___children',
  ChildrenProjectsJsonChildrenChildrenId: 'childrenProjectsJson___children___children___id',
  ChildrenProjectsJsonChildrenChildrenChildren: 'childrenProjectsJson___children___children___children',
  ChildrenProjectsJsonChildrenInternalContent: 'childrenProjectsJson___children___internal___content',
  ChildrenProjectsJsonChildrenInternalContentDigest: 'childrenProjectsJson___children___internal___contentDigest',
  ChildrenProjectsJsonChildrenInternalDescription: 'childrenProjectsJson___children___internal___description',
  ChildrenProjectsJsonChildrenInternalFieldOwners: 'childrenProjectsJson___children___internal___fieldOwners',
  ChildrenProjectsJsonChildrenInternalIgnoreType: 'childrenProjectsJson___children___internal___ignoreType',
  ChildrenProjectsJsonChildrenInternalMediaType: 'childrenProjectsJson___children___internal___mediaType',
  ChildrenProjectsJsonChildrenInternalOwner: 'childrenProjectsJson___children___internal___owner',
  ChildrenProjectsJsonChildrenInternalType: 'childrenProjectsJson___children___internal___type',
  ChildrenProjectsJsonInternalContent: 'childrenProjectsJson___internal___content',
  ChildrenProjectsJsonInternalContentDigest: 'childrenProjectsJson___internal___contentDigest',
  ChildrenProjectsJsonInternalDescription: 'childrenProjectsJson___internal___description',
  ChildrenProjectsJsonInternalFieldOwners: 'childrenProjectsJson___internal___fieldOwners',
  ChildrenProjectsJsonInternalIgnoreType: 'childrenProjectsJson___internal___ignoreType',
  ChildrenProjectsJsonInternalMediaType: 'childrenProjectsJson___internal___mediaType',
  ChildrenProjectsJsonInternalOwner: 'childrenProjectsJson___internal___owner',
  ChildrenProjectsJsonInternalType: 'childrenProjectsJson___internal___type',
  ChildrenProjectsJsonName: 'childrenProjectsJson___name',
  ChildrenProjectsJsonTitle: 'childrenProjectsJson___title',
  ChildrenProjectsJsonTags: 'childrenProjectsJson___tags',
  ChildrenProjectsJsonLinks: 'childrenProjectsJson___links',
  ChildrenProjectsJsonLinksIcon: 'childrenProjectsJson___links___icon',
  ChildrenProjectsJsonLinksLink: 'childrenProjectsJson___links___link',
  ChildrenAboutMeIconJson: 'childrenAboutMeIconJson',
  ChildrenAboutMeIconJsonId: 'childrenAboutMeIconJson___id',
  ChildrenAboutMeIconJsonParentId: 'childrenAboutMeIconJson___parent___id',
  ChildrenAboutMeIconJsonParentParentId: 'childrenAboutMeIconJson___parent___parent___id',
  ChildrenAboutMeIconJsonParentParentChildren: 'childrenAboutMeIconJson___parent___parent___children',
  ChildrenAboutMeIconJsonParentChildren: 'childrenAboutMeIconJson___parent___children',
  ChildrenAboutMeIconJsonParentChildrenId: 'childrenAboutMeIconJson___parent___children___id',
  ChildrenAboutMeIconJsonParentChildrenChildren: 'childrenAboutMeIconJson___parent___children___children',
  ChildrenAboutMeIconJsonParentInternalContent: 'childrenAboutMeIconJson___parent___internal___content',
  ChildrenAboutMeIconJsonParentInternalContentDigest: 'childrenAboutMeIconJson___parent___internal___contentDigest',
  ChildrenAboutMeIconJsonParentInternalDescription: 'childrenAboutMeIconJson___parent___internal___description',
  ChildrenAboutMeIconJsonParentInternalFieldOwners: 'childrenAboutMeIconJson___parent___internal___fieldOwners',
  ChildrenAboutMeIconJsonParentInternalIgnoreType: 'childrenAboutMeIconJson___parent___internal___ignoreType',
  ChildrenAboutMeIconJsonParentInternalMediaType: 'childrenAboutMeIconJson___parent___internal___mediaType',
  ChildrenAboutMeIconJsonParentInternalOwner: 'childrenAboutMeIconJson___parent___internal___owner',
  ChildrenAboutMeIconJsonParentInternalType: 'childrenAboutMeIconJson___parent___internal___type',
  ChildrenAboutMeIconJsonChildren: 'childrenAboutMeIconJson___children',
  ChildrenAboutMeIconJsonChildrenId: 'childrenAboutMeIconJson___children___id',
  ChildrenAboutMeIconJsonChildrenParentId: 'childrenAboutMeIconJson___children___parent___id',
  ChildrenAboutMeIconJsonChildrenParentChildren: 'childrenAboutMeIconJson___children___parent___children',
  ChildrenAboutMeIconJsonChildrenChildren: 'childrenAboutMeIconJson___children___children',
  ChildrenAboutMeIconJsonChildrenChildrenId: 'childrenAboutMeIconJson___children___children___id',
  ChildrenAboutMeIconJsonChildrenChildrenChildren: 'childrenAboutMeIconJson___children___children___children',
  ChildrenAboutMeIconJsonChildrenInternalContent: 'childrenAboutMeIconJson___children___internal___content',
  ChildrenAboutMeIconJsonChildrenInternalContentDigest: 'childrenAboutMeIconJson___children___internal___contentDigest',
  ChildrenAboutMeIconJsonChildrenInternalDescription: 'childrenAboutMeIconJson___children___internal___description',
  ChildrenAboutMeIconJsonChildrenInternalFieldOwners: 'childrenAboutMeIconJson___children___internal___fieldOwners',
  ChildrenAboutMeIconJsonChildrenInternalIgnoreType: 'childrenAboutMeIconJson___children___internal___ignoreType',
  ChildrenAboutMeIconJsonChildrenInternalMediaType: 'childrenAboutMeIconJson___children___internal___mediaType',
  ChildrenAboutMeIconJsonChildrenInternalOwner: 'childrenAboutMeIconJson___children___internal___owner',
  ChildrenAboutMeIconJsonChildrenInternalType: 'childrenAboutMeIconJson___children___internal___type',
  ChildrenAboutMeIconJsonInternalContent: 'childrenAboutMeIconJson___internal___content',
  ChildrenAboutMeIconJsonInternalContentDigest: 'childrenAboutMeIconJson___internal___contentDigest',
  ChildrenAboutMeIconJsonInternalDescription: 'childrenAboutMeIconJson___internal___description',
  ChildrenAboutMeIconJsonInternalFieldOwners: 'childrenAboutMeIconJson___internal___fieldOwners',
  ChildrenAboutMeIconJsonInternalIgnoreType: 'childrenAboutMeIconJson___internal___ignoreType',
  ChildrenAboutMeIconJsonInternalMediaType: 'childrenAboutMeIconJson___internal___mediaType',
  ChildrenAboutMeIconJsonInternalOwner: 'childrenAboutMeIconJson___internal___owner',
  ChildrenAboutMeIconJsonInternalType: 'childrenAboutMeIconJson___internal___type',
  ChildrenAboutMeIconJsonName: 'childrenAboutMeIconJson___name',
  ChildrenAboutMeIconJsonTitle: 'childrenAboutMeIconJson___title',
  ChildrenAboutMeIconJsonText: 'childrenAboutMeIconJson___text',
  ChildrenIconLinksJson: 'childrenIconLinksJson',
  ChildrenIconLinksJsonId: 'childrenIconLinksJson___id',
  ChildrenIconLinksJsonParentId: 'childrenIconLinksJson___parent___id',
  ChildrenIconLinksJsonParentParentId: 'childrenIconLinksJson___parent___parent___id',
  ChildrenIconLinksJsonParentParentChildren: 'childrenIconLinksJson___parent___parent___children',
  ChildrenIconLinksJsonParentChildren: 'childrenIconLinksJson___parent___children',
  ChildrenIconLinksJsonParentChildrenId: 'childrenIconLinksJson___parent___children___id',
  ChildrenIconLinksJsonParentChildrenChildren: 'childrenIconLinksJson___parent___children___children',
  ChildrenIconLinksJsonParentInternalContent: 'childrenIconLinksJson___parent___internal___content',
  ChildrenIconLinksJsonParentInternalContentDigest: 'childrenIconLinksJson___parent___internal___contentDigest',
  ChildrenIconLinksJsonParentInternalDescription: 'childrenIconLinksJson___parent___internal___description',
  ChildrenIconLinksJsonParentInternalFieldOwners: 'childrenIconLinksJson___parent___internal___fieldOwners',
  ChildrenIconLinksJsonParentInternalIgnoreType: 'childrenIconLinksJson___parent___internal___ignoreType',
  ChildrenIconLinksJsonParentInternalMediaType: 'childrenIconLinksJson___parent___internal___mediaType',
  ChildrenIconLinksJsonParentInternalOwner: 'childrenIconLinksJson___parent___internal___owner',
  ChildrenIconLinksJsonParentInternalType: 'childrenIconLinksJson___parent___internal___type',
  ChildrenIconLinksJsonChildren: 'childrenIconLinksJson___children',
  ChildrenIconLinksJsonChildrenId: 'childrenIconLinksJson___children___id',
  ChildrenIconLinksJsonChildrenParentId: 'childrenIconLinksJson___children___parent___id',
  ChildrenIconLinksJsonChildrenParentChildren: 'childrenIconLinksJson___children___parent___children',
  ChildrenIconLinksJsonChildrenChildren: 'childrenIconLinksJson___children___children',
  ChildrenIconLinksJsonChildrenChildrenId: 'childrenIconLinksJson___children___children___id',
  ChildrenIconLinksJsonChildrenChildrenChildren: 'childrenIconLinksJson___children___children___children',
  ChildrenIconLinksJsonChildrenInternalContent: 'childrenIconLinksJson___children___internal___content',
  ChildrenIconLinksJsonChildrenInternalContentDigest: 'childrenIconLinksJson___children___internal___contentDigest',
  ChildrenIconLinksJsonChildrenInternalDescription: 'childrenIconLinksJson___children___internal___description',
  ChildrenIconLinksJsonChildrenInternalFieldOwners: 'childrenIconLinksJson___children___internal___fieldOwners',
  ChildrenIconLinksJsonChildrenInternalIgnoreType: 'childrenIconLinksJson___children___internal___ignoreType',
  ChildrenIconLinksJsonChildrenInternalMediaType: 'childrenIconLinksJson___children___internal___mediaType',
  ChildrenIconLinksJsonChildrenInternalOwner: 'childrenIconLinksJson___children___internal___owner',
  ChildrenIconLinksJsonChildrenInternalType: 'childrenIconLinksJson___children___internal___type',
  ChildrenIconLinksJsonInternalContent: 'childrenIconLinksJson___internal___content',
  ChildrenIconLinksJsonInternalContentDigest: 'childrenIconLinksJson___internal___contentDigest',
  ChildrenIconLinksJsonInternalDescription: 'childrenIconLinksJson___internal___description',
  ChildrenIconLinksJsonInternalFieldOwners: 'childrenIconLinksJson___internal___fieldOwners',
  ChildrenIconLinksJsonInternalIgnoreType: 'childrenIconLinksJson___internal___ignoreType',
  ChildrenIconLinksJsonInternalMediaType: 'childrenIconLinksJson___internal___mediaType',
  ChildrenIconLinksJsonInternalOwner: 'childrenIconLinksJson___internal___owner',
  ChildrenIconLinksJsonInternalType: 'childrenIconLinksJson___internal___type',
  ChildrenIconLinksJsonName: 'childrenIconLinksJson___name',
  ChildrenIconLinksJsonIcon: 'childrenIconLinksJson___icon',
  ChildrenIconLinksJsonUrl: 'childrenIconLinksJson___url',
  ChildrenNavItemsJson: 'childrenNavItemsJson',
  ChildrenNavItemsJsonId: 'childrenNavItemsJson___id',
  ChildrenNavItemsJsonParentId: 'childrenNavItemsJson___parent___id',
  ChildrenNavItemsJsonParentParentId: 'childrenNavItemsJson___parent___parent___id',
  ChildrenNavItemsJsonParentParentChildren: 'childrenNavItemsJson___parent___parent___children',
  ChildrenNavItemsJsonParentChildren: 'childrenNavItemsJson___parent___children',
  ChildrenNavItemsJsonParentChildrenId: 'childrenNavItemsJson___parent___children___id',
  ChildrenNavItemsJsonParentChildrenChildren: 'childrenNavItemsJson___parent___children___children',
  ChildrenNavItemsJsonParentInternalContent: 'childrenNavItemsJson___parent___internal___content',
  ChildrenNavItemsJsonParentInternalContentDigest: 'childrenNavItemsJson___parent___internal___contentDigest',
  ChildrenNavItemsJsonParentInternalDescription: 'childrenNavItemsJson___parent___internal___description',
  ChildrenNavItemsJsonParentInternalFieldOwners: 'childrenNavItemsJson___parent___internal___fieldOwners',
  ChildrenNavItemsJsonParentInternalIgnoreType: 'childrenNavItemsJson___parent___internal___ignoreType',
  ChildrenNavItemsJsonParentInternalMediaType: 'childrenNavItemsJson___parent___internal___mediaType',
  ChildrenNavItemsJsonParentInternalOwner: 'childrenNavItemsJson___parent___internal___owner',
  ChildrenNavItemsJsonParentInternalType: 'childrenNavItemsJson___parent___internal___type',
  ChildrenNavItemsJsonChildren: 'childrenNavItemsJson___children',
  ChildrenNavItemsJsonChildrenId: 'childrenNavItemsJson___children___id',
  ChildrenNavItemsJsonChildrenParentId: 'childrenNavItemsJson___children___parent___id',
  ChildrenNavItemsJsonChildrenParentChildren: 'childrenNavItemsJson___children___parent___children',
  ChildrenNavItemsJsonChildrenChildren: 'childrenNavItemsJson___children___children',
  ChildrenNavItemsJsonChildrenChildrenId: 'childrenNavItemsJson___children___children___id',
  ChildrenNavItemsJsonChildrenChildrenChildren: 'childrenNavItemsJson___children___children___children',
  ChildrenNavItemsJsonChildrenInternalContent: 'childrenNavItemsJson___children___internal___content',
  ChildrenNavItemsJsonChildrenInternalContentDigest: 'childrenNavItemsJson___children___internal___contentDigest',
  ChildrenNavItemsJsonChildrenInternalDescription: 'childrenNavItemsJson___children___internal___description',
  ChildrenNavItemsJsonChildrenInternalFieldOwners: 'childrenNavItemsJson___children___internal___fieldOwners',
  ChildrenNavItemsJsonChildrenInternalIgnoreType: 'childrenNavItemsJson___children___internal___ignoreType',
  ChildrenNavItemsJsonChildrenInternalMediaType: 'childrenNavItemsJson___children___internal___mediaType',
  ChildrenNavItemsJsonChildrenInternalOwner: 'childrenNavItemsJson___children___internal___owner',
  ChildrenNavItemsJsonChildrenInternalType: 'childrenNavItemsJson___children___internal___type',
  ChildrenNavItemsJsonInternalContent: 'childrenNavItemsJson___internal___content',
  ChildrenNavItemsJsonInternalContentDigest: 'childrenNavItemsJson___internal___contentDigest',
  ChildrenNavItemsJsonInternalDescription: 'childrenNavItemsJson___internal___description',
  ChildrenNavItemsJsonInternalFieldOwners: 'childrenNavItemsJson___internal___fieldOwners',
  ChildrenNavItemsJsonInternalIgnoreType: 'childrenNavItemsJson___internal___ignoreType',
  ChildrenNavItemsJsonInternalMediaType: 'childrenNavItemsJson___internal___mediaType',
  ChildrenNavItemsJsonInternalOwner: 'childrenNavItemsJson___internal___owner',
  ChildrenNavItemsJsonInternalType: 'childrenNavItemsJson___internal___type',
  ChildrenNavItemsJsonTitle: 'childrenNavItemsJson___title',
  ChildrenNavItemsJsonPath: 'childrenNavItemsJson___path',
  ChildrenNavItemsJsonLink: 'childrenNavItemsJson___link',
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
  childrenProjectsJson?: ?ProjectsJsonFilterListInput,
  childrenAboutMeIconJson?: ?AboutMeIconJsonFilterListInput,
  childrenIconLinksJson?: ?IconLinksJsonFilterListInput,
  childrenNavItemsJson?: ?NavItemsJsonFilterListInput,
|};

export type FileGroupConnection = {|
  __typename?: 'FileGroupConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: $ElementType<Scalars, 'String'>,
  fieldValue?: ?$ElementType<Scalars, 'String'>,
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
    __typename?: 'IconLinksJson',
    id: $ElementType<Scalars, 'ID'>,
    parent?: ?Node,
    children: Array<Node>,
    internal: Internal,
    name?: ?$ElementType<Scalars, 'String'>,
    icon?: ?$ElementType<Scalars, 'String'>,
    url?: ?$ElementType<Scalars, 'String'>,
  |},
|};

export type IconLinksJsonConnection = {|
  __typename?: 'IconLinksJsonConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<IconLinksJsonEdge>,
  nodes: Array<IconLinksJson>,
  pageInfo: PageInfo,
  distinct: Array<$ElementType<Scalars, 'String'>>,
  group: Array<IconLinksJsonGroupConnection>,
|};

export type IconLinksJsonConnectionDistinctArgs = {|
  field: IconLinksJsonFieldsEnum,
|};

export type IconLinksJsonConnectionGroupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: IconLinksJsonFieldsEnum,
|};

export type IconLinksJsonEdge = {|
  __typename?: 'IconLinksJsonEdge',
  next?: ?IconLinksJson,
  node: IconLinksJson,
  previous?: ?IconLinksJson,
|};

export const IconLinksJsonFieldsEnumValues = Object.freeze({
  Id: 'id',
  ParentId: 'parent___id',
  ParentParentId: 'parent___parent___id',
  ParentParentParentId: 'parent___parent___parent___id',
  ParentParentParentChildren: 'parent___parent___parent___children',
  ParentParentChildren: 'parent___parent___children',
  ParentParentChildrenId: 'parent___parent___children___id',
  ParentParentChildrenChildren: 'parent___parent___children___children',
  ParentParentInternalContent: 'parent___parent___internal___content',
  ParentParentInternalContentDigest: 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription: 'parent___parent___internal___description',
  ParentParentInternalFieldOwners: 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType: 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType: 'parent___parent___internal___mediaType',
  ParentParentInternalOwner: 'parent___parent___internal___owner',
  ParentParentInternalType: 'parent___parent___internal___type',
  ParentChildren: 'parent___children',
  ParentChildrenId: 'parent___children___id',
  ParentChildrenParentId: 'parent___children___parent___id',
  ParentChildrenParentChildren: 'parent___children___parent___children',
  ParentChildrenChildren: 'parent___children___children',
  ParentChildrenChildrenId: 'parent___children___children___id',
  ParentChildrenChildrenChildren: 'parent___children___children___children',
  ParentChildrenInternalContent: 'parent___children___internal___content',
  ParentChildrenInternalContentDigest: 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription: 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners: 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType: 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType: 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner: 'parent___children___internal___owner',
  ParentChildrenInternalType: 'parent___children___internal___type',
  ParentInternalContent: 'parent___internal___content',
  ParentInternalContentDigest: 'parent___internal___contentDigest',
  ParentInternalDescription: 'parent___internal___description',
  ParentInternalFieldOwners: 'parent___internal___fieldOwners',
  ParentInternalIgnoreType: 'parent___internal___ignoreType',
  ParentInternalMediaType: 'parent___internal___mediaType',
  ParentInternalOwner: 'parent___internal___owner',
  ParentInternalType: 'parent___internal___type',
  Children: 'children',
  ChildrenId: 'children___id',
  ChildrenParentId: 'children___parent___id',
  ChildrenParentParentId: 'children___parent___parent___id',
  ChildrenParentParentChildren: 'children___parent___parent___children',
  ChildrenParentChildren: 'children___parent___children',
  ChildrenParentChildrenId: 'children___parent___children___id',
  ChildrenParentChildrenChildren: 'children___parent___children___children',
  ChildrenParentInternalContent: 'children___parent___internal___content',
  ChildrenParentInternalContentDigest: 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription: 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners: 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType: 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType: 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner: 'children___parent___internal___owner',
  ChildrenParentInternalType: 'children___parent___internal___type',
  ChildrenChildren: 'children___children',
  ChildrenChildrenId: 'children___children___id',
  ChildrenChildrenParentId: 'children___children___parent___id',
  ChildrenChildrenParentChildren: 'children___children___parent___children',
  ChildrenChildrenChildren: 'children___children___children',
  ChildrenChildrenChildrenId: 'children___children___children___id',
  ChildrenChildrenChildrenChildren: 'children___children___children___children',
  ChildrenChildrenInternalContent: 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest: 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription: 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners: 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType: 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType: 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner: 'children___children___internal___owner',
  ChildrenChildrenInternalType: 'children___children___internal___type',
  ChildrenInternalContent: 'children___internal___content',
  ChildrenInternalContentDigest: 'children___internal___contentDigest',
  ChildrenInternalDescription: 'children___internal___description',
  ChildrenInternalFieldOwners: 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType: 'children___internal___ignoreType',
  ChildrenInternalMediaType: 'children___internal___mediaType',
  ChildrenInternalOwner: 'children___internal___owner',
  ChildrenInternalType: 'children___internal___type',
  InternalContent: 'internal___content',
  InternalContentDigest: 'internal___contentDigest',
  InternalDescription: 'internal___description',
  InternalFieldOwners: 'internal___fieldOwners',
  InternalIgnoreType: 'internal___ignoreType',
  InternalMediaType: 'internal___mediaType',
  InternalOwner: 'internal___owner',
  InternalType: 'internal___type',
  Name: 'name',
  Icon: 'icon',
  Url: 'url',
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
  __typename?: 'IconLinksJsonGroupConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<IconLinksJsonEdge>,
  nodes: Array<IconLinksJson>,
  pageInfo: PageInfo,
  field: $ElementType<Scalars, 'String'>,
  fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type IconLinksJsonSortInput = {|
  fields?: ?Array<?IconLinksJsonFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type Internal = {|
  __typename?: 'Internal',
  content?: ?$ElementType<Scalars, 'String'>,
  contentDigest: $ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  fieldOwners?: ?Array<?$ElementType<Scalars, 'String'>>,
  ignoreType?: ?$ElementType<Scalars, 'Boolean'>,
  mediaType?: ?$ElementType<Scalars, 'String'>,
  owner: $ElementType<Scalars, 'String'>,
  type: $ElementType<Scalars, 'String'>,
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
    __typename?: 'NavItemsJson',
    id: $ElementType<Scalars, 'ID'>,
    parent?: ?Node,
    children: Array<Node>,
    internal: Internal,
    title?: ?$ElementType<Scalars, 'String'>,
    path?: ?$ElementType<Scalars, 'String'>,
    link?: ?$ElementType<Scalars, 'String'>,
  |},
|};

export type NavItemsJsonConnection = {|
  __typename?: 'NavItemsJsonConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<NavItemsJsonEdge>,
  nodes: Array<NavItemsJson>,
  pageInfo: PageInfo,
  distinct: Array<$ElementType<Scalars, 'String'>>,
  group: Array<NavItemsJsonGroupConnection>,
|};

export type NavItemsJsonConnectionDistinctArgs = {|
  field: NavItemsJsonFieldsEnum,
|};

export type NavItemsJsonConnectionGroupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: NavItemsJsonFieldsEnum,
|};

export type NavItemsJsonEdge = {|
  __typename?: 'NavItemsJsonEdge',
  next?: ?NavItemsJson,
  node: NavItemsJson,
  previous?: ?NavItemsJson,
|};

export const NavItemsJsonFieldsEnumValues = Object.freeze({
  Id: 'id',
  ParentId: 'parent___id',
  ParentParentId: 'parent___parent___id',
  ParentParentParentId: 'parent___parent___parent___id',
  ParentParentParentChildren: 'parent___parent___parent___children',
  ParentParentChildren: 'parent___parent___children',
  ParentParentChildrenId: 'parent___parent___children___id',
  ParentParentChildrenChildren: 'parent___parent___children___children',
  ParentParentInternalContent: 'parent___parent___internal___content',
  ParentParentInternalContentDigest: 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription: 'parent___parent___internal___description',
  ParentParentInternalFieldOwners: 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType: 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType: 'parent___parent___internal___mediaType',
  ParentParentInternalOwner: 'parent___parent___internal___owner',
  ParentParentInternalType: 'parent___parent___internal___type',
  ParentChildren: 'parent___children',
  ParentChildrenId: 'parent___children___id',
  ParentChildrenParentId: 'parent___children___parent___id',
  ParentChildrenParentChildren: 'parent___children___parent___children',
  ParentChildrenChildren: 'parent___children___children',
  ParentChildrenChildrenId: 'parent___children___children___id',
  ParentChildrenChildrenChildren: 'parent___children___children___children',
  ParentChildrenInternalContent: 'parent___children___internal___content',
  ParentChildrenInternalContentDigest: 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription: 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners: 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType: 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType: 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner: 'parent___children___internal___owner',
  ParentChildrenInternalType: 'parent___children___internal___type',
  ParentInternalContent: 'parent___internal___content',
  ParentInternalContentDigest: 'parent___internal___contentDigest',
  ParentInternalDescription: 'parent___internal___description',
  ParentInternalFieldOwners: 'parent___internal___fieldOwners',
  ParentInternalIgnoreType: 'parent___internal___ignoreType',
  ParentInternalMediaType: 'parent___internal___mediaType',
  ParentInternalOwner: 'parent___internal___owner',
  ParentInternalType: 'parent___internal___type',
  Children: 'children',
  ChildrenId: 'children___id',
  ChildrenParentId: 'children___parent___id',
  ChildrenParentParentId: 'children___parent___parent___id',
  ChildrenParentParentChildren: 'children___parent___parent___children',
  ChildrenParentChildren: 'children___parent___children',
  ChildrenParentChildrenId: 'children___parent___children___id',
  ChildrenParentChildrenChildren: 'children___parent___children___children',
  ChildrenParentInternalContent: 'children___parent___internal___content',
  ChildrenParentInternalContentDigest: 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription: 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners: 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType: 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType: 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner: 'children___parent___internal___owner',
  ChildrenParentInternalType: 'children___parent___internal___type',
  ChildrenChildren: 'children___children',
  ChildrenChildrenId: 'children___children___id',
  ChildrenChildrenParentId: 'children___children___parent___id',
  ChildrenChildrenParentChildren: 'children___children___parent___children',
  ChildrenChildrenChildren: 'children___children___children',
  ChildrenChildrenChildrenId: 'children___children___children___id',
  ChildrenChildrenChildrenChildren: 'children___children___children___children',
  ChildrenChildrenInternalContent: 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest: 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription: 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners: 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType: 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType: 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner: 'children___children___internal___owner',
  ChildrenChildrenInternalType: 'children___children___internal___type',
  ChildrenInternalContent: 'children___internal___content',
  ChildrenInternalContentDigest: 'children___internal___contentDigest',
  ChildrenInternalDescription: 'children___internal___description',
  ChildrenInternalFieldOwners: 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType: 'children___internal___ignoreType',
  ChildrenInternalMediaType: 'children___internal___mediaType',
  ChildrenInternalOwner: 'children___internal___owner',
  ChildrenInternalType: 'children___internal___type',
  InternalContent: 'internal___content',
  InternalContentDigest: 'internal___contentDigest',
  InternalDescription: 'internal___description',
  InternalFieldOwners: 'internal___fieldOwners',
  InternalIgnoreType: 'internal___ignoreType',
  InternalMediaType: 'internal___mediaType',
  InternalOwner: 'internal___owner',
  InternalType: 'internal___type',
  Title: 'title',
  Path: 'path',
  Link: 'link',
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
  __typename?: 'NavItemsJsonGroupConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<NavItemsJsonEdge>,
  nodes: Array<NavItemsJson>,
  pageInfo: PageInfo,
  field: $ElementType<Scalars, 'String'>,
  fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type NavItemsJsonSortInput = {|
  fields?: ?Array<?NavItemsJsonFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type Node = {|
  id: $ElementType<Scalars, 'ID'>,
  parent?: ?Node,
  children: Array<Node>,
  internal: Internal,
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
  __typename?: 'PageInfo',
  currentPage: $ElementType<Scalars, 'Int'>,
  hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
  hasNextPage: $ElementType<Scalars, 'Boolean'>,
  itemCount: $ElementType<Scalars, 'Int'>,
  pageCount: $ElementType<Scalars, 'Int'>,
  perPage?: ?$ElementType<Scalars, 'Int'>,
|};

export type ProjectsJson = {|
  ...Node,
  ...{|
    __typename?: 'ProjectsJson',
    id: $ElementType<Scalars, 'ID'>,
    parent?: ?Node,
    children: Array<Node>,
    internal: Internal,
    name?: ?$ElementType<Scalars, 'String'>,
    title?: ?$ElementType<Scalars, 'String'>,
    tags?: ?Array<?$ElementType<Scalars, 'String'>>,
    links?: ?Array<?ProjectsJsonLinks>,
  |},
|};

export type ProjectsJsonConnection = {|
  __typename?: 'ProjectsJsonConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<ProjectsJsonEdge>,
  nodes: Array<ProjectsJson>,
  pageInfo: PageInfo,
  distinct: Array<$ElementType<Scalars, 'String'>>,
  group: Array<ProjectsJsonGroupConnection>,
|};

export type ProjectsJsonConnectionDistinctArgs = {|
  field: ProjectsJsonFieldsEnum,
|};

export type ProjectsJsonConnectionGroupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: ProjectsJsonFieldsEnum,
|};

export type ProjectsJsonEdge = {|
  __typename?: 'ProjectsJsonEdge',
  next?: ?ProjectsJson,
  node: ProjectsJson,
  previous?: ?ProjectsJson,
|};

export const ProjectsJsonFieldsEnumValues = Object.freeze({
  Id: 'id',
  ParentId: 'parent___id',
  ParentParentId: 'parent___parent___id',
  ParentParentParentId: 'parent___parent___parent___id',
  ParentParentParentChildren: 'parent___parent___parent___children',
  ParentParentChildren: 'parent___parent___children',
  ParentParentChildrenId: 'parent___parent___children___id',
  ParentParentChildrenChildren: 'parent___parent___children___children',
  ParentParentInternalContent: 'parent___parent___internal___content',
  ParentParentInternalContentDigest: 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription: 'parent___parent___internal___description',
  ParentParentInternalFieldOwners: 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType: 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType: 'parent___parent___internal___mediaType',
  ParentParentInternalOwner: 'parent___parent___internal___owner',
  ParentParentInternalType: 'parent___parent___internal___type',
  ParentChildren: 'parent___children',
  ParentChildrenId: 'parent___children___id',
  ParentChildrenParentId: 'parent___children___parent___id',
  ParentChildrenParentChildren: 'parent___children___parent___children',
  ParentChildrenChildren: 'parent___children___children',
  ParentChildrenChildrenId: 'parent___children___children___id',
  ParentChildrenChildrenChildren: 'parent___children___children___children',
  ParentChildrenInternalContent: 'parent___children___internal___content',
  ParentChildrenInternalContentDigest: 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription: 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners: 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType: 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType: 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner: 'parent___children___internal___owner',
  ParentChildrenInternalType: 'parent___children___internal___type',
  ParentInternalContent: 'parent___internal___content',
  ParentInternalContentDigest: 'parent___internal___contentDigest',
  ParentInternalDescription: 'parent___internal___description',
  ParentInternalFieldOwners: 'parent___internal___fieldOwners',
  ParentInternalIgnoreType: 'parent___internal___ignoreType',
  ParentInternalMediaType: 'parent___internal___mediaType',
  ParentInternalOwner: 'parent___internal___owner',
  ParentInternalType: 'parent___internal___type',
  Children: 'children',
  ChildrenId: 'children___id',
  ChildrenParentId: 'children___parent___id',
  ChildrenParentParentId: 'children___parent___parent___id',
  ChildrenParentParentChildren: 'children___parent___parent___children',
  ChildrenParentChildren: 'children___parent___children',
  ChildrenParentChildrenId: 'children___parent___children___id',
  ChildrenParentChildrenChildren: 'children___parent___children___children',
  ChildrenParentInternalContent: 'children___parent___internal___content',
  ChildrenParentInternalContentDigest: 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription: 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners: 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType: 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType: 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner: 'children___parent___internal___owner',
  ChildrenParentInternalType: 'children___parent___internal___type',
  ChildrenChildren: 'children___children',
  ChildrenChildrenId: 'children___children___id',
  ChildrenChildrenParentId: 'children___children___parent___id',
  ChildrenChildrenParentChildren: 'children___children___parent___children',
  ChildrenChildrenChildren: 'children___children___children',
  ChildrenChildrenChildrenId: 'children___children___children___id',
  ChildrenChildrenChildrenChildren: 'children___children___children___children',
  ChildrenChildrenInternalContent: 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest: 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription: 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners: 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType: 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType: 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner: 'children___children___internal___owner',
  ChildrenChildrenInternalType: 'children___children___internal___type',
  ChildrenInternalContent: 'children___internal___content',
  ChildrenInternalContentDigest: 'children___internal___contentDigest',
  ChildrenInternalDescription: 'children___internal___description',
  ChildrenInternalFieldOwners: 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType: 'children___internal___ignoreType',
  ChildrenInternalMediaType: 'children___internal___mediaType',
  ChildrenInternalOwner: 'children___internal___owner',
  ChildrenInternalType: 'children___internal___type',
  InternalContent: 'internal___content',
  InternalContentDigest: 'internal___contentDigest',
  InternalDescription: 'internal___description',
  InternalFieldOwners: 'internal___fieldOwners',
  InternalIgnoreType: 'internal___ignoreType',
  InternalMediaType: 'internal___mediaType',
  InternalOwner: 'internal___owner',
  InternalType: 'internal___type',
  Name: 'name',
  Title: 'title',
  Tags: 'tags',
  Links: 'links',
  LinksIcon: 'links___icon',
  LinksLink: 'links___link',
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
  __typename?: 'ProjectsJsonGroupConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<ProjectsJsonEdge>,
  nodes: Array<ProjectsJson>,
  pageInfo: PageInfo,
  field: $ElementType<Scalars, 'String'>,
  fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type ProjectsJsonLinks = {|
  __typename?: 'ProjectsJsonLinks',
  icon?: ?$ElementType<Scalars, 'String'>,
  link?: ?$ElementType<Scalars, 'String'>,
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
  __typename?: 'Query',
  file?: ?File,
  allFile: FileConnection,
  directory?: ?Directory,
  allDirectory: DirectoryConnection,
  sitePage?: ?SitePage,
  allSitePage: SitePageConnection,
  navItemsJson?: ?NavItemsJson,
  allNavItemsJson: NavItemsJsonConnection,
  iconLinksJson?: ?IconLinksJson,
  allIconLinksJson: IconLinksJsonConnection,
  aboutMeIconJson?: ?AboutMeIconJson,
  allAboutMeIconJson: AboutMeIconJsonConnection,
  projectsJson?: ?ProjectsJson,
  allProjectsJson: ProjectsJsonConnection,
  site?: ?Site,
  allSite: SiteConnection,
  sitePlugin?: ?SitePlugin,
  allSitePlugin: SitePluginConnection,
|};

export type QueryFileArgs = {|
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
  childrenProjectsJson?: ?ProjectsJsonFilterListInput,
  childrenAboutMeIconJson?: ?AboutMeIconJsonFilterListInput,
  childrenIconLinksJson?: ?IconLinksJsonFilterListInput,
  childrenNavItemsJson?: ?NavItemsJsonFilterListInput,
|};

export type QueryAllFileArgs = {|
  filter?: ?FileFilterInput,
  sort?: ?FileSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type QueryDirectoryArgs = {|
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

export type QueryAllDirectoryArgs = {|
  filter?: ?DirectoryFilterInput,
  sort?: ?DirectorySortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type QuerySitePageArgs = {|
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

export type QueryAllSitePageArgs = {|
  filter?: ?SitePageFilterInput,
  sort?: ?SitePageSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type QueryNavItemsJsonArgs = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  title?: ?StringQueryOperatorInput,
  path?: ?StringQueryOperatorInput,
  link?: ?StringQueryOperatorInput,
|};

export type QueryAllNavItemsJsonArgs = {|
  filter?: ?NavItemsJsonFilterInput,
  sort?: ?NavItemsJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type QueryIconLinksJsonArgs = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  name?: ?StringQueryOperatorInput,
  icon?: ?StringQueryOperatorInput,
  url?: ?StringQueryOperatorInput,
|};

export type QueryAllIconLinksJsonArgs = {|
  filter?: ?IconLinksJsonFilterInput,
  sort?: ?IconLinksJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type QueryAboutMeIconJsonArgs = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  name?: ?StringQueryOperatorInput,
  title?: ?StringQueryOperatorInput,
  text?: ?StringQueryOperatorInput,
|};

export type QueryAllAboutMeIconJsonArgs = {|
  filter?: ?AboutMeIconJsonFilterInput,
  sort?: ?AboutMeIconJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type QueryProjectsJsonArgs = {|
  id?: ?StringQueryOperatorInput,
  parent?: ?NodeFilterInput,
  children?: ?NodeFilterListInput,
  internal?: ?InternalFilterInput,
  name?: ?StringQueryOperatorInput,
  title?: ?StringQueryOperatorInput,
  tags?: ?StringQueryOperatorInput,
  links?: ?ProjectsJsonLinksFilterListInput,
|};

export type QueryAllProjectsJsonArgs = {|
  filter?: ?ProjectsJsonFilterInput,
  sort?: ?ProjectsJsonSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type QuerySiteArgs = {|
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

export type QueryAllSiteArgs = {|
  filter?: ?SiteFilterInput,
  sort?: ?SiteSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type QuerySitePluginArgs = {|
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

export type QueryAllSitePluginArgs = {|
  filter?: ?SitePluginFilterInput,
  sort?: ?SitePluginSortInput,
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type Site = {|
  ...Node,
  ...{|
    __typename?: 'Site',
    id: $ElementType<Scalars, 'ID'>,
    parent?: ?Node,
    children: Array<Node>,
    internal: Internal,
    siteMetadata?: ?SiteSiteMetadata,
    port?: ?$ElementType<Scalars, 'Int'>,
    host?: ?$ElementType<Scalars, 'String'>,
    polyfill?: ?$ElementType<Scalars, 'Boolean'>,
    pathPrefix?: ?$ElementType<Scalars, 'String'>,
    buildTime?: ?$ElementType<Scalars, 'Date'>,
  |},
|};

export type SiteBuildTimeArgs = {|
  formatString?: ?$ElementType<Scalars, 'String'>,
  fromNow?: ?$ElementType<Scalars, 'Boolean'>,
  difference?: ?$ElementType<Scalars, 'String'>,
  locale?: ?$ElementType<Scalars, 'String'>,
|};

export type SiteConnection = {|
  __typename?: 'SiteConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<$ElementType<Scalars, 'String'>>,
  group: Array<SiteGroupConnection>,
|};

export type SiteConnectionDistinctArgs = {|
  field: SiteFieldsEnum,
|};

export type SiteConnectionGroupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: SiteFieldsEnum,
|};

export type SiteEdge = {|
  __typename?: 'SiteEdge',
  next?: ?Site,
  node: Site,
  previous?: ?Site,
|};

export const SiteFieldsEnumValues = Object.freeze({
  Id: 'id',
  ParentId: 'parent___id',
  ParentParentId: 'parent___parent___id',
  ParentParentParentId: 'parent___parent___parent___id',
  ParentParentParentChildren: 'parent___parent___parent___children',
  ParentParentChildren: 'parent___parent___children',
  ParentParentChildrenId: 'parent___parent___children___id',
  ParentParentChildrenChildren: 'parent___parent___children___children',
  ParentParentInternalContent: 'parent___parent___internal___content',
  ParentParentInternalContentDigest: 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription: 'parent___parent___internal___description',
  ParentParentInternalFieldOwners: 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType: 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType: 'parent___parent___internal___mediaType',
  ParentParentInternalOwner: 'parent___parent___internal___owner',
  ParentParentInternalType: 'parent___parent___internal___type',
  ParentChildren: 'parent___children',
  ParentChildrenId: 'parent___children___id',
  ParentChildrenParentId: 'parent___children___parent___id',
  ParentChildrenParentChildren: 'parent___children___parent___children',
  ParentChildrenChildren: 'parent___children___children',
  ParentChildrenChildrenId: 'parent___children___children___id',
  ParentChildrenChildrenChildren: 'parent___children___children___children',
  ParentChildrenInternalContent: 'parent___children___internal___content',
  ParentChildrenInternalContentDigest: 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription: 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners: 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType: 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType: 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner: 'parent___children___internal___owner',
  ParentChildrenInternalType: 'parent___children___internal___type',
  ParentInternalContent: 'parent___internal___content',
  ParentInternalContentDigest: 'parent___internal___contentDigest',
  ParentInternalDescription: 'parent___internal___description',
  ParentInternalFieldOwners: 'parent___internal___fieldOwners',
  ParentInternalIgnoreType: 'parent___internal___ignoreType',
  ParentInternalMediaType: 'parent___internal___mediaType',
  ParentInternalOwner: 'parent___internal___owner',
  ParentInternalType: 'parent___internal___type',
  Children: 'children',
  ChildrenId: 'children___id',
  ChildrenParentId: 'children___parent___id',
  ChildrenParentParentId: 'children___parent___parent___id',
  ChildrenParentParentChildren: 'children___parent___parent___children',
  ChildrenParentChildren: 'children___parent___children',
  ChildrenParentChildrenId: 'children___parent___children___id',
  ChildrenParentChildrenChildren: 'children___parent___children___children',
  ChildrenParentInternalContent: 'children___parent___internal___content',
  ChildrenParentInternalContentDigest: 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription: 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners: 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType: 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType: 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner: 'children___parent___internal___owner',
  ChildrenParentInternalType: 'children___parent___internal___type',
  ChildrenChildren: 'children___children',
  ChildrenChildrenId: 'children___children___id',
  ChildrenChildrenParentId: 'children___children___parent___id',
  ChildrenChildrenParentChildren: 'children___children___parent___children',
  ChildrenChildrenChildren: 'children___children___children',
  ChildrenChildrenChildrenId: 'children___children___children___id',
  ChildrenChildrenChildrenChildren: 'children___children___children___children',
  ChildrenChildrenInternalContent: 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest: 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription: 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners: 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType: 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType: 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner: 'children___children___internal___owner',
  ChildrenChildrenInternalType: 'children___children___internal___type',
  ChildrenInternalContent: 'children___internal___content',
  ChildrenInternalContentDigest: 'children___internal___contentDigest',
  ChildrenInternalDescription: 'children___internal___description',
  ChildrenInternalFieldOwners: 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType: 'children___internal___ignoreType',
  ChildrenInternalMediaType: 'children___internal___mediaType',
  ChildrenInternalOwner: 'children___internal___owner',
  ChildrenInternalType: 'children___internal___type',
  InternalContent: 'internal___content',
  InternalContentDigest: 'internal___contentDigest',
  InternalDescription: 'internal___description',
  InternalFieldOwners: 'internal___fieldOwners',
  InternalIgnoreType: 'internal___ignoreType',
  InternalMediaType: 'internal___mediaType',
  InternalOwner: 'internal___owner',
  InternalType: 'internal___type',
  SiteMetadataTitle: 'siteMetadata___title',
  SiteMetadataAuthor: 'siteMetadata___author',
  SiteMetadataDescription: 'siteMetadata___description',
  SiteMetadataUrl: 'siteMetadata___url',
  SiteMetadataImage: 'siteMetadata___image',
  SiteMetadataSiteUrl: 'siteMetadata___siteUrl',
  Port: 'port',
  Host: 'host',
  Polyfill: 'polyfill',
  PathPrefix: 'pathPrefix',
  BuildTime: 'buildTime',
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
  __typename?: 'SiteGroupConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: $ElementType<Scalars, 'String'>,
  fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePage = {|
  ...Node,
  ...{|
    __typename?: 'SitePage',
    path: $ElementType<Scalars, 'String'>,
    component: $ElementType<Scalars, 'String'>,
    internalComponentName: $ElementType<Scalars, 'String'>,
    componentChunkName: $ElementType<Scalars, 'String'>,
    matchPath?: ?$ElementType<Scalars, 'String'>,
    id: $ElementType<Scalars, 'ID'>,
    parent?: ?Node,
    children: Array<Node>,
    internal: Internal,
    isCreatedByStatefulCreatePages?: ?$ElementType<Scalars, 'Boolean'>,
    pluginCreator?: ?SitePlugin,
    pluginCreatorId?: ?$ElementType<Scalars, 'String'>,
    componentPath?: ?$ElementType<Scalars, 'String'>,
  |},
|};

export type SitePageConnection = {|
  __typename?: 'SitePageConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<$ElementType<Scalars, 'String'>>,
  group: Array<SitePageGroupConnection>,
|};

export type SitePageConnectionDistinctArgs = {|
  field: SitePageFieldsEnum,
|};

export type SitePageConnectionGroupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: SitePageFieldsEnum,
|};

export type SitePageEdge = {|
  __typename?: 'SitePageEdge',
  next?: ?SitePage,
  node: SitePage,
  previous?: ?SitePage,
|};

export const SitePageFieldsEnumValues = Object.freeze({
  Path: 'path',
  Component: 'component',
  InternalComponentName: 'internalComponentName',
  ComponentChunkName: 'componentChunkName',
  MatchPath: 'matchPath',
  Id: 'id',
  ParentId: 'parent___id',
  ParentParentId: 'parent___parent___id',
  ParentParentParentId: 'parent___parent___parent___id',
  ParentParentParentChildren: 'parent___parent___parent___children',
  ParentParentChildren: 'parent___parent___children',
  ParentParentChildrenId: 'parent___parent___children___id',
  ParentParentChildrenChildren: 'parent___parent___children___children',
  ParentParentInternalContent: 'parent___parent___internal___content',
  ParentParentInternalContentDigest: 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription: 'parent___parent___internal___description',
  ParentParentInternalFieldOwners: 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType: 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType: 'parent___parent___internal___mediaType',
  ParentParentInternalOwner: 'parent___parent___internal___owner',
  ParentParentInternalType: 'parent___parent___internal___type',
  ParentChildren: 'parent___children',
  ParentChildrenId: 'parent___children___id',
  ParentChildrenParentId: 'parent___children___parent___id',
  ParentChildrenParentChildren: 'parent___children___parent___children',
  ParentChildrenChildren: 'parent___children___children',
  ParentChildrenChildrenId: 'parent___children___children___id',
  ParentChildrenChildrenChildren: 'parent___children___children___children',
  ParentChildrenInternalContent: 'parent___children___internal___content',
  ParentChildrenInternalContentDigest: 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription: 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners: 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType: 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType: 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner: 'parent___children___internal___owner',
  ParentChildrenInternalType: 'parent___children___internal___type',
  ParentInternalContent: 'parent___internal___content',
  ParentInternalContentDigest: 'parent___internal___contentDigest',
  ParentInternalDescription: 'parent___internal___description',
  ParentInternalFieldOwners: 'parent___internal___fieldOwners',
  ParentInternalIgnoreType: 'parent___internal___ignoreType',
  ParentInternalMediaType: 'parent___internal___mediaType',
  ParentInternalOwner: 'parent___internal___owner',
  ParentInternalType: 'parent___internal___type',
  Children: 'children',
  ChildrenId: 'children___id',
  ChildrenParentId: 'children___parent___id',
  ChildrenParentParentId: 'children___parent___parent___id',
  ChildrenParentParentChildren: 'children___parent___parent___children',
  ChildrenParentChildren: 'children___parent___children',
  ChildrenParentChildrenId: 'children___parent___children___id',
  ChildrenParentChildrenChildren: 'children___parent___children___children',
  ChildrenParentInternalContent: 'children___parent___internal___content',
  ChildrenParentInternalContentDigest: 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription: 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners: 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType: 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType: 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner: 'children___parent___internal___owner',
  ChildrenParentInternalType: 'children___parent___internal___type',
  ChildrenChildren: 'children___children',
  ChildrenChildrenId: 'children___children___id',
  ChildrenChildrenParentId: 'children___children___parent___id',
  ChildrenChildrenParentChildren: 'children___children___parent___children',
  ChildrenChildrenChildren: 'children___children___children',
  ChildrenChildrenChildrenId: 'children___children___children___id',
  ChildrenChildrenChildrenChildren: 'children___children___children___children',
  ChildrenChildrenInternalContent: 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest: 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription: 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners: 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType: 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType: 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner: 'children___children___internal___owner',
  ChildrenChildrenInternalType: 'children___children___internal___type',
  ChildrenInternalContent: 'children___internal___content',
  ChildrenInternalContentDigest: 'children___internal___contentDigest',
  ChildrenInternalDescription: 'children___internal___description',
  ChildrenInternalFieldOwners: 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType: 'children___internal___ignoreType',
  ChildrenInternalMediaType: 'children___internal___mediaType',
  ChildrenInternalOwner: 'children___internal___owner',
  ChildrenInternalType: 'children___internal___type',
  InternalContent: 'internal___content',
  InternalContentDigest: 'internal___contentDigest',
  InternalDescription: 'internal___description',
  InternalFieldOwners: 'internal___fieldOwners',
  InternalIgnoreType: 'internal___ignoreType',
  InternalMediaType: 'internal___mediaType',
  InternalOwner: 'internal___owner',
  InternalType: 'internal___type',
  IsCreatedByStatefulCreatePages: 'isCreatedByStatefulCreatePages',
  PluginCreatorId: 'pluginCreator___id',
  PluginCreatorParentId: 'pluginCreator___parent___id',
  PluginCreatorParentParentId: 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren: 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren: 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId: 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren: 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent: 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest: 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription: 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners: 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType: 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType: 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner: 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType: 'pluginCreator___parent___internal___type',
  PluginCreatorChildren: 'pluginCreator___children',
  PluginCreatorChildrenId: 'pluginCreator___children___id',
  PluginCreatorChildrenParentId: 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren: 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren: 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId: 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren: 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent: 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest: 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription: 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners: 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType: 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType: 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner: 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType: 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent: 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest: 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription: 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners: 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType: 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType: 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner: 'pluginCreator___internal___owner',
  PluginCreatorInternalType: 'pluginCreator___internal___type',
  PluginCreatorResolve: 'pluginCreator___resolve',
  PluginCreatorName: 'pluginCreator___name',
  PluginCreatorVersion: 'pluginCreator___version',
  PluginCreatorPluginOptionsSrc: 'pluginCreator___pluginOptions___src',
  PluginCreatorPluginOptionsPages: 'pluginCreator___pluginOptions___pages',
  PluginCreatorPluginOptionsImages: 'pluginCreator___pluginOptions___images',
  PluginCreatorPluginOptionsComponents: 'pluginCreator___pluginOptions___components',
  PluginCreatorPluginOptionsPath: 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName: 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPathCheck: 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs: 'pluginCreator___nodeAPIs',
  PluginCreatorSsrApIs: 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath: 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName: 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription: 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion: 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain: 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor: 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense: 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies: 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName: 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion: 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies: 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName: 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion: 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies: 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName: 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion: 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords: 'pluginCreator___packageJson___keywords',
  PluginCreatorId: 'pluginCreatorId',
  ComponentPath: 'componentPath',
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
  __typename?: 'SitePageGroupConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: $ElementType<Scalars, 'String'>,
  fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePageSortInput = {|
  fields?: ?Array<?SitePageFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type SitePlugin = {|
  ...Node,
  ...{|
    __typename?: 'SitePlugin',
    id: $ElementType<Scalars, 'ID'>,
    parent?: ?Node,
    children: Array<Node>,
    internal: Internal,
    resolve?: ?$ElementType<Scalars, 'String'>,
    name?: ?$ElementType<Scalars, 'String'>,
    version?: ?$ElementType<Scalars, 'String'>,
    pluginOptions?: ?SitePluginPluginOptions,
    nodeAPIs?: ?Array<?$ElementType<Scalars, 'String'>>,
    ssrAPIs?: ?Array<?$ElementType<Scalars, 'String'>>,
    pluginFilepath?: ?$ElementType<Scalars, 'String'>,
    packageJson?: ?SitePluginPackageJson,
  |},
|};

export type SitePluginConnection = {|
  __typename?: 'SitePluginConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<$ElementType<Scalars, 'String'>>,
  group: Array<SitePluginGroupConnection>,
|};

export type SitePluginConnectionDistinctArgs = {|
  field: SitePluginFieldsEnum,
|};

export type SitePluginConnectionGroupArgs = {|
  skip?: ?$ElementType<Scalars, 'Int'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
  field: SitePluginFieldsEnum,
|};

export type SitePluginEdge = {|
  __typename?: 'SitePluginEdge',
  next?: ?SitePlugin,
  node: SitePlugin,
  previous?: ?SitePlugin,
|};

export const SitePluginFieldsEnumValues = Object.freeze({
  Id: 'id',
  ParentId: 'parent___id',
  ParentParentId: 'parent___parent___id',
  ParentParentParentId: 'parent___parent___parent___id',
  ParentParentParentChildren: 'parent___parent___parent___children',
  ParentParentChildren: 'parent___parent___children',
  ParentParentChildrenId: 'parent___parent___children___id',
  ParentParentChildrenChildren: 'parent___parent___children___children',
  ParentParentInternalContent: 'parent___parent___internal___content',
  ParentParentInternalContentDigest: 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription: 'parent___parent___internal___description',
  ParentParentInternalFieldOwners: 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType: 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType: 'parent___parent___internal___mediaType',
  ParentParentInternalOwner: 'parent___parent___internal___owner',
  ParentParentInternalType: 'parent___parent___internal___type',
  ParentChildren: 'parent___children',
  ParentChildrenId: 'parent___children___id',
  ParentChildrenParentId: 'parent___children___parent___id',
  ParentChildrenParentChildren: 'parent___children___parent___children',
  ParentChildrenChildren: 'parent___children___children',
  ParentChildrenChildrenId: 'parent___children___children___id',
  ParentChildrenChildrenChildren: 'parent___children___children___children',
  ParentChildrenInternalContent: 'parent___children___internal___content',
  ParentChildrenInternalContentDigest: 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription: 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners: 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType: 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType: 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner: 'parent___children___internal___owner',
  ParentChildrenInternalType: 'parent___children___internal___type',
  ParentInternalContent: 'parent___internal___content',
  ParentInternalContentDigest: 'parent___internal___contentDigest',
  ParentInternalDescription: 'parent___internal___description',
  ParentInternalFieldOwners: 'parent___internal___fieldOwners',
  ParentInternalIgnoreType: 'parent___internal___ignoreType',
  ParentInternalMediaType: 'parent___internal___mediaType',
  ParentInternalOwner: 'parent___internal___owner',
  ParentInternalType: 'parent___internal___type',
  Children: 'children',
  ChildrenId: 'children___id',
  ChildrenParentId: 'children___parent___id',
  ChildrenParentParentId: 'children___parent___parent___id',
  ChildrenParentParentChildren: 'children___parent___parent___children',
  ChildrenParentChildren: 'children___parent___children',
  ChildrenParentChildrenId: 'children___parent___children___id',
  ChildrenParentChildrenChildren: 'children___parent___children___children',
  ChildrenParentInternalContent: 'children___parent___internal___content',
  ChildrenParentInternalContentDigest: 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription: 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners: 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType: 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType: 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner: 'children___parent___internal___owner',
  ChildrenParentInternalType: 'children___parent___internal___type',
  ChildrenChildren: 'children___children',
  ChildrenChildrenId: 'children___children___id',
  ChildrenChildrenParentId: 'children___children___parent___id',
  ChildrenChildrenParentChildren: 'children___children___parent___children',
  ChildrenChildrenChildren: 'children___children___children',
  ChildrenChildrenChildrenId: 'children___children___children___id',
  ChildrenChildrenChildrenChildren: 'children___children___children___children',
  ChildrenChildrenInternalContent: 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest: 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription: 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners: 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType: 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType: 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner: 'children___children___internal___owner',
  ChildrenChildrenInternalType: 'children___children___internal___type',
  ChildrenInternalContent: 'children___internal___content',
  ChildrenInternalContentDigest: 'children___internal___contentDigest',
  ChildrenInternalDescription: 'children___internal___description',
  ChildrenInternalFieldOwners: 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType: 'children___internal___ignoreType',
  ChildrenInternalMediaType: 'children___internal___mediaType',
  ChildrenInternalOwner: 'children___internal___owner',
  ChildrenInternalType: 'children___internal___type',
  InternalContent: 'internal___content',
  InternalContentDigest: 'internal___contentDigest',
  InternalDescription: 'internal___description',
  InternalFieldOwners: 'internal___fieldOwners',
  InternalIgnoreType: 'internal___ignoreType',
  InternalMediaType: 'internal___mediaType',
  InternalOwner: 'internal___owner',
  InternalType: 'internal___type',
  Resolve: 'resolve',
  Name: 'name',
  Version: 'version',
  PluginOptionsSrc: 'pluginOptions___src',
  PluginOptionsPages: 'pluginOptions___pages',
  PluginOptionsImages: 'pluginOptions___images',
  PluginOptionsComponents: 'pluginOptions___components',
  PluginOptionsPath: 'pluginOptions___path',
  PluginOptionsName: 'pluginOptions___name',
  PluginOptionsPathCheck: 'pluginOptions___pathCheck',
  NodeApIs: 'nodeAPIs',
  SsrApIs: 'ssrAPIs',
  PluginFilepath: 'pluginFilepath',
  PackageJsonName: 'packageJson___name',
  PackageJsonDescription: 'packageJson___description',
  PackageJsonVersion: 'packageJson___version',
  PackageJsonMain: 'packageJson___main',
  PackageJsonAuthor: 'packageJson___author',
  PackageJsonLicense: 'packageJson___license',
  PackageJsonDependencies: 'packageJson___dependencies',
  PackageJsonDependenciesName: 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion: 'packageJson___dependencies___version',
  PackageJsonDevDependencies: 'packageJson___devDependencies',
  PackageJsonDevDependenciesName: 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion: 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies: 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName: 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion: 'packageJson___peerDependencies___version',
  PackageJsonKeywords: 'packageJson___keywords',
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
  __typename?: 'SitePluginGroupConnection',
  totalCount: $ElementType<Scalars, 'Int'>,
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: $ElementType<Scalars, 'String'>,
  fieldValue?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePluginPackageJson = {|
  __typename?: 'SitePluginPackageJson',
  name?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  version?: ?$ElementType<Scalars, 'String'>,
  main?: ?$ElementType<Scalars, 'String'>,
  author?: ?$ElementType<Scalars, 'String'>,
  license?: ?$ElementType<Scalars, 'String'>,
  dependencies?: ?Array<?SitePluginPackageJsonDependencies>,
  devDependencies?: ?Array<?SitePluginPackageJsonDevDependencies>,
  peerDependencies?: ?Array<?SitePluginPackageJsonPeerDependencies>,
  keywords?: ?Array<?$ElementType<Scalars, 'String'>>,
|};

export type SitePluginPackageJsonDependencies = {|
  __typename?: 'SitePluginPackageJsonDependencies',
  name?: ?$ElementType<Scalars, 'String'>,
  version?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePluginPackageJsonDependenciesFilterInput = {|
  name?: ?StringQueryOperatorInput,
  version?: ?StringQueryOperatorInput,
|};

export type SitePluginPackageJsonDependenciesFilterListInput = {|
  elemMatch?: ?SitePluginPackageJsonDependenciesFilterInput,
|};

export type SitePluginPackageJsonDevDependencies = {|
  __typename?: 'SitePluginPackageJsonDevDependencies',
  name?: ?$ElementType<Scalars, 'String'>,
  version?: ?$ElementType<Scalars, 'String'>,
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
  author?: ?StringQueryOperatorInput,
  license?: ?StringQueryOperatorInput,
  dependencies?: ?SitePluginPackageJsonDependenciesFilterListInput,
  devDependencies?: ?SitePluginPackageJsonDevDependenciesFilterListInput,
  peerDependencies?: ?SitePluginPackageJsonPeerDependenciesFilterListInput,
  keywords?: ?StringQueryOperatorInput,
|};

export type SitePluginPackageJsonPeerDependencies = {|
  __typename?: 'SitePluginPackageJsonPeerDependencies',
  name?: ?$ElementType<Scalars, 'String'>,
  version?: ?$ElementType<Scalars, 'String'>,
|};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {|
  name?: ?StringQueryOperatorInput,
  version?: ?StringQueryOperatorInput,
|};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {|
  elemMatch?: ?SitePluginPackageJsonPeerDependenciesFilterInput,
|};

export type SitePluginPluginOptions = {|
  __typename?: 'SitePluginPluginOptions',
  src?: ?$ElementType<Scalars, 'String'>,
  pages?: ?$ElementType<Scalars, 'String'>,
  images?: ?$ElementType<Scalars, 'String'>,
  components?: ?$ElementType<Scalars, 'String'>,
  path?: ?$ElementType<Scalars, 'String'>,
  name?: ?$ElementType<Scalars, 'String'>,
  pathCheck?: ?$ElementType<Scalars, 'Boolean'>,
|};

export type SitePluginPluginOptionsFilterInput = {|
  src?: ?StringQueryOperatorInput,
  pages?: ?StringQueryOperatorInput,
  images?: ?StringQueryOperatorInput,
  components?: ?StringQueryOperatorInput,
  path?: ?StringQueryOperatorInput,
  name?: ?StringQueryOperatorInput,
  pathCheck?: ?BooleanQueryOperatorInput,
|};

export type SitePluginSortInput = {|
  fields?: ?Array<?SitePluginFieldsEnum>,
  order?: ?Array<?SortOrderEnum>,
|};

export type SiteSiteMetadata = {|
  __typename?: 'SiteSiteMetadata',
  title?: ?$ElementType<Scalars, 'String'>,
  author?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  image?: ?$ElementType<Scalars, 'String'>,
  siteUrl?: ?$ElementType<Scalars, 'String'>,
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
  Asc: 'ASC',
  Desc: 'DESC',
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

export type PagesQueryQueryVariables = {};

export type PagesQueryQuery = {
  ...{ __typename?: 'Query' },
  ...{|
    allSitePage: {
      ...{ __typename?: 'SitePageConnection' },
      ...{|
        nodes: Array<{
          ...{ __typename?: 'SitePage' },
          ...$Pick<SitePage, {| path: * |}>,
        }>,
      |},
    },
  |},
};

export type AboutMeIconQueryQueryVariables = {};

export type AboutMeIconQueryQuery = {
  ...{ __typename?: 'Query' },
  ...{|
    allAboutMeIconJson: {
      ...{ __typename?: 'AboutMeIconJsonConnection' },
      ...{|
        nodes: Array<{
          ...{ __typename?: 'AboutMeIconJson' },
          ...$Pick<AboutMeIconJson, {| name: *, title: *, text: * |}>,
        }>,
      |},
    },
  |},
};

export type IconLinkQueryQueryVariables = {};

export type IconLinkQueryQuery = {
  ...{ __typename?: 'Query' },
  ...{|
    allIconLinksJson: {
      ...{ __typename?: 'IconLinksJsonConnection' },
      ...{|
        nodes: Array<{
          ...{ __typename?: 'IconLinksJson' },
          ...$Pick<IconLinksJson, {| icon: *, name: *, url: * |}>,
        }>,
      |},
    },
  |},
};

export type Unnamed_1_QueryVariables = {};

export type Unnamed_1_Query = {
  ...{ __typename?: 'Query' },
  ...{|
    allProjectsJson: {
      ...{ __typename?: 'ProjectsJsonConnection' },
      ...{|
        nodes: Array<{
          ...{ __typename?: 'ProjectsJson' },
          ...$Pick<ProjectsJson, {| name: *, title: *, tags: * |}>,
          ...{|
            links: ?Array<?{
              ...{ __typename?: 'ProjectsJsonLinks' },
              ...$Pick<ProjectsJsonLinks, {| icon: *, link: * |}>,
            }>,
          |},
        }>,
      |},
    },
  |},
};

export type SeoQueryVariables = {};

export type SeoQuery = {
  ...{ __typename?: 'Query' },
  ...{|
    site: ?{
      ...{ __typename?: 'Site' },
      ...{|
        siteMetadata: ?{
          ...{ __typename?: 'SiteSiteMetadata' },
          ...$Pick<SiteSiteMetadata, {| title: *, url: *, image: * |}>,
          ...{| description: $ElementType<SiteSiteMetadata, 'description'> |},
        },
      |},
    },
  |},
};

export type NavbarQueryQueryVariables = {};

export type NavbarQueryQuery = {
  ...{ __typename?: 'Query' },
  ...{|
    allNavItemsJson: {
      ...{ __typename?: 'NavItemsJsonConnection' },
      ...{|
        nodes: Array<{
          ...{ __typename?: 'NavItemsJson' },
          ...$Pick<NavItemsJson, {| path: *, link: *, title: * |}>,
        }>,
      |},
    },
  |},
};
