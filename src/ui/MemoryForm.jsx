import { useLocation } from "../context/LocationContext";
import Form from "./Form";

function MemoryForm() {
  const { location } = useLocation();
  console.log(location);
  if (location)
    return (
      <div>
        <Form></Form>
      </div>
    );
}

export default MemoryForm;
