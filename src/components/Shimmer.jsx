import { Skeleton } from "@mui/material";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="text">
        <Skeleton variant="text" sx={{ fontSize: "2.5rem" }} />
      </div>
      <div className="circular">
        <Skeleton variant="circular" width={50} height={50} />
      </div>
    </div>
  );
};

export default Shimmer;
