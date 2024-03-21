const Test = ({ children1, children2 }) => {
  return (
    <>
      <div>
        <p>children 1 should be here</p>
        {children1}
      </div>
      <div>
        <p>children 2 should be here</p>
        {children2}
      </div>
    </>
  );
};

export default Test;
