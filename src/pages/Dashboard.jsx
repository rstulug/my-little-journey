import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-row justify-center mt-5 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 20 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <div className="flex justify-center text-center w-[50%]">
            <div>
              <img
                src="memory_map.jpg"
                alt="Memory Map"
                className="rounded-xl h-[50%] w-full"
              />
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: +20 }}
            animate={{ opacity: 1, x: -20 }}
            transition={{ delay: 1, duration: 2 }}
          >
            <div className="flex justify-center text-center w-[50%]">
              <div>
                <img
                  src="save_your_memories.jpg"
                  alt="save your memories"
                  className="rounded-xl h-[50%] w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
