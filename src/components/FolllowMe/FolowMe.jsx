import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import {
  githubAnimation,
  instagramAnimation,
  twitterAnimation,
} from "../../utils/animation";
import profilePic from "../../assets/profile_photo.jpg";

const FollowMe = () => {
  const dragContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div ref={dragContainerRef} className="absolute right-3 bottom-3">
      <motion.img
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => setIsVisible((prevState) => !prevState)}
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={1}
        className="w-16 h-16 object-cover rounded-full cursor-pointer shadow-lg"
        src={profilePic}
        alt="Photo"
      />

      <AnimatePresence mode="wait" initial={false}>
        {isVisible && (
          <motion.div>
            <motion.div
              onClick={() =>
                window.open("https://github.com/pritamtirpude", "_blank")
              }
              {...githubAnimation}
              className={`absolute ${
                isVisible ? "z-0" : "-z-10"
              }  bg-white flex justify-center p-2 rounded-full shadow-md cursor-pointer`}
            >
              <BsGithub className="text-dark-100" size={25} />
            </motion.div>

            <motion.div
              onClick={() =>
                window.open("https://www.instagram.com/pr.itam6519/", "_blank")
              }
              {...instagramAnimation}
              className={`absolute ${
                isVisible ? "z-0" : "-z-10"
              } bg-white flex justify-center p-2 rounded-full shadow-md cursor-pointer`}
            >
              <BsInstagram
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                size={25}
              />
            </motion.div>

            <motion.div
              onClick={() =>
                window.open("https://twitter.com/ptirpude1991", "_blank")
              }
              {...twitterAnimation}
              className={`absolute ${
                isVisible ? "z-0" : "-z-10"
              } bg-white flex justify-center p-2 rounded-full shadow-md cursor-pointer`}
            >
              <BsTwitter className="text-blue-600" size={25} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FollowMe;
