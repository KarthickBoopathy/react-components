export const style = {
  productSearchListImage: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    background: "white",
  } as React.CSSProperties,

  textPointer: {
    fontSize: "small",
    fontWeight: 450,
    color: "#3e75ab",
    cursor: "pointer",
    "&:hover": {
      color: "#1b2a38"
    },
  },
  price: {
    color: "#B12704",
    textDecoration: "none",
    cursor: "pointer",
    // "&:hover": {
    //   color: "crimson",
    // },
  },
  productGridList: {
    cursor: "pointer",
    display: "block",
    margin: "auto",
    height: 30,
    width: 30,
  },
};
