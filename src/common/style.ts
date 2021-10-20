export const style = {
  productSearchListImage: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
  } as React.CSSProperties,

  textPointer: {
    color: "#1868b7",
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
  productThumbnailStack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productBuyButtons: {
    transition: "transform .2s",
    "&:hover": {
      msTransform: "scale(1.075)",
      WebkitTransform: "scale(1.075)",
      transform: "scale(1.075)",
    },
  },
  searchBox: {
    color: "white",
    cursor: "pointer",
    transition: "transform .2s",
    "&:hover": {
      msTransform: "scale(1.075)",
      WebkitTransform: "scale(1.075)",
      transform: "scale(1.075)",
    },
  },
  sideNav: {
    "&:hover": {
      background: "#f50057",
      color: "white",
    },
  },
};
