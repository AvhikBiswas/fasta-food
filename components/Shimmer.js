const ShimmerCart = () => {



    return (
        <>
        
        <div className="shimer">
        <div className="shimer-img shine"></div>
        <div className="shimer-text shine"></div>
        <div className="shimer-text-big shine"> </div>
        </div>
        </>
    )

}
const Shimmer = () => {
    return (
      <>
       
    <div className="hero-section"></div>
    <div className="search-container"></div>
      <div className="shimmer-container">
        {/* create a new Array instance using Array() constructor and map through every element of array */}
        {Array(25).fill("").map((element, index) => {
            <h1>{index}</h1>
          return <ShimmerCart key={index}  />;
        })}
      </div>
      </>
    );
  };
export default Shimmer;
