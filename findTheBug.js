/* the issue is the old product & new product are assigned the same reference so changes affect both
solution is to use spread syntax to clone old product*/

function migrateProduct(oldProduct) {
  const newProduct = {
    ...oldProduct,
    price: oldProduct.price * 1.15,
    containers: oldProduct.containers.map((container) => {
      if (container.type === "bottle") {
        return { ...container, deposit: 0.2 };
        /* using spread syntax, 
        to copy old product containers to new product and only moify deposit's value*/
      }
      return container;
    }),
  };

  return { oldProduct, newProduct };
}
