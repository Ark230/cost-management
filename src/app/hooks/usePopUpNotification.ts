import { useEffect } from "react";
import { notification } from "antd";
import { NotificationsReplayService } from "@utils/replay-subject-instances";
import { Subscription } from "rxjs";
import { NotificationDetails } from "@/infrastructure/redux-saga/notifications/constants";

const usePopUpNotification = () => {
  useEffect(() => {
    let subscription: Subscription;

    subscription = NotificationsReplayService.getSubject().subscribe(
      (incomingData: any) => {
        const hasProperty = (prop: string): boolean =>
          incomingData.hasOwnProperty(prop);

        if (hasProperty("popUpNotificationData")) {
          openNotificationWithIcon(
            incomingData.popUpNotificationData.notificationMessage
          );
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const openNotificationWithIcon = ({
    title,
    description,
    type,
  }: NotificationDetails) => {
    notification[type]({
      className: "custom-popUp-notification",
      placement: "top",
      message: title,
      duration: 2.5,
      description: description,
    });
  };
};

export default usePopUpNotification;
