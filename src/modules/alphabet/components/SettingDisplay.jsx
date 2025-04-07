import React from 'react';
import { motion } from 'framer-motion';

const SettingDisplay = ({ setting, letterColor }) => {
  return (
    <motion.div 
      className="p-4 bg-white rounded-lg shadow-lg"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-2 text-center" style={{ color: letterColor }}>
        Setting
      </h3>
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1582125169517-53e6192d476b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8JTYwY2FydG9vbiUyMGlsbHVzdHJhdGlvbiUyMG9mJTIwJTI0JTdCc2V0dGluZ3xlbnwwfHx8fDE3NDQwMjM5OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" 
           
          alt={setting} 
          data-image-request={`cartoon illustration of ${setting}, colorful children's illustration style`}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
          <p className="text-center font-medium">{setting}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingDisplay;