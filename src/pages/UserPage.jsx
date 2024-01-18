import OldMemories from "../features/UserPage/OldMemories";
import MapUI from "../ui/MapUI";

import UseableArea from "../ui/UseableArea";
function UserPage() {
  return (
    <div className="flex flex-row justify-center  mb-10">
      <div className="w-2/6">
        <OldMemories />
      </div>
      <div className="flex w-4/6 flex-col gap-4 h-full">
        <div>
          <MapUI />
        </div>
        <div className="flex-1">
          <UseableArea />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
