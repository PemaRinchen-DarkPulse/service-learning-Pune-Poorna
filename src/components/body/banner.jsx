import React from 'react';
import { Button } from 'reactstrap';

const Banner = () => {
  return (
    <div
      className="row align-items-center bg-primary text-white rounded"
      style={{
        padding: '40px',
        backgroundImage: 'url(path-to-background-image.jpg)', // Replace with your actual background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="col-lg-7 col-md-7">
        <h3 className="display-4 fw-bold mb-3">Pune Poorna</h3>
        <h5 className="mb-4">
          Introducing Pune Poorna (An ExploreIt Company) - an all-in-one platform for virtual events of any size and type.
        </h5>
        <Button color="light" className="fw-semibold px-4 py-2" style={{ fontSize: '1.1rem' }}>
          Know More
        </Button>
      </div>

      <div className="col-lg-5 col-md-5 d-flex justify-content-center">
        {/* Replace with the actual image source */}
        <img
          src="path-to-image.jpg"
          alt="Pune Poorna"
          className="img-fluid rounded shadow"
          style={{ maxHeight: '300px', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
};

export default Banner;
