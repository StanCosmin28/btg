const Box = ({ className, children, style }) => {
  return (
    <div className={`box ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Box;
