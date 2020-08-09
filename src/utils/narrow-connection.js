// @flow strict

export default function narrowConnection<Data>(
  connection: ?{|
    __typename?: *,
    edges: Array<{|
      __typename?: *,
      node: Data,
      next?: *,
      previous?: *,
    |}>,
    distinct: *,
    group: *,
    nodes: *,
    pageInfo: *,
    totalCount: *,
  |},
): Array<Data> {
  const edges = connection?.edges;
  if (edges == null) {
    return [];
  }

  return edges.map((e) => e?.node).filter(Boolean);
}
