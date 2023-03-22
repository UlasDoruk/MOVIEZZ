function TitleBar(props) {
  
  return (
    <div className="flex justify-center text-black  lg:mt-10 mb-3 opacity-30 ">
      <h1 className="font-mono lg:text-2xl text-base mr-2">{props.title}</h1>
      
    </div>
  );
}

export default TitleBar;
