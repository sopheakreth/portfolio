const LoadingSkeleton = () => {
  return (
    <>
      <div style={{opacity: '0.5'}} className="col-md-6 placholder-wave">
        <div className="row ">
          <div className="col-md-11 card mb-0 border-0">
          <div className="card border-0" aria-hidden="true">
           <div className="m-3  placeholder-wave rounded" style={{height: '50px', width:'200px', backgroundColor: '#6c757d'}} ></div>
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
            </div>
          </div>
          </div>
          <div className="col-md-1 border-end "></div>

        </div>
      </div>

      <div style={{opacity: '0.4'}} className="col-md-6 placholder-wave">
        <div className="row ">
          <div className="col-md-12 card mb-0 border-0">
          <div className="card border-0" aria-hidden="true">
           <div className="m-3  placeholder-wave rounded" style={{height: '50px', width:'200px', backgroundColor: '#6c757d'}} ></div>
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
            </div>
          </div>
          </div>
          </div>
      </div>
      
    </>
  );
};

export default LoadingSkeleton;
