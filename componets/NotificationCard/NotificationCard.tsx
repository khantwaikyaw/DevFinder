import { Notification } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import styles from "./NotificationCard.module.css";

interface NotificationProps {
  error?: { message: string };
  success?: { message: string };
}

const NotificationCard = ({ error, success }:NotificationProps) => {
  const xIcon = <IconX className={styles.notificationIcon} />;
  const checkIcon = <IconCheck className={styles.notificationIcon} />;

  return (
    <>
      {error && (
        <Notification className={styles.notificationCard} icon={xIcon} color="red" title="Bummer!">
          {error.message}
        </Notification>
      )}
      {success && (
        <Notification className={styles.notificationCard} icon={checkIcon} color="teal" title="All good!">
          {success.message}
        </Notification>
      )}
    </>
  );
};

export default NotificationCard;
