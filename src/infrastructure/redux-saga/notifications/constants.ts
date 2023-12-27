export enum OperationResult {
  SUCCESS = "success",
  ERROR = "error",
}

export interface NotificationDetails {
  process: string;
  title: string;
  description: string;
  type: "success" | "error" | "info";
  additionalHandling?: () => void;
}

export const popUpErrorNotifications: NotificationDetails[] = [
  {
    process: "updateExpense",
    title: "Ha ocurrido un problema",
    description:
      "El gasto no ha podido actualizarse. Por favor intente nuevamente.",
    type: "error",
  },
  {
    process: "createExpense",
    title: "Gasto creado",
    description: "El gasto no ha podido crearse. Por favor intente nuevamente.",
    type: "error",
  },
];

export const popUpSuccessNotifications: NotificationDetails[] = [
  {
    process: "updateExpense",
    title: "Gasto actualizado",
    description: "El gasto se ha actualizado correctamente.",
    type: "success",
  },
  {
    process: "createExpense",
    title: "Gasto creado",
    description: "El gasto se ha creado correctamente.",
    type: "success",
  },
];

// export const errorNotificationsActions: string[] = [];

export const successNotificationActions: string[] = [
  "expenses/handleExpensesLoader",
];

export const allNotificationsActions: string[] = [
  // ...errorNotificationsActions,
  ...successNotificationActions,
];

export const popUpAllNotifications: NotificationDetails[] = [
  ...popUpErrorNotifications,
  ...popUpSuccessNotifications,
];

export const getNotificationMessage = (
  process: string,
  successOrError: OperationResult
): NotificationDetails | undefined => {
  const notificationMessage = popUpAllNotifications.find(
    (currNotification) =>
      currNotification.process === process &&
      currNotification.type === successOrError
  );

  return notificationMessage ? notificationMessage : undefined;
};
