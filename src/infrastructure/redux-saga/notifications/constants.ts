export interface NotificationDetails {
  process: string;
  title: string;
  description: string;
  type: "success" | "error" | "info";
  additionalHandling?: () => void;
}

// export const popUpErrorNotifications: Notification = {};

export const popUpSuccessNotifications: NotificationDetails[] = [
  {
    process: "updateExpense",
    title: "Gasto actualizado",
    description: "El gasto se ha actualizado correctamente.",
    type: "success",
  },
];

// export const errorNotificationsActions: string[] = [];

export const successNotificationActions: string[] = [
  "expenses/handleExpensesLoader",
  "expense/expenseUpdated",
];

export const allNotificationsActions: string[] = [
  // ...errorNotificationsActions,
  ...successNotificationActions,
];

export const popUpAllNotifications: NotificationDetails[] = [
  // ...popUpNotificationErrors,
  ...popUpSuccessNotifications,
];

export const getNotificationMessage = (
  process: string
): NotificationDetails | undefined => {
  const notificationMessage = popUpAllNotifications.find(
    (currNotification) => currNotification.process === process
  );

  return notificationMessage ? notificationMessage : undefined;
};
