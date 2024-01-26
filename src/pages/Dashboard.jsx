import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="flex flex-row justify-between mt-2 gap-5 ">
      {/* <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 20 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <div className="flex justify-center text-center ">
          <img
            src="memory_map.jpg"
            alt="Memory Map"
            className="rounded-xl w-full"
          />
        </div>
      </motion.div> */}

      {/* <motion.div
        initial={{ opacity: 0, x: +20 }}
        animate={{ opacity: 1, x: -20 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <div className="flex justify-center text-center ">
          <img
            src="save_your_memories.jpg"
            alt="save your memories"
            className="rounded-xl  w-full"
          />
        </div>
      </motion.div> */}
    </div>
  );
}

export default Dashboard;
