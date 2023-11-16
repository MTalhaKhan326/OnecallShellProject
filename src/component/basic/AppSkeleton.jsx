import Skeleton from "react-loading-skeleton";

function AppSkeleton({
  width = 'w-full',
  count = 1,
  height = "30px"
}) {
  return (  
    <div className={`${width}`}>
      <Skeleton count={count} height={height} />
    </div>
  );
}

export default AppSkeleton;