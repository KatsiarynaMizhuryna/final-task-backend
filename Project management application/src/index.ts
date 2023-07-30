import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';


(async () => {
  try {
    await mongoose.connect('mongodb+srv://PMAAdmin:qrQR28dfAFaf28fg@pmacluster01.rcbt5ie.mongodb.net/managerApp');
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Awaiting connection ...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
