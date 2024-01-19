import SavedMemories from "../features/UserPage/SavedMemories";
import MapUI from "../ui/MapUI";

import UseableArea from "../ui/UseableArea";
function UserPage() {
  return (
    <div className="flex flex-row justify-center  mb-10">
      <div className="w-2/6 px-8">
        <SavedMemories />
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
