function Sign({ data }) {
  return (
    <div className="w-full flex items-center justify-center">
      <img src={data.url} alt="sign" className="w-1/2"/>
    </div>
  );
}

export default Sign;
