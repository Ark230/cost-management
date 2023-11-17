import { call, takeLatest } from "redux-saga/effects";
import { NotificationsReplayService } from "@utils/replay-subject-instances";
import {
  popUpAllNotifications,
  allNotificationsActions,
  //   errorsHandledByAPI,
} from "./constants";
import { PayloadAction } from "@reduxjs/toolkit";
import { ExpenseManagement } from "@/domain/entities/redux/expense";

function* displayNotification(action: PayloadAction<ExpenseManagement>) {
  if (action.payload.processEnded) {
    let notificationMessage = popUpAllNotifications[action.type];

    //   const apiErrMessage = errorsHandledByAPI.find(
    //     (currError) => currError.actionType === action.type
    //   );

    //   if (apiErrMessage) errorMessage.description = apiErrMessage.storePath();

    NotificationsReplayService.setSubject({
      popUpNotificationData: {
        notificationMessage,
      },
    });

    /*
    Esto se ejecutará cuando se capture una acción de error del sagas que necesite
    un tratamiento especial mediante alguna notificación de error o éxito.
  */
    //   if (
    //     errorMessage.additionalHandling !== undefined &&
    //     typeof errorMessage.additionalHandling === "function"
    //   ) {
    //     errorMessage.additionalHandling();
    //   }
  }
}

function* watchNotifications() {
  yield takeLatest(allNotificationsActions, displayNotification);
}

export default [watchNotifications()];
