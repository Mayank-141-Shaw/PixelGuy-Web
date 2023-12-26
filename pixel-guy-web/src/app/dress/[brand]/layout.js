export const BrandLayout = ({ params, children }) => {
  return (
    <section>
      Brand Name :{" "}
      <span style={{ textTransform: "uppercase", fontWeight: "bold" }}>
        {params.brand}
      </span>
      <br />
      {children}
    </section>
  );
};

export default BrandLayout;
