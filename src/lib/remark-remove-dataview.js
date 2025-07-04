export default function remarkRemoveDataview() {
  return (tree) => {
    tree.children = tree.children.filter((node) => {
      return node.type !== 'code' || (node.lang !== 'dataview' && node.lang !== 'dataviewjs');
    });
  };
}

