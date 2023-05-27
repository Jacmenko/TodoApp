import { notifications, type NotificationProps } from "@mantine/notifications";

export const useNotification = () => {
  const showNotification = (config: NotificationProps) => {
    notifications.show({
      autoClose: 3000,
      withCloseButton: true,
      ...config,
    });
  };

  const showErrorNotification = (title: string, message: string) => {
    showNotification({
      color: "red",
      message,
      title,
    });
  };

  return { showErrorNotification };
};
