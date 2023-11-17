export interface NotificationDetails {
  title: string;
  description: string;
  type: "success" | "error" | "info";
  additionalHandling?: () => void;
}

interface Notification {
  [key: string]: NotificationDetails;
}

// export const popUpErrorNotifications: Notification = {};

export const popUpSuccessNotifications: Notification = {
  "expenses/handleExpensesLoader": {
    title: "Cambio de contraseña exitoso",
    description: "Hemos actualizado tu nueva contraseña.",
    type: "success",
  },
};

// export const errorNotificationsActions: string[] = [];

export const successNotificationActions: string[] = [
  "expenses/handleExpensesLoader",
];

export const allNotificationsActions: string[] = [
  // ...errorNotificationsActions,
  ...successNotificationActions,
];

export const popUpAllNotifications = {
  // ...popUpNotificationErrors,
  ...popUpSuccessNotifications,
};
