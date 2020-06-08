// @flow strict

export default function narrowConnection<Data>(
  connection: ?{|
    +edges: ?Array<{| +node: Data |}>,
  |},
): Array<Data> {
  const edges = connection?.edges;
  if (edges == null) {
    return [];
  }

  return edges.map(e => e?.node).filter(Boolean);
}
