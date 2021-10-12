export const style = {
  productSearchListImage: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
  } as React.CSSProperties,

  textPointer: {
    fontSize: "small",
    fontWeight: 450,
    color: "#3e75ab",
    cursor: "pointer",
    "&:hover": {
      color: "#1b2a38",
    },
  },
  price: {
    color: "#B12704",
    textDecoration: "none",
    cursor: "pointer",
  },
  productThumbnail: {
    width: 50,
    height: 50,
    border: "1px solid #bdbcbc",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    "&:hover": {
      border: "1px solid black",
    },
  },
  productThumbnailStack:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};
